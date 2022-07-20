import "/styles/reset.scss";
import "/styles/global.scss";
import "/styles/spacing.scss";
import Head from "next/head";

import DefaultLayout from "/components/layouts/Default";

export default function App({ Component, pageProps }) {
  const Layout =
    (Component.getLayout && Component.getLayout()) || DefaultLayout;
  return (
    <>
      <Head>
        <title>Animatrium Studio</title>
      </Head>
      <Layout>
        <Component {...pageProps}></Component>
      </Layout>
    </>
  );
}
