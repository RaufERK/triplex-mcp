# triplex-mcp

MCP Server for Triplex documentation.

## Deployment Setup

Before deploying, create `.env.deploy` file:

```bash
cp .env.deploy.example .env.deploy
```

Edit `.env.deploy` with your server credentials:

```env
DEPLOY_HOST=your.server.ip
DEPLOY_USER=your_username
DEPLOY_PATH=/path/to/deploy
```

**⚠️ NEVER commit `.env.deploy` to git!**

## Deploy

```bash
npm run build
pm2 deploy ecosystem.config.cjs production
```
