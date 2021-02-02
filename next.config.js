const withPlugins = require('next-compose-plugins');
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
