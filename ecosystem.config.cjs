module.exports = {
  apps: [
    {
      name: 'triplex-mcp',
      script: 'dist/server.js',
      instances: 1,
      exec_mode: 'fork',
      watch: false,
      max_memory_restart: '256M',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      log_file: '/home/appuser/logs/triplex-mcp-combined.log',
      out_file: '/home/appuser/logs/triplex-mcp-out.log',
      error_file: '/home/appuser/logs/triplex-mcp-error.log',
      env: {
        NODE_ENV: 'production',
        PORT: 3041,
      },
    },
  ],

  deploy: {
    production: {
      user: 'appuser',
      host: '185.200.178.73',
      ref: 'origin/main',
      repo: 'GIT_REPO_URL_HERE', // замените на реальный URL репозитория
      path: '/home/appuser/apps/triplex-mcp',
      'pre-deploy-local': '',
      'post-deploy': [
        'export NODE_ENV=production',
        'source ~/.nvm/nvm.sh && nvm use 24',
        'ln -sfn /home/appuser/apps/triplex-mcp/shared/.env ./.env',
        'npm ci --omit=dev',
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
