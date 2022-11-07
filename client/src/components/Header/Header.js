import styles from "./Header.module.scss";

import logo from "/public/images/logo.png";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import Hamburger from "./Hamburger";
import MobileNav from "/src/components/MobileNav/MobileNav";
import DesktopNav from "/src/components/DesktopNav/DesktopNav"

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

      <div onClick={onHamburgerClick} className={styles.hamburger}>
        <Hamburger></Hamburger>
      </div>

      <MobileNav 
        pages={pages}
        active={mobileNavActive}
        onCloseRequest={closeMobileNav}
      />

      <DesktopNav pages={pages} mobileHideClass={styles['hide-mobile']} />

    </header>
  );
}
