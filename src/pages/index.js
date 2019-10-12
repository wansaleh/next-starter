import React from 'react';
import styled from '@emotion/styled';

import Head from '../components/head';
import Nav from '../components/nav';

const Home = () => (
  <Wrapper>
    <Head title="Home" />
    <Nav />

    <div className="hero">
      <h1 className="title">Welcome to Next!</h1>
      <p className="description">
        To get started, edit <code>pages/index.js</code> and save to reload.
      </p>

      <div className="row">
        <a className="card" href="https://github.com/zeit/next.js#how-to-use">
          <h3>Getting Started &rarr;</h3>
          <p>Learn more about Next.</p>
        </a>
        <a
          className="card"
          href="https://github.com/zeit/next.js/tree/canary/examples"
        >
          <h3>Examples &rarr;</h3>
          <p>Find other example boilerplates on Next repo.</p>
        </a>
      </div>
    </div>
  </Wrapper>
);

export default Home;

const Wrapper = styled.div`
  .hero {
    width: 100%;
    color: #333;
  }
  .title {
    margin: 0;
    width: 100%;
    padding-top: 80px;
    line-height: 1.15;
    font-size: 48px;
    font-weight: 200;
  }
  .title,
  .description {
    text-align: center;
  }
  .row {
    max-width: 880px;
    margin: 80px auto 40px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
  .card {
    padding: 18px 18px 24px;
    width: 40%;
    text-align: left;
    text-decoration: none;
    color: #434343;
    border: 1px solid #9b9b9b;
  }
  .card:hover {
    border-color: #067df7;
  }
  .card h3 {
    margin: 0;
    color: #067df7;
    font-size: 18px;
  }
  .card p {
    margin: 0;
    padding: 12px 0 0;
    font-size: 13px;
    color: #333;
  }
`;
