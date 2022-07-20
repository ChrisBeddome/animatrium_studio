import "/styles/reset.scss";
import "/styles/global.scss";
import "/styles/spacing.scss";
import Head from "next/head";

import DefaultLayout from "/components/layouts/Default";
import BlankLayout from "/components/layouts/Blank";

export default function App({ Component, pageProps }) {
  const Layout =
    (Component.getLayout && Component.getLayout()) || Component.displayName === "ErrorPage" ? BlankLayout : DefaultLayout;
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
