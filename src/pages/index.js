import React from 'react';

import Head from '../components/head';
import Nav from '../components/nav';
import styles from './index.scss';

const Home = () => (
  <div>
    <Head title="Home" />
    <Nav />

    <div className={styles.hero}>
      <h1 className={styles.title}>Welcome to Next!</h1>
      <p className={styles.description}>
        To get started, edit <code>pages/index.js</code> and save to reload.
      </p>

      <div className={styles.row}>
        <a
          className={styles.card}
          href="https://github.com/zeit/next.js#how-to-use"
        >
          <h3>Getting Started &rarr;</h3>
          <p>Learn more about Next.</p>
        </a>
        <a
          className={styles.card}
          href="https://github.com/zeit/next.js/tree/canary/examples"
        >
          <h3>Examples &rarr;</h3>
          <p>Find other example boilerplates on Next repo.</p>
        </a>
      </div>
    </div>
  </div>
);

export default Home;
