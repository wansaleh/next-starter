import { useColorMode } from '@chakra-ui/react';
import React, { useEffect } from 'react';

export default function Layout({ children }) {
  const { colorMode } = useColorMode();

  useEffect(() => {
    if (colorMode === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [colorMode]);

  return <>{children}</>;
}
