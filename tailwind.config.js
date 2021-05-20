const palette = require('@ky-is/tailwind-color-palette');
const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

const brand = palette(colors.teal[500], {
  name: 'brand',
  greyscale: false,
  ui: false
});
const brandAlt = palette(colors.red[500], {
  name: 'secondary',
  greyscale: false,
  ui: false
});

module.exports = {
  mode: 'jit',
  darkMode: 'class',
  purge: ['./src/**/*.html', './src/**/*.{js,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ...brand,
        ...brandAlt
        // gray: colors.trueGray
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        head: ['Inter', ...defaultTheme.fontFamily.sans],
        mono: ['Nanum Gothic Coding', ...defaultTheme.fontFamily.mono]
      }
    }
  },
  variants: {},
  plugins: [],
  corePlugins: {
    container: false
  }
};
