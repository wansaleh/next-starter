import NextHead from 'next/head';

export default function SEO({
  title = 'change title',
  description = 'change descriptions',
  author = 'Wan Saleh @wansaleh',
  url = 'https://www.com',
  ogImage = '',
  children
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
      <title>{title}</title>
      {metaData.map(({ name, content }, i) => (
        <meta key={i} name={name} content={content} />
      ))}
      {children}
    </NextHead>
  );
}
