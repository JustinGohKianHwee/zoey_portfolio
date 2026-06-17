import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#F6F4EF',
          fontFamily: 'Georgia, serif',
        }}
      >
        <div
          style={{
            fontSize: '80px',
            fontWeight: 300,
            color: '#2C2C2C',
            letterSpacing: '-2px',
            lineHeight: 1.1,
          }}
        >
          Sze Zo Ey
        </div>
        <div
          style={{
            marginTop: '16px',
            fontSize: '22px',
            fontWeight: 400,
            color: '#8B7355',
            letterSpacing: '4px',
            textTransform: 'uppercase',
          }}
        >
          Architecture Portfolio
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: '48px',
            right: '64px',
            width: '48px',
            height: '2px',
            backgroundColor: '#8B7355',
          }}
        />
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
