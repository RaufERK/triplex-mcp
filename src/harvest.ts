import fs from "node:fs/promises";
import path from "node:path";
import { chromium, Browser } from "playwright";
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
const grafanaSelectorHints = ["main", "article", ".docs-content", "body"];

const isStorybookUrl = (url: string) =>
  url.startsWith("https://storybook.triplex-dev.ru/main/");

const isNpmUrl = (url: string) =>
  url.startsWith("https://www.npmjs.com/package/");

const isGithubUrl = (url: string) =>
  url.startsWith("https://github.com/");

const isGrafanaUrl = (url: string) =>
  url.startsWith("https://grafana.com/docs/");

const isSpaUrl = (url: string) =>
  isGrafanaUrl(url);

const slugFromUrl = (url: string) => {
  const parsed = new URL(url);
  if (parsed.hostname === "storybook.triplex-dev.ru") {
    const pathParam = parsed.searchParams.get("path") ?? "main";
    return `triplex-storybook-${pathParam.replace(/[^\w-]/g, "-")}`;
  }
  if (parsed.hostname === "www.npmjs.com") {
    // /package/tot-ui-kit -> npm-tot-ui-kit
    const packageName = parsed.pathname.replace("/package/", "").replace(/\//g, "-");
    return `npm-${packageName.replace(/[^\w-]/g, "-")}`;
  }
  if (parsed.hostname === "github.com") {
    // /SberBusiness/icons -> github-SberBusiness-icons
    const repoPath = parsed.pathname.replace(/^\/|\/$/g, "").replace(/\//g, "-");
    return `github-${repoPath.replace(/[^\w-]/g, "-")}`;
  }
  return `triplex-${parsed.hostname.replace(/[^\w-]/g, "-")}-${parsed.pathname
    .replace(/[^\w-]/g, "-")
    .replace(/^-+|-+$/g, "")}`;
};

const getSourceType = (url: string): Source["type"] => {
  if (isNpmUrl(url)) return "npm-registry";
  return "html";
};

const getNpmRegistryUrl = (url: string): string => {
  // https://www.npmjs.com/package/tot-ui-kit -> https://registry.npmjs.org/tot-ui-kit
  const packageName = new URL(url).pathname.replace("/package/", "");
  return `https://registry.npmjs.org/${packageName}`;
};

const getSelectorHints = (url: string): string[] | undefined => {
  if (isStorybookUrl(url)) return storybookSelectorHints;
  if (isGrafanaUrl(url)) return grafanaSelectorHints;
  return undefined;
};

const docListSources: Source[] = docList.map((url) => {
  const type = getSourceType(url);
  const actualUrl = isNpmUrl(url) ? getNpmRegistryUrl(url) : url;
  return {
    slug: slugFromUrl(url),
    url: actualUrl,
    type,
    selectorHints: getSelectorHints(url),
  };
});

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

const fetchWithBrowser = async (browser: Browser, url: string) => {
  const page = await browser.newPage();
  try {
    await page.goto(url, { waitUntil: "domcontentloaded", timeout: 60000 });
    await page.waitForTimeout(5000);
    const html = await page.content();
    return html;
  } finally {
    await page.close();
  }
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

  const hasSpaUrls = SOURCES.some((s) => isSpaUrl(s.url));
  let browser: Browser | null = null;

  if (hasSpaUrls) {
    console.log("[harvest] Launching browser for SPA pages...");
    browser = await chromium.launch({ headless: true });
  }

  try {
    for (const source of SOURCES) {
      try {
        const needsBrowser = isSpaUrl(source.url);
        
        const raw = needsBrowser && browser
          ? await fetchWithBrowser(browser, source.url)
          : await fetchText(source.url, {
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
        console.log(`[harvest] OK: ${source.slug}${needsBrowser ? " (browser)" : ""}`);
      } catch (err) {
        console.error(`[harvest] FAIL: ${source.slug}`, err);
      }
    }
  } finally {
    if (browser) {
      await browser.close();
      console.log("[harvest] Browser closed");
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
