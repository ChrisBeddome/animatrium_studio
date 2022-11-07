import styles from "./DesktopNav.module.scss";

import { useRouter } from "next/router";
import Link from "next/link";

import DesktopNavItem from "./DesktopNavItem";

export default function DesktopNav({ pages, mobileHideClass }) {
  return (
    <>
      <nav className={styles.navigation + " " + mobileHideClass}>
        <ul>
          {pages.map(page => ( 
            <li 
              key={page.path}
              className={getLiStyles(page.path)}
            >
              <DesktopNavItem text={page.text} path={page.path}/>
            </li>
            ) 
          )}
        </ul>
      </nav>

      <nav className={styles["secondary-navigation"] + " " + mobileHideClass}>
        <ul>
          <li>
            <Link href="/cart"><a><span className="material-symbols-outlined">shopping_cart</span></a></Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

function getLiStyles(path) {
  const router = useRouter();
  return router.pathname === path ? styles["current-page"] : null;
}
