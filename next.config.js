const withPlugins = require('next-compose-plugins');
const withImages = require('next-optimized-images');

module.exports = withPlugins([[withImages]], {
  future: {
    webpack5: true
  }
});
