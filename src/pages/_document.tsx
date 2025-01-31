import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel='stylesheet' />
      </Head>
      <body>
          <link 
            href="https://fonts.googleapis.com/css2?family=Lato&display=swap" 
            rel="stylesheet"
          />

          <link 
            href="https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap" 
            rel="stylesheet"
          />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

/* 
<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Serif:wght@300;400;500;600;700&display=swap" rel="stylesheet"/>
*/