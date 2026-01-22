const GITHUB_API = "https://api.github.com";

const REPO = process.env.GITHUB_REPO ?? "SberBusiness/triplex-next";
const BRANCH = process.env.GITHUB_BRANCH ?? "main";
const TOKEN = process.env.GITHUB_TOKEN;

const headers: Record<string, string> = {
  "user-agent": "triplex-mcp/0.1.0",
  accept: "application/vnd.github+json",
};

if (TOKEN) {
  headers.authorization = `Bearer ${TOKEN}`;
}

type TreeEntry = {
  path: string;
  type: "blob" | "tree";
  url: string;
};

type TreeResponse = {
  tree: TreeEntry[];
  truncated?: boolean;
};

const fetchJson = async <T>(url: string) => {
  const res = await fetch(url, { headers });
  if (!res.ok) {
    throw new Error(`GitHub API error ${res.status}: ${res.statusText}`);
  }
  return (await res.json()) as T;
};

const listMarkdownFiles = async () => {
  const treeUrl = `${GITHUB_API}/repos/${REPO}/git/trees/${BRANCH}?recursive=1`;
  const data = await fetchJson<TreeResponse>(treeUrl);

  if (data.truncated) {
    console.warn("Warning: GitHub tree response truncated.");
  }

  return data.tree
    .filter((entry) => entry.type === "blob")
    .map((entry) => entry.path)
    .filter(
      (p) => p.toLowerCase().endsWith(".md") || p.toLowerCase().endsWith(".mdx")
    )
    .sort((a, b) => a.localeCompare(b, "en"));
};

const run = async () => {
  const files = await listMarkdownFiles();
  const payload = {
    repo: REPO,
    branch: BRANCH,
    total: files.length,
    files,
  };
  console.log(JSON.stringify(payload, null, 2));
};

await run();
