module.exports = {
  apps: [
    {
      name: 'triplex-mcp',
      cwd: '/home/appuser/apps/triplex-mcp/source',
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
        DOCS_PATH: '/home/appuser/apps/triplex-mcp/source/docs',
      },
    },
  ],

  deploy: {
    production: {
      user: 'appuser',
      host: '185.200.178.73',
      ref: 'origin/main',
      repo: 'https://github.com/RaufERK/triplex-mcp.git',
      path: '/home/appuser/apps/triplex-mcp',
      'pre-deploy-local': '',
      'post-deploy': [
        'export NODE_ENV=production',
        'source ~/.nvm/nvm.sh && nvm use 24',
        'ln -sfn /home/appuser/apps/triplex-mcp/shared/.env ./.env',
        'npm ci',
        'npm run build',
        'npm prune --production',
        'pm2 startOrReload ecosystem.config.cjs --env production',
        'pm2 save',
      ].join(' && '),
      env: {
        NODE_ENV: 'production',
      },
    },
  },
}
