import { ChakraProvider } from '@chakra-ui/react';

import chakra from '../styles/chakra';
import '../styles/main.css';
import '../styles/font-graphik.css';

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={chakra}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
