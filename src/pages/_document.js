import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
          <link href="/assets/plugins/global/plugins.bundle.css" rel="stylesheet" />
          <link href="/assets/plugins/custom/prismjs/prismjs.bundle.css" rel="stylesheet" />
        </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
