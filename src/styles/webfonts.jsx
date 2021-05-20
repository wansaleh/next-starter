import { css, Global } from '@emotion/react';

export default function WebFonts() {
  return (
    <Global
      styles={css`
        @font-face {
          font-family: 'Inter var';
          font-weight: 100 900;
          font-style: normal;
          font-named-instance: 'Regular';
          src: url('https://cdnjs.cloudflare.com/ajax/libs/inter-ui/3.18.0/Inter (web)/Inter-roman.var.woff2')
              format('woff2 supports variations(gvar)'),
            url('https://cdnjs.cloudflare.com/ajax/libs/inter-ui/3.18.0/Inter (web)/Inter-roman.var.woff2')
              format('woff2-variations'),
            url('https://cdnjs.cloudflare.com/ajax/libs/inter-ui/3.18.0/Inter (web)/Inter-roman.var.woff2')
              format('woff2');
        }

        @font-face {
          font-family: 'Inter var';
          font-weight: 100 900;
          font-style: italic;
          font-named-instance: 'Italic';
          src: url('https://cdnjs.cloudflare.com/ajax/libs/inter-ui/3.18.0/Inter (web)/Inter-italic.var.woff2')
              format('woff2 supports variations(gvar)'),
            url('https://cdnjs.cloudflare.com/ajax/libs/inter-ui/3.18.0/Inter (web)/Inter-italic.var.woff2')
              format('woff2-variations'),
            url('https://cdnjs.cloudflare.com/ajax/libs/inter-ui/3.18.0/Inter (web)/Inter-italic.var.woff2')
              format('woff2');
        }
      `}
    />
  );
}
