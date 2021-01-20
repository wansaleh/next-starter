import React from 'react';
import { Heading, Text, Flex } from '@chakra-ui/react';

import Head from '../components/head';
import Nav from '../components/nav';

export default function Home() {
  return (
    <>
      <Head title="Home" />

      <Nav />

      <Flex
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        minH="20rem"
      >
        <Heading>Welcome to Next!</Heading>
        <Text>
          To get started, edit <code>pages/index.js</code> and save to reload.
        </Text>
      </Flex>
    </>
  );
}
