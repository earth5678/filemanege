import React from 'react';
import Head from 'next/head';

const link = () => {
  return (
    <Head>
      <link href="/assets/plugins/global/plugins.bundle.css" rel="stylesheet" type="text/css" />
      <link href="/assets/plugins/custom/prismjs/prismjs.bundle.css" rel="stylesheet" type="text/css" />
      <link href="/assets/css/style.bundle.css" rel="stylesheet" type="text/css" />
    </Head>
  );
};

export default link;
