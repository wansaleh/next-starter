import { Box, Button, Flex, useColorMode } from '@chakra-ui/react';
import Link from 'next/link';

export default function Nav() {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <Flex
      as="ul"
      justify="space-between"
      p="4"
      fontSize="sm"
      pos="absolute"
      top="0"
      left="0"
      right="0"
    >
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <Flex as="ul">
        <Box as="li" ml="3">
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              toggleColorMode();
            }}
          >
            {colorMode === 'light' ? 'Dark' : 'Light'}
          </button>
        </Box>
      </Flex>
    </Flex>
  );
}
