import styles from "./Header.module.scss";
import logo from "/public/images/logo.png";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Header({ pages }) {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
      <Link href="/">
        <a>
          <Image priority src={logo} width={35} height={35} />
        </a>
      </Link>
      </div>
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
