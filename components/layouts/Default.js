import styles from "./Default.module.scss";
import Header from "/components/Header/Header";

const pages = [
  {
    path: "/",
    text: "Home"
  },
  {
    path: "/shop",
    text: "Shop"
  },
  {
    path: "/about",
    text: "About Us"
  },
  {
    path: "/contact",
    text: "Contact"
  },
];

export default function Layout({ children }) {
  return (
    <>
      <div className={styles["main-container"]}>
        <Header pages={pages} />
        <main>{children}</main>
      </div>
    </>
  );
}
