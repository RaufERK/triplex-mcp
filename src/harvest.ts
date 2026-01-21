import fs from "node:fs/promises";
import path from "node:path";
import { NodeHtmlMarkdown } from "node-html-markdown";
import { load } from "cheerio";

const DOCS_PATH = process.env.DOCS_PATH
  ? path.resolve(process.env.DOCS_PATH)
  : path.resolve(process.cwd(), "docs");

const SOURCES = [
  {
    slug: "triplex-next-readme",
    url: "https://raw.githubusercontent.com/SberBusiness/triplex-next/master/README.md",
    type: "markdown",
  },
  {
    slug: "triplex-next-npm",
    url: "https://www.npmjs.com/package/@sberbusiness/triplex-next",
    type: "html",
  },
  {
    slug: "triplex-next-site",
    url: "https://triplex-design.ru/next/ru/Web",
    type: "html",
  },
  {
    slug: "triplex-storybook-design-tokens-color",
    url: "https://storybook.triplex-dev.ru/main/?path=/story/design-tokens-core--color",
    type: "html",
    selectorHints: ["#storybook-root", "main", "body"],
  },
  {
    slug: "triplex-storybook-design-tokens-about",
    url: "https://storybook.triplex-dev.ru/main/?path=/docs/design-tokens-about--docs",
    type: "html",
    selectorHints: ["#storybook-root", "main", "body"],
  },
  {
    slug: "triplex-storybook-components-amount",
    url: "https://storybook.triplex-dev.ru/main/?path=/docs/components-amount--docs",
    type: "html",
    selectorHints: ["#storybook-root", "main", "body"],
  },
];

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

const fetchText = async (url: string) => {
  const res = await fetch(url, { redirect: "follow" });
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

const run = async () => {
  await ensureDocsDir();

  for (const source of SOURCES) {
    const raw = await fetchText(source.url);
    const content =
      source.type === "markdown"
        ? raw.trim() + "\n"
        : toMarkdown(raw, source.selectorHints);
    await writeDoc(source.slug, content, source.url);
  }
};

await run();
