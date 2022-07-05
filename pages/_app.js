import "/styles/reset.scss";
import "/styles/global.scss";

import DefaultLayout from "/components/layouts/Default";

export default function App({ Component, pageProps }) {
const Layout = (Component.getLayout && Component.getLayout()) || DefaultLayout
  return (
    <Layout>
      <Component {...pageProps}></Component>
    </Layout>
  );
}
