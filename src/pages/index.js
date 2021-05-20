import { Box, Container, Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';

import Head from '../components/head';
import Nav from '../components/nav';

export default function Home() {
  return (
    <>
      <Head title="Home" />

      <Nav />

      <Container maxW="6xl">
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          textAlign="center"
          minH="100vh"
        >
          <Heading fontSize="7xl" fontWeight="500" letterSpacing="tighter" lineHeight="1" mb="4">
            Welcome to{' '}
            <Box as="span" fontWeight="800">
              Next.
            </Box>
          </Heading>

          <Text color="gray.500" fontWeight="400" fontSize="xl">
            To get started, edit{' '}
            <Box as="code" fontWeight="600">
              pages/index.js
            </Box>{' '}
            and save to reload.
          </Text>
        </Flex>
      </Container>
    </>
  );
}
