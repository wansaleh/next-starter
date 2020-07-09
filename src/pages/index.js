import React from 'react';
import { Box, Heading, Text, Flex } from '@chakra-ui/core';

import Head from '../components/head';
import Nav from '../components/nav';

const Home = () => (
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

export default Home;
