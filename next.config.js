const withPlugins = require('next-compose-plugins');
const withCSS = require('@zeit/next-css');

module.exports = withPlugins([withCSS], {
  target: 'serverless',
  webpack: config => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty'
    };

    return config;
  }
});
