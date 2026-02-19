import fs from "node:fs/promises";
import path from "node:path";
import { chromium, Browser } from "playwright";
import { NodeHtmlMarkdown } from "node-html-markdown";
import { load } from "cheerio";
import { docList } from "./doc-list.js";

const DOCS_PATH = process.env.DOCS_PATH
  ? path.resolve(process.env.DOCS_PATH)
  : path.resolve(process.cwd(), "docs");

const OPENAI_API_KEY = process.env.OPENAI_API_KEY ?? "";
const USE_GPT_CLEANING = process.env.USE_GPT_CLEANING === "true";

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

const storybookSelectorHints = [".sbdocs", "#docs-root", "article", "#storybook-root", "body"];
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
  isGrafanaUrl(url) || isStorybookUrl(url);

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
  if (isGithubUrl(url)) return "markdown";
  return "html";
};

const getNpmRegistryUrl = (url: string): string => {
  // https://www.npmjs.com/package/tot-ui-kit -> https://registry.npmjs.org/tot-ui-kit
  const packageName = new URL(url).pathname.replace("/package/", "");
  return `https://registry.npmjs.org/${packageName}`;
};

const getGithubReadmeUrl = (url: string): string => {
  // https://github.com/SberBusiness/icons -> raw README
  const parsed = new URL(url);
  const repoPath = parsed.pathname.replace(/^\/|\/$/g, "");
  // Пробуем main, потом master
  return `https://raw.githubusercontent.com/${repoPath}/main/README.md`;
};

const fetchGithubReadme = async (url: string): Promise<string> => {
  const parsed = new URL(url);
  const repoPath = parsed.pathname.replace(/^\/|\/$/g, "");
  
  // Пробуем main
  const mainUrl = `https://raw.githubusercontent.com/${repoPath}/main/README.md`;
  try {
    const res = await fetch(mainUrl, { redirect: "follow" });
    if (res.ok) return await res.text();
  } catch {}
  
  // Пробуем master
  const masterUrl = `https://raw.githubusercontent.com/${repoPath}/master/README.md`;
  const res = await fetch(masterUrl, { redirect: "follow" });
  if (!res.ok) {
    throw new Error(`GitHub README not found for ${url}`);
  }
  return await res.text();
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
    
    // Storybook загружает контент в iframe
    if (isStorybookUrl(url)) {
      const frames = page.frames();
      const iframe = frames.find(f => f.url().includes('iframe.html'));
      if (iframe) {
        await page.waitForTimeout(2000);
        return await iframe.content();
      }
    }
    
    return await page.content();
  } finally {
    await page.close();
  }
};

const GPT_SYSTEM_PROMPT = `Ты — эксперт по извлечению документации. Твоя задача — извлечь ТОЛЬКО полезную документацию из предоставленного контента.

ПРАВИЛА:
1. УДАЛИ полностью: навигацию, меню, футеры, рекламу, кнопки "Show code", "Copy", UI контролы, ссылки на другие страницы
2. СОХРАНИ: заголовки, описания компонентов, таблицы с Props/API, примеры кода, важные заметки
3. Для UI компонентов сохрани: название, описание, Props таблицу, примеры использования
4. Для API документации сохрани: endpoints, параметры, примеры запросов/ответов
5. Форматируй как чистый Markdown
6. НЕ добавляй свои комментарии или пояснения
7. Если контент пустой или бесполезный — верни "No documentation content found."

ФОРМАТ ОТВЕТА:
Верни только чистый markdown документации, без обёрток и пояснений.`;

const cleanWithGPT = async (rawContent: string, sourceUrl: string): Promise<string> => {
  if (!OPENAI_API_KEY) {
    console.warn("[GPT] No API key, skipping cleaning");
    return rawContent;
  }

  const truncated = rawContent.slice(0, 30000);

  const body = {
    model: "gpt-4o-mini",
    temperature: 0.1,
    max_tokens: 4000,
    messages: [
      { role: "system", content: GPT_SYSTEM_PROMPT },
      { role: "user", content: `URL: ${sourceUrl}\n\nКонтент:\n${truncated}` },
    ],
  };

  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${OPENAI_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const txt = await res.text().catch(() => "");
    throw new Error(`OpenAI error ${res.status}: ${txt}`);
  }

  const json = (await res.json()) as any;
  const text = json.choices?.[0]?.message?.content;
  
  if (!text || typeof text !== "string") {
    throw new Error("OpenAI: missing message content");
  }

  return text.trim() + "\n";
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
  console.log(`[harvest] GPT cleaning: ${USE_GPT_CLEANING ? "ENABLED" : "disabled"}`);
  await ensureDocsDir();

  const spaCount = SOURCES.filter((s) => isSpaUrl(s.url)).length;
  let browser: Browser | null = null;

  if (spaCount > 0) {
    console.log(`[harvest] Launching browser for ${spaCount} SPA pages...`);
    browser = await chromium.launch({ headless: true });
  }

  try {
    for (const source of SOURCES) {
      try {
        const needsBrowser = isSpaUrl(source.url);
        const isGithub = isGithubUrl(source.url);
        
        let raw: string;
        
        if (isGithub) {
          raw = await fetchGithubReadme(source.url);
        } else if (needsBrowser && browser) {
          raw = await fetchWithBrowser(browser, source.url);
        } else {
          raw = await fetchText(source.url, {
            "user-agent":
              "triplex-mcp/0.1.0 (+https://github.com/SberBusiness/triplex-next)",
            accept:
              source.type === "npm-registry"
                ? "application/json"
                : "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
          });
        }

        let content: string;
        
        if (source.type === "markdown") {
          content = raw.trim() + "\n";
        } else if (source.type === "npm-registry") {
          const data = JSON.parse(raw) as { readme?: string };
          content = (data.readme ?? "").trim() + "\n";
        } else {
          const markdown = toMarkdown(raw, source.selectorHints);
          
          if (USE_GPT_CLEANING && needsBrowser) {
            content = await cleanWithGPT(markdown, source.url);
          } else {
            content = markdown;
          }
        }
        
        await writeDoc(source.slug, content, source.url);
        const method = isGithub ? " (raw)" : needsBrowser ? (USE_GPT_CLEANING ? " (GPT)" : " (browser)") : "";
        console.log(`[harvest] OK: ${source.slug}${method}`);
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
