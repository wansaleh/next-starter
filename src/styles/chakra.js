import { extendTheme } from '@chakra-ui/react';
import resolveConfig from 'tailwindcss/resolveConfig';

import tailwindConfig from '../../tailwind.config';

const tailwind = resolveConfig(tailwindConfig).theme;

function convertFonts(fonts) {
  const out = {};
  Object.keys(fonts).map((family) => {
    out[family] = fonts[family].join(',');
  });
  out.body = tailwind.fontFamily.sans.join(',');
  out.heading = tailwind.fontFamily.head.join(',');
  return out;
}

const theme = extendTheme({
  styles: {
    global: (props) => ({
      body: {
        fontFamily: 'body'
        // backgroundColor: props.colorMode !== 'dark' ? 'white' : 'black',
        // color: props.colorMode === 'dark' ? 'white' : 'black'
      }
    })
  },

  colors: {
    ...tailwind.colors
  },

  fonts: {
    ...convertFonts(tailwind.fontFamily)
  },

  fontSizes: Object.entries(tailwind.fontSize).reduce((out, [key, val]) => {
    out[key] = val[0];
    return out;
  }, {})
});

export default theme;
