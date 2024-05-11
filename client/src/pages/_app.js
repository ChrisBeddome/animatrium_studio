import "/src/styles/reset.scss"
import "/src/styles/global.scss"
import "/src/styles/spacing.scss"
import Head from "next/head"

import BlankLayout from "/src/components/layouts/Blank"

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>{`Animatrium Studio ${Component.displayName ? " - " + Component.displayName : ""}` }</title>
      </Head>
      <BlankLayout>
        <Component {...pageProps}></Component>
      </BlankLayout>
    </>
  )
}
