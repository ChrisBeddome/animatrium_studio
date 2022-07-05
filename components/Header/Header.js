import styles from "./Header.module.scss";
import logo from "/public/images/logo.svg";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Header({ pages }) {
  return (
    <header className={styles.header}>
      <Link href="/">
        <a>
          <Image src={logo} width={45} height={45} />
        </a>
      </Link>
      <nav className={styles.navigation}>
        <ul>
          {pages.map((page) => {
            return (
              <li key={page.path} className={getLiStyles(page.path)}>
                <Link href={page.path}>
                  <a>
                    <span>{page.text}</span>
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <nav className={styles["secondary-navigation"]}>
        <ul>
          <li>
            <span className="material-symbols-outlined">shopping_cart</span>
          </li>
        </ul>
      </nav>
    </header>
  );
}

function getLiStyles(path) {
  const router = useRouter();
  return router.pathname === path ? styles["current-page"] : null;
}
