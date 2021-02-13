import NextHead from 'next/head';
import { string } from 'prop-types';

export default function Head({
  title,
  description = '',
  author = 'Wan Saleh @wansaleh',
  url = 'https://www.com',
  ogImage = ''
}) {
  const metaData = [
    {
      name: 'description',
      content: description
    },
    {
      property: 'og:url',
      content: url
    },
    {
      property: 'og:title',
      content: title
    },
    {
      property: 'og:description',
      content: description
    },
    {
      property: 'og:type',
      content: 'website'
    },
    {
      property: 'og:image',
      content: ogImage
    },
    {
      property: 'og:image:width',
      content: '1200'
    },
    {
      property: 'og:image:height',
      content: '630'
    },
    {
      name: 'twitter:site',
      content: url
    },
    {
      name: 'twitter:card',
      content: 'summary'
    },
    {
      name: 'twitter:creator',
      content: author
    },
    {
      name: 'twitter:title',
      content: title
    },
    {
      name: 'twitter:description',
      content: description
    }
  ];

  return (
    <NextHead>
      <meta charSet="UTF-8" />
      <title>{title}</title>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
      />
      {metaData.map(({ name, content }, i) => (
        <meta key={i} name={name} content={content} />
      ))}
      <link rel="icon" href="/favicon.ico" />
    </NextHead>
  );
}

Head.propTypes = {
  title: string,
  description: string,
  url: string,
  ogImage: string
};
