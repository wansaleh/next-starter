import '../styles/main.css';

import { ChakraProvider } from '@chakra-ui/react';

import chakra from '../styles/chakra';

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={chakra}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
