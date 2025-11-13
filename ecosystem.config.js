module.exports = {
  apps: [
    {
      name: 'roulette',
      script: './server.js',
      env: {
        NODE_ENV: 'development'
      }
    }
  ]
};
