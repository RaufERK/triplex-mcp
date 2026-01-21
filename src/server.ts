import fs from "node:fs/promises";
import path from "node:path";
import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  ListResourcesRequestSchema,
  ReadResourceRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";

const DOCS_PATH = process.env.DOCS_PATH
  ? path.resolve(process.env.DOCS_PATH)
  : null;

if (!DOCS_PATH) {
  throw new Error("DOCS_PATH is required");
}

const server = new Server(
  {
    name: "triplex-mcp",
    version: "0.1.0",
  },
  {
    capabilities: {
      resources: {},
    },
  }
);

const listMarkdownFiles = async (
  dir: string,
  baseDir: string
): Promise<string[]> => {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files: string[] = [];

  for (const entry of entries) {
    if (entry.name.startsWith(".")) continue;
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await listMarkdownFiles(fullPath, baseDir)));
      continue;
    }
    if (entry.isFile() && entry.name.toLowerCase().endsWith(".md")) {
      files.push(path.relative(baseDir, fullPath));
    }
  }

  return files.sort();
};

const safeResolveDocPath = (relativePath: string) => {
  if (path.isAbsolute(relativePath)) {
    throw new Error("Absolute paths are not allowed");
  }
  const normalized = relativePath.replace(/\\/g, "/");
  if (normalized.includes("..")) {
    throw new Error("Path traversal detected");
  }
  const resolved = path.resolve(DOCS_PATH, normalized);
  if (!resolved.startsWith(DOCS_PATH + path.sep)) {
    throw new Error("Path traversal detected");
  }
  return resolved;
};

const uriFromRelativePath = (relativePath: string) =>
  `doc:///${encodeURIComponent(relativePath.replace(/\\/g, "/"))}`;

const relativePathFromUri = (uri: string) => {
  const prefix = "doc:///";
  if (!uri.startsWith(prefix)) {
    throw new Error("Unsupported resource uri");
  }
  const encoded = uri.slice(prefix.length);
  return decodeURIComponent(encoded);
};

server.setRequestHandler(ListResourcesRequestSchema, async () => {
  const files = await listMarkdownFiles(DOCS_PATH, DOCS_PATH);
  const resources = files.map((relativePath) => ({
    uri: uriFromRelativePath(relativePath),
    name: path.basename(relativePath),
    description: relativePath,
    mimeType: "text/markdown",
  }));
  return { resources };
});

server.setRequestHandler(ReadResourceRequestSchema, async (request) => {
  const relativePath = relativePathFromUri(request.params.uri);
  const filePath = safeResolveDocPath(relativePath);
  if (!filePath.toLowerCase().endsWith(".md")) {
    throw new Error("Only .md resources are supported");
  }
  const text = await fs.readFile(filePath, "utf-8");
  return {
    contents: [
      {
        uri: request.params.uri,
        mimeType: "text/markdown",
        text,
      },
    ],
  };
});

const transport = new StdioServerTransport();
await server.connect(transport);
