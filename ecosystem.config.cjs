const DEPLOY_HOST = 'amster_app'
const DEPLOY_USER = 'appuser'
const DEPLOY_PATH = '/home/appuser/apps/triplex-mcp'
const NODE_VERSION = '24.14.1'
const NVM_BIN = `/home/${DEPLOY_USER}/.nvm/versions/node/v${NODE_VERSION}/bin`
const NODE_BIN = `${NVM_BIN}/node`
const PM2_BIN = `${NVM_BIN}/pm2`

module.exports = {
  apps: [
    {
      name: 'triplex-mcp',
      cwd: `${DEPLOY_PATH}/source`,
      interpreter: NODE_BIN,
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
        `source ~/.nvm/nvm.sh && nvm use ${NODE_VERSION}`,
        `ln -sfn ${DEPLOY_PATH}/shared/.env ./.env`,
        'npm ci --include=dev',
        'npx playwright install chromium',
        'npm run build',
        'chmod +x bin/start-mcp.sh',
        `DOCS_PATH=${DEPLOY_PATH}/source/docs npm run harvest`,
        `${PM2_BIN} startOrReload ecosystem.config.cjs --env production`,
        `${PM2_BIN} save`,
      ].join(' && '),
      env: {
        NODE_ENV: 'production',
      },
    },
  },
}
