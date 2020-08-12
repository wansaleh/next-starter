import { ChakraProvider, cookieStorageManager } from '@chakra-ui/core';

import chakra from '../styles/chakra';
import '../styles/main.css';
import '../styles/font-graphik.css';
import '../styles/font-nanum.css';

const App = ({ Component, pageProps, cookies = '' }) => {
  return (
    <ChakraProvider
      resetCSS
      theme={chakra}
      storageManager={cookieStorageManager(cookies)}
    >
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

App.getInitialProps = async ({ ctx }) => {
  return {
    cookies: ctx.req?.headers?.cookie
  };
};

export default App;
