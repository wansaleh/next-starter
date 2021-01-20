import Link from 'next/link';
import styled from '@emotion/styled';
import tw from 'twin.macro';

const links = [
  { href: 'https://github.com/zeit/next.js', label: 'Github' }
].map((link) => {
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
    padding: 10px;
  }
  li {
    display: flex;
    padding: 10px;
  }
  a {
    ${tw`text-sm text-blue-400 no-underline hover:text-black`}
  }
`;
