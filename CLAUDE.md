# Project Summary

Minimal MCP server that exposes Triplex documentation markdown files as MCP resources for Cursor.

# Goals

- Provide MCP resources/list and resources/read for markdown docs
- Keep docs on disk without DB or indexing
- Allow periodic docs refresh via a simple harvesting script

# Tech Stack

- Node.js 20+
- TypeScript
- @modelcontextprotocol/sdk
- cheerio + node-html-markdown (for harvesting)

# Directory Structure

- `src/` server and scripts
- `docs/` markdown docs
- `dist/` compiled output

# Coding Rules

- Functional style, no classes
- Minimal logic, no extra layers
- TypeScript strict mode

# Naming

- `DOCS_PATH` env var controls docs root
- Resources use `doc:///relative-path.md` URIs

# Architecture

- `src/server.ts` exposes docs as MCP resources
- `src/harvest.ts` downloads and converts external docs to markdown
