import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
          rel="stylesheet"
        />
      <title>Animatrium Studio</title>
      <link rel="icon" href="/favicon.png" />
      </Head>
      <body>
        <Main />
        <div id="nav-overlay"></div>
        <NextScript />
      </body>
    </Html>
  );
}
