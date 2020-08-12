import theme from '@chakra-ui/theme';
import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../../tailwind.config';

const tailwind = resolveConfig(tailwindConfig).theme;

export default {
  ...theme,

  styles: {
    ...theme.styles,

    global: (props) => {
      return {
        ...theme.styles.global,

        body: {
          backgroundColor: props.colorMode !== 'dark' ? 'white' : 'black',
          fontFamily: 'body',
          color: props.colorMode === 'dark' ? 'white' : 'gray.900'
        },

        a: {
          color: props.colorMode === 'dark' ? 'brand.300' : 'brand.500'
        }
      };
    }
  },

  colors: {
    ...theme.colors,
    brand: tailwind.colors.brand,
    brandAlt: tailwind.colors.brandAlt,
    gray: tailwind.colors.gray
  },
  fonts: {
    ...theme.fonts,
    body: tailwind.fontFamily.sans.join(','),
    heading: tailwind.fontFamily.head.join(','),
    serif: tailwind.fontFamily.serif.join(','),
    mono: tailwind.fontFamily.mono.join(',')
  },
  fontSizes: {
    ...theme.fontSizes,
    '2xs': '11px',
    '7xl': '5rem',
    '8xl': '7rem'
  }
};
