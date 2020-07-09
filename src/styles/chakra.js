import { theme } from '@chakra-ui/core';
import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../../tailwind.config';

const tw = resolveConfig(tailwindConfig);

export default {
  containerProps: {
    maxW: '5xl',
    w: '100vw',
    mx: 'auto',
    px: 4
  },
  contentWidth: '5xl',
  ...theme,
  colors: {
    ...theme.colors,
    brand: tw.theme.colors.brand
  },
  fonts: {
    ...theme.fonts,
    body: `'SF Text', 'SF Display', ${theme.fonts.body}`,
    heading: `'SF Display', ${theme.fonts.heading}`,
    serif: `Merriweather, serif, ${theme.fonts.body}`
  },
  fontSizes: {
    ...theme.fontSizes,
    '2xs': '11px'
  }
};
