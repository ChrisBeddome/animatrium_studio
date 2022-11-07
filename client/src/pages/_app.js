import "/src/styles/reset.scss"
import "/src/styles/global.scss"
import "/src/styles/spacing.scss"
import Head from "next/head"

import DefaultLayout from "/src/components/layouts/Default"
import BlankLayout from "/src/components/layouts/Blank"

export default function App({ Component, pageProps }) {
  const Layout =
    (Component.getLayout && Component.getLayout()) || Component.displayName === "ErrorPage" ? BlankLayout : DefaultLayout
  return (
    <>
      <Head>
        <title>{`Animatrium Studio ${Component.displayName ? " - " + Component.displayName : ""}` }</title>
      </Head>
      <Layout>
        <Component {...pageProps}></Component>
      </Layout>
    </>
  )
}
