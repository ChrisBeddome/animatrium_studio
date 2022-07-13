import styles from "./Default.module.scss";
import Header from "/components/Header/Header";

const pages = [
  {
    path: "/",
    text: "Home",
  },
  {
    path: "/animatrium-studio",
    text: "Animatrium Studio",
  },
  {
    path: "/about",
    text: "About Us",
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
];

export default function Layout({ children }) {
  return (
    <>
      <Header pages={pages} />
      <div className={styles["main-container"]}>{children}</div>
    </>
  );
}
