module.exports = {
  apps: [
    {
      name: 'novabridge-api',
      script: 'npm',
      args: 'run start --workspace @novabridge/api',
      cwd: __dirname,
      env: {
        NODE_ENV: 'production'
      }
    },
    {
      name: 'novabridge-bot',
      script: 'npm',
      args: 'run start --workspace @novabridge/bot',
      cwd: __dirname,
      env: {
        NODE_ENV: 'production'
      }
    }
  ]
}
