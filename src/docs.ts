import fs from "node:fs/promises";
import path from "node:path";

export const requireDocsPath = () => {
  const raw = process.env.DOCS_PATH;
  if (!raw) {
    throw new Error("DOCS_PATH is required");
  }
  return path.resolve(raw);
};

export const listMarkdownFiles = async (
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

export const safeResolveDocPath = (docsRoot: string, relativePath: string) => {
  if (path.isAbsolute(relativePath)) {
    throw new Error("Absolute paths are not allowed");
  }
  const normalized = relativePath.replace(/\\/g, "/");
  if (normalized.includes("..")) {
    throw new Error("Path traversal detected");
  }
  const resolved = path.resolve(docsRoot, normalized);
  if (!resolved.startsWith(docsRoot + path.sep)) {
    throw new Error("Path traversal detected");
  }
  return resolved;
};

export const uriFromRelativePath = (relativePath: string) =>
  `doc:///${encodeURIComponent(relativePath.replace(/\\/g, "/"))}`;

export const relativePathFromUri = (uri: string) => {
  const prefix = "doc:///";
  if (!uri.startsWith(prefix)) {
    throw new Error("Unsupported resource uri");
  }
  return decodeURIComponent(uri.slice(prefix.length));
};

export const normalizeDocRef = (ref: string) => {
  const trimmed = ref.trim();
  if (trimmed.startsWith("doc:///")) {
    return relativePathFromUri(trimmed);
  }
  return trimmed.replace(/^docs\//, "").replace(/\\/g, "/");
};

const extractSnippet = (text: string, index: number, queryLength: number) => {
  const start = Math.max(0, index - 80);
  const end = Math.min(text.length, index + queryLength + 120);
  const slice = text.slice(start, end).replace(/\s+/g, " ").trim();
  return `${start > 0 ? "…" : ""}${slice}${end < text.length ? "…" : ""}`;
};

export type SearchHit = {
  path: string;
  uri: string;
  score: number;
  snippet: string;
};

export const searchDocs = async (
  docsRoot: string,
  query: string,
  limit: number
): Promise<SearchHit[]> => {
  const needle = query.trim().toLowerCase();
  if (!needle) {
    return [];
  }

  const files = await listMarkdownFiles(docsRoot, docsRoot);
  const hits: SearchHit[] = [];

  for (const relativePath of files) {
    const filePath = safeResolveDocPath(docsRoot, relativePath);
    const text = await fs.readFile(filePath, "utf-8");
    const lower = text.toLowerCase();
    const name = relativePath.toLowerCase();
    let score = 0;
    if (name.includes(needle)) {
      score += 40;
    }
    let from = 0;
    let firstIdx = -1;
    let occurrences = 0;
    while (occurrences < 20) {
      const idx = lower.indexOf(needle, from);
      if (idx === -1) break;
      if (firstIdx === -1) firstIdx = idx;
      occurrences += 1;
      from = idx + needle.length;
    }
    if (occurrences > 0) {
      score += 10 + occurrences;
    }
    if (score === 0) continue;
    const snippetIndex = firstIdx >= 0 ? firstIdx : 0;
    hits.push({
      path: relativePath,
      uri: uriFromRelativePath(relativePath),
      score,
      snippet: extractSnippet(text, snippetIndex, needle.length),
    });
  }

  return hits.sort((a, b) => b.score - a.score).slice(0, limit);
};

export const readDoc = async (docsRoot: string, ref: string) => {
  const relativePath = normalizeDocRef(ref);
  const filePath = safeResolveDocPath(docsRoot, relativePath);
  if (!filePath.toLowerCase().endsWith(".md")) {
    throw new Error("Only .md resources are supported");
  }
  return fs.readFile(filePath, "utf-8");
};
