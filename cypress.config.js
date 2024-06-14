const { defineConfig } = require('cypress');

module.exports = defineConfig({
  env: {
    apiUrl: 'https://api.example.com',
  },
  pageLoadTimeout: 60000,
  defaultCommandTimeout: 10000,
});
