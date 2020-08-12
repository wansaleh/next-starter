const withPlugins = require('next-compose-plugins');
// const withCSS = require('@zeit/next-css');
// const withSASS = require('@zeit/next-sass');
const withFonts = require('next-fonts');
const withImages = require('next-optimized-images');

module.exports = withPlugins([[withImages], [withFonts]], {
  webpack: (config) => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty'
    };

    return config;
  }
});
