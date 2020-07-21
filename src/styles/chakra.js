import { theme } from '@chakra-ui/core';
import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../../tailwind.config';

const tailwind = resolveConfig(tailwindConfig).theme;

export default {
  containerProps: {
    maxW: '4xl',
    w: '100vw',
    mx: 'auto',
    px: 4
  },
  contentWidth: '5xl',
  ...theme,
  colors: {
    ...theme.colors,
    brand: tailwind.colors.brand
  },
  fonts: {
    ...theme.fonts,
    body: tailwind.fontFamily.sans.join(','),
    heading: tailwind.fontFamily.head.join(','),
    serif: tailwind.fontFamily.serif.join(',')
  },
  fontSizes: {
    ...theme.fontSizes,
    '2xs': '11px',
    '7xl': '5rem',
    '8xl': '7rem'
  }
};
