const compose = require('lodash/fp/compose');
const withCSS = require('@zeit/next-css');
const withSASS = require('@zeit/next-sass');
const withImages = require('next-images');
const withFonts = require('next-fonts');

module.exports = compose([withCSS, withSASS, withImages, withFonts])({
  // target: 'serverless',
  cssModules: true,
  webpack: config => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty'
    };

    return config;
  }
});
