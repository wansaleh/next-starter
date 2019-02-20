module.exports = {
  plugins: [
    require('tailwindcss')('./tailwind.js'),
    require('postcss-nested')(),
    require('autoprefixer')({})
  ]
};
