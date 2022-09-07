import styles from "./Header.module.scss";
import logo from "/public/images/logo.png";
import Hamburger from "./Hamburger";
import MobileNav from "/components/MobileNav/MobileNav";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Header({ pages }) {
  const [mobileNavActive, setMobileNavActive] = useState(false);

  const onHamburgerClick = () => {
    setMobileNavActive(true);
  }
  
  const closeMobileNav = () => {
    setMobileNavActive(false);
  }

  return (
    <header className={styles.header}>

      <div className={styles.logo}>
        <Link href="/">
          <a>
            <Image src={logo} width={35} height={35} />
          </a>
        </Link>
      </div>

      <h1 className={styles.title}>Animatrium Studio</h1>

      <div onClick={onHamburgerClick}className={styles.hamburger}>
        <Hamburger></Hamburger>
      </div>

      <MobileNav active={mobileNavActive} onCloseClick={closeMobileNav}>
        <ul>
        {pages.map(page => (
          <li key={page.path}><Link href={page.path}><a onClick={closeMobileNav}><h3>{page.text}</h3></a></Link></li>
        ))}
        </ul>
        <ul>
          <li><Link href="/cart"><a onClick={closeMobileNav}><h3>View Cart</h3></a></Link></li>
        </ul>
      </MobileNav>

      <nav className={styles.navigation}>
        <ul>
          {pages.map((page) => {
            return (
              <li key={page.path} className={getLiStyles(page.path)}>
                <Link href={`${page.path}`}>
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
            <Link href="/cart"><a><span className="material-symbols-outlined">shopping_cart</span></a></Link>
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
