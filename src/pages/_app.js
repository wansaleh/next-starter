import { ChakraProvider } from '@chakra-ui/core';

import chakra from '../styles/chakra';
import '../styles/main.css';

const App = ({ Component, pageProps }) => {
  return (
    <ChakraProvider resetCSS theme={chakra}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default App;
