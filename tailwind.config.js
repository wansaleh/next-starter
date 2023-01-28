const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
  darkMode: 'class',

  theme: {
    extend: {
      colors: {
        gray: colors.zinc,
      },
      fontFamily: {
        sans: ['neue-haas-unica', ...defaultTheme.fontFamily.sans],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
    },
  },

  corePlugins: {
    container: false,
    aspectRatio: false,
  },

  plugins: [
    function ({ addComponents, matchUtilities, theme }) {
      addComponents({
        '.container': {
          maxWidth: '90rem',
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: theme('spacing.6'),
          paddingRight: theme('spacing.6'),
          // '@screen md': { maxWidth: '50rem' },
          // '@screen lg': { maxWidth: '62rem' },
          // '@screen xl': { maxWidth: '80rem' },
          // '@screen 2xl': { maxWidth: '90rem' },
        },
      });

      matchUtilities(
        // https://gist.github.com/olets/9b833a33d01384eed1e9f1e106003a3b
        {
          aspect: (value) => ({
            '@supports (aspect-ratio: 1 / 1)': {
              aspectRatio: value,
            },
            '@supports not (aspect-ratio: 1 / 1)': {
              // https://github.com/takamoso/postcss-aspect-ratio-polyfill

              '&::before': {
                content: '""',
                float: 'left',
                paddingTop: `calc(100% / (${value}))`,
              },
              '&::after': {
                clear: 'left',
                content: '""',
                display: 'block',
              },
            },
          }),
        },
        { values: theme('aspectRatio') },
      );
    },
  ],
};
