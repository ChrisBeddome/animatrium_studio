import styles from "./Default.module.scss"
import Header from "/src/components/Header/Header"
import Footer from "/src/components/Footer/Footer"

const pages = [
  {
    path: "/",
    text: "Home",
  },
  {
    path: "/about",
    text: "About",
  },
  {
    path: "/shop",
    text: "Shop All",
  },
  {
    path: "/projects",
    text: "Art Projects",
  },
  {
    path: "/contact",
    text: "Contact",
  },
]

export default function Layout({ children }) {
  return (
    <>
      <Header pages={pages} />
        <main className={styles["default-layout"]}>{children}</main>
      <Footer></Footer>
    </>
  )
}
