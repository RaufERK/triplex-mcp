// Load .env.deploy only for local deployment (not on server)
try {
  require('dotenv').config({ path: '.env.deploy' })
} catch (e) {
  // dotenv not available (on server after npm prune)
}

const DEPLOY_HOST = process.env.DEPLOY_HOST || 'your.server.ip'
const DEPLOY_USER = process.env.DEPLOY_USER || 'appuser'
const DEPLOY_PATH = process.env.DEPLOY_PATH || '/home/appuser/apps/triplex-mcp'

module.exports = {
  apps: [
    {
      name: 'triplex-mcp',
      cwd: `${DEPLOY_PATH}/source`,
      script: 'dist/server.js',
      instances: 1,
      exec_mode: 'fork',
      watch: false,
      max_memory_restart: '256M',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      log_file: `/home/${DEPLOY_USER}/logs/triplex-mcp-combined.log`,
      out_file: `/home/${DEPLOY_USER}/logs/triplex-mcp-out.log`,
      error_file: `/home/${DEPLOY_USER}/logs/triplex-mcp-error.log`,
      env: {
        NODE_ENV: 'production',
        PORT: 3041,
        DOCS_PATH: `${DEPLOY_PATH}/source/docs`,
      },
    },
  ],

  deploy: {
    production: {
      user: DEPLOY_USER,
      host: DEPLOY_HOST,
      ref: 'origin/main',
      repo: 'https://github.com/RaufERK/triplex-mcp.git',
      path: DEPLOY_PATH,
      'pre-deploy-local': '',
      'post-deploy': [
        'export NODE_ENV=production',
        'source ~/.nvm/nvm.sh && nvm use 24',
        `ln -sfn ${DEPLOY_PATH}/shared/.env ./.env`,
        'npm ci --include=dev',
        'npm run build',
        'pm2 startOrReload ecosystem.config.cjs --env production',
        'pm2 save',
      ].join(' && '),
      env: {
        NODE_ENV: 'production',
      },
    },
  },
}
