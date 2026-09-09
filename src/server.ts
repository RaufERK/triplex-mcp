import "dotenv/config";
import { createServer, type IncomingMessage, type ServerResponse } from "node:http";
import { timingSafeEqual } from "node:crypto";
import path from "node:path";
import cron from "node-cron";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { StreamableHTTPServerTransport } from "@modelcontextprotocol/sdk/server/streamableHttp.js";
import {
  ListResourcesRequestSchema,
  ReadResourceRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";
import { z } from "zod";
import { runHarvest } from "./harvest.js";
import {
  listMarkdownFiles,
  readDoc,
  relativePathFromUri,
  requireDocsPath,
  searchDocs,
  uriFromRelativePath,
} from "./docs.js";

const DOCS_PATH = requireDocsPath();
const PORT = process.env.PORT ? Number(process.env.PORT) : null;
const HOST = process.env.HOST ?? "127.0.0.1";
const MCP_AUTH_TOKEN = process.env.MCP_AUTH_TOKEN ?? "";

const createMcpServer = () => {
  const server = new McpServer(
    {
      name: "triplex-mcp",
      version: "0.1.0",
    },
    {
      capabilities: {
        resources: {},
        tools: {},
      },
    }
  );

  server.registerTool(
    "search_docs",
    {
      title: "Search Triplex docs",
      description:
        "Search harvested Triplex / Storybook markdown docs by component name, API, or phrase. Returns ranked paths and snippets. Use read_doc with a returned path to get the full page.",
      inputSchema: {
        query: z.string().describe("Search query, e.g. Button, Chip, DateField"),
        limit: z
          .number()
          .int()
          .min(1)
          .max(20)
          .optional()
          .describe("Max hits to return (default 8)"),
      },
    },
    async ({ query, limit }) => {
      const hits = await searchDocs(DOCS_PATH, query, limit ?? 8);
      if (hits.length === 0) {
        return {
          content: [
            {
              type: "text",
              text: `No docs matched ${JSON.stringify(query)}.`,
            },
          ],
        };
      }
      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(hits, null, 2),
          },
        ],
      };
    }
  );

  server.registerTool(
    "read_doc",
    {
      title: "Read Triplex doc",
      description:
        "Read a full harvested markdown doc. Pass a relative path or doc:/// URI from search_docs.",
      inputSchema: {
        path: z
          .string()
          .describe("Relative .md path or doc:/// URI returned by search_docs"),
      },
    },
    async ({ path: docPath }) => {
      const text = await readDoc(DOCS_PATH, docPath);
      return {
        content: [
          {
            type: "text",
            text,
          },
        ],
      };
    }
  );

  server.server.setRequestHandler(ListResourcesRequestSchema, async () => {
    const files = await listMarkdownFiles(DOCS_PATH, DOCS_PATH);
    const resources = files.map((relativePath) => ({
      uri: uriFromRelativePath(relativePath),
      name: path.basename(relativePath),
      description: relativePath,
      mimeType: "text/markdown",
    }));
    return { resources };
  });

  server.server.setRequestHandler(ReadResourceRequestSchema, async (request) => {
    const relativePath = relativePathFromUri(request.params.uri);
    const text = await readDoc(DOCS_PATH, relativePath);
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

  return server;
};

const bearerOk = (header: string | undefined) => {
  if (!MCP_AUTH_TOKEN) return false;
  const expected = Buffer.from(`Bearer ${MCP_AUTH_TOKEN}`);
  const actual = Buffer.from(header ?? "");
  if (actual.length !== expected.length) return false;
  return timingSafeEqual(actual, expected);
};

cron.schedule("0 3 * * *", async () => {
  try {
    await runHarvest();
  } catch (err) {
    console.error("[cron] Harvest failed:", err);
  }
});

const startStdio = async () => {
  const server = createMcpServer();
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("[server] Triplex MCP stdio started. Harvest scheduled at 03:00 daily.");
};

const startHttp = async () => {
  if (!PORT || Number.isNaN(PORT)) {
    throw new Error("PORT must be a number");
  }
  if (!MCP_AUTH_TOKEN) {
    throw new Error("MCP_AUTH_TOKEN is required for HTTP mode");
  }

  const httpServer = createServer(async (req: IncomingMessage, res: ServerResponse) => {
    const url = new URL(req.url ?? "/", "http://127.0.0.1");

    if (req.method === "GET" && url.pathname === "/health") {
      res.writeHead(200, { "content-type": "text/plain" });
      res.end("ok");
      return;
    }

    if (url.pathname !== "/mcp") {
      res.writeHead(404).end("not found");
      return;
    }

    if (!bearerOk(req.headers.authorization)) {
      res.writeHead(401, {
        "content-type": "text/plain",
        "www-authenticate": "Bearer",
      });
      res.end("unauthorized");
      return;
    }

    if (req.method !== "POST") {
      res.writeHead(405, { "content-type": "application/json" });
      res.end(
        JSON.stringify({
          jsonrpc: "2.0",
          error: { code: -32000, message: "Method not allowed." },
          id: null,
        })
      );
      return;
    }

    const mcp = createMcpServer();
    const transport = new StreamableHTTPServerTransport({
      sessionIdGenerator: undefined,
      enableJsonResponse: true,
    });
    await mcp.connect(transport);
    res.on("close", () => {
      void transport.close();
      void mcp.close();
    });
    try {
      await transport.handleRequest(req, res);
    } catch (err) {
      console.error("[server] MCP request failed:", err);
      if (!res.headersSent) {
        res.writeHead(500, { "content-type": "application/json" });
        res.end(
          JSON.stringify({
            jsonrpc: "2.0",
            error: { code: -32603, message: "Internal server error" },
            id: null,
          })
        );
      }
    }
  });

  await new Promise<void>((resolve, reject) => {
    httpServer.listen(PORT, HOST, () => resolve());
    httpServer.on("error", reject);
  });

  console.error(
    `[server] Triplex MCP HTTP on http://${HOST}:${PORT}/mcp. Harvest scheduled at 03:00 daily.`
  );
};

if (PORT) {
  await startHttp();
} else {
  await startStdio();
}
