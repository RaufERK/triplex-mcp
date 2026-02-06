import fs from "node:fs/promises";
import path from "node:path";
import { NodeHtmlMarkdown } from "node-html-markdown";
import { load } from "cheerio";
import { docList } from "./doc-list.js";

const DOCS_PATH = process.env.DOCS_PATH
  ? path.resolve(process.env.DOCS_PATH)
  : path.resolve(process.cwd(), "docs");

type Source = {
  slug: string;
  url: string;
  type: "markdown" | "npm-registry" | "html";
  selectorHints?: string[];
};

const BASE_SOURCES: Source[] = [
  {
    slug: "triplex-next-readme",
    url: "https://raw.githubusercontent.com/SberBusiness/triplex-next/master/README.md",
    type: "markdown",
  },
  {
    slug: "triplex-next-npm",
    url: "https://registry.npmjs.org/@sberbusiness/triplex-next",
    type: "npm-registry",
  },
  {
    slug: "triplex-next-site",
    url: "https://triplex-design.ru/next/ru/Web",
    type: "html",
  },
];

const storybookSelectorHints = ["#storybook-root", "main", "body"];

const isStorybookUrl = (url: string) =>
  url.startsWith("https://storybook.triplex-dev.ru/main/");

const slugFromUrl = (url: string) => {
  const parsed = new URL(url);
  if (parsed.hostname === "storybook.triplex-dev.ru") {
    const pathParam = parsed.searchParams.get("path") ?? "main";
    return `triplex-storybook-${pathParam.replace(/[^\w-]/g, "-")}`;
  }
  return `triplex-${parsed.hostname.replace(/[^\w-]/g, "-")}-${parsed.pathname
    .replace(/[^\w-]/g, "-")
    .replace(/^-+|-+$/g, "")}`;
};

const docListSources: Source[] = docList
  .filter((url) => isStorybookUrl(url))
  .map((url) => ({
    slug: slugFromUrl(url),
    url,
    type: "html" as const,
    selectorHints: storybookSelectorHints,
  }));

const SOURCES: Source[] = [...BASE_SOURCES, ...docListSources];

const ensureDocsDir = async () => {
  await fs.mkdir(DOCS_PATH, { recursive: true });
};

const toMarkdown = (html: string, selectorHints?: string[]) => {
  const $ = load(html);
  let htmlChunk = "";

  if (selectorHints?.length) {
    for (const selector of selectorHints) {
      const node = $(selector).first();
      if (node.length) {
        htmlChunk = node.html() ?? "";
        if (htmlChunk.trim()) break;
      }
    }
  }

  if (!htmlChunk.trim()) {
    const body = $("body").first();
    htmlChunk = body.length ? body.html() ?? "" : "";
  }

  const markdown = NodeHtmlMarkdown.translate(htmlChunk || html);
  return markdown.trim() + "\n";
};

const fetchText = async (url: string, headers?: Record<string, string>) => {
  const res = await fetch(url, { redirect: "follow", headers });
  if (!res.ok) {
    throw new Error(`Failed to fetch ${url}: ${res.status} ${res.statusText}`);
  }
  return await res.text();
};

const writeDoc = async (slug: string, content: string, sourceUrl: string) => {
  const header = `# ${slug}\n\nSource: ${sourceUrl}\n\n---\n\n`;
  const filePath = path.join(DOCS_PATH, `${slug}.md`);
  await fs.writeFile(filePath, header + content, "utf-8");
};

const writeIndex = async () => {
  const entries = await fs.readdir(DOCS_PATH, { withFileTypes: true });
  const files = entries
    .filter((entry) => entry.isFile() && entry.name.endsWith(".md"))
    .map((entry) => entry.name)
    .filter((name) => name !== "index.md")
    .sort((a, b) => a.localeCompare(b, "en"));

  const lines = [
    "# Triplex Docs Index",
    "",
    `Updated: ${new Date().toISOString()}`,
    "",
    ...files.map((name) => `- [${name}](./${name})`),
    "",
  ];

  await fs.writeFile(path.join(DOCS_PATH, "index.md"), lines.join("\n"), "utf-8");
};

export const runHarvest = async () => {
  console.log(`[harvest] Starting at ${new Date().toISOString()}`);
  await ensureDocsDir();

  for (const source of SOURCES) {
    try {
      const raw = await fetchText(source.url, {
        "user-agent":
          "triplex-mcp/0.1.0 (+https://github.com/SberBusiness/triplex-next)",
        accept:
          source.type === "npm-registry"
            ? "application/json"
            : "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
      });
      const content = (() => {
        if (source.type === "markdown") {
          return raw.trim() + "\n";
        }
        if (source.type === "npm-registry") {
          const data = JSON.parse(raw) as { readme?: string };
          return (data.readme ?? "").trim() + "\n";
        }
        return toMarkdown(raw, source.selectorHints);
      })();
      await writeDoc(source.slug, content, source.url);
      console.log(`[harvest] OK: ${source.slug}`);
    } catch (err) {
      console.error(`[harvest] FAIL: ${source.slug}`, err);
    }
  }

  await writeIndex();
  console.log(`[harvest] Done at ${new Date().toISOString()}`);
};

// Если запущен напрямую (npm run harvest)
const isDirectRun = process.argv[1]?.includes("harvest");
if (isDirectRun) {
  await runHarvest();
}
