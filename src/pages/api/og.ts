import { withOGImage } from 'next-api-og-image';

import { interRegular } from '@/lib/inter';

export enum GeneralQueryEnum {
  'logo',
  'siteName',
  'description',
  'theme',
  'title',
  'logoWidth',
  'logoHeight',
}

export default withOGImage<'query', keyof typeof GeneralQueryEnum>({
  template: {
    html: async ({
      siteName,
      description,
      logo,
      theme,
      title,
      logoWidth,
      logoHeight,
    }) => {
      const query = {
        siteName: siteName ?? 'Site Name',
        description: description ?? 'Description',
        logo: logo ?? 'https://og.thcl.dev/images/logo.jpg',
        theme: theme ?? 'dark',
        title,
        logoWidth: logoWidth ?? '100',
        logoHeight,
      };

      return `
        <html>
          <head>
            ${getStyle(query)}
          </head>
          <body>
            <div class="container">
              <img src="${query.logo}" alt="Favicon" />
              ${
                query.title
                  ? `<h1>${query.title}</h1>
                  <h3>${query.siteName}</h3>`
                  : `<h1>${query.siteName}</h1>`
              }

              <p class="description">${query.description}</p>
            </div>
          </body>
        </html>
      `;
    },
  },
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getStyle = (
  query: Record<keyof typeof GeneralQueryEnum, string | string[]>
) => `
<style>
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  @font-face {
    font-family: 'Inter';
    font-style:  normal;
    font-weight: normal;
    src: url(data:font/woff2;charset=utf-8;base64,${interRegular}) format('woff2');
  }

  body {
    font-family: 'Inter', sans-serif;
  }

  .container {
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background: ${query.theme === 'dark' ? '#222' : '#fff'};
    color: ${query.theme === 'dark' ? 'white' : 'black'};

    text-align: center;
    padding: 0 5rem;
  }

  img {
    width: ${query.logoWidth}px;
    ${query.logoHeight && `height: ${query.logoHeight}px`}
  }

  h1 {
    font-size: 1.5rem;
    font-size: 3.5rem;
    line-height: 1.1;
    margin-top: 1.5rem;
  }

  h3 {
    margin-top: 0.5rem;
    color: ${query.theme === 'dark' ? '#E5E7EB' : '#374151'};
    font-size: 1.5rem;
  }

  .description {
    font-size: 1.8rem;
    line-height: 1.5;
    margin-top: 1rem;
    color: ${query.theme === 'dark' ? '#D1D5DB' : '#1F2937'};
  }
</style>
`;
