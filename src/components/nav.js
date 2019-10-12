import React from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';

const links = [
  { href: 'https://github.com/zeit/next.js', label: 'Github' }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});

const Nav = () => (
  <Wrapper>
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <ul>
        {links.map(({ key, href, label }) => {
          const isExternal = /^(https?:)?\/\//.test(href);
          return (
            <li key={key}>
              {isExternal ? (
                <a href={href}>{label}</a>
              ) : (
                <Link href={href}>
                  <a>{label}</a>
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </ul>
  </Wrapper>
);

export default Nav;

const Wrapper = styled.nav`
  nav {
    text-align: center;
  }
  ul {
    display: flex;
    justify-content: space-between;
  }
  nav > ul {
    padding: 4px 16px;
  }
  li {
    display: flex;
    padding: 6px 8px;
  }
  a {
    color: #067df7;
    text-decoration: none;
    font-size: 13px;
  }
`;
