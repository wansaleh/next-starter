/* eslint-disable @next/next/no-img-element */

import { NextRequest } from 'next/server';
import { ImageResponse } from '@vercel/og';

export const config = {
  runtime: 'experimental-edge',
};

const sfPro = fetch(
  new URL('../../styles/SF-Pro-Display-Medium.otf', import.meta.url),
).then((res) => res.arrayBuffer());

export default async function handler(req: NextRequest) {
  const [sfProData] = await Promise.all([sfPro]);

  const { searchParams } = req.nextUrl;
  const title = searchParams.get('title') || 'By Wan Saleh';

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'white',
          backgroundImage:
            'linear-gradient(to bottom right, #000 25%, #020308 75%)',
        }}
      >
        <h1
          style={{
            fontSize: '100px',
            fontFamily: 'SF Pro',
            background:
              'linear-gradient(to bottom right, #fff 21.66%, #78716c 86.47%)',
            backgroundClip: 'text',
            color: 'transparent',
            // lineHeight: '6rem',
            letterSpacing: '-0.02em',
          }}
        >
          {title}
        </h1>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'SF Pro',
          data: sfProData,
        },
      ],
    },
  );
}
