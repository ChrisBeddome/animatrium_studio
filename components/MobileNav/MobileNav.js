import styles from "./MobileNav.module.scss";
import { createPortal } from "react-dom";
import { useEffect, useState } from "react";

export default function MobileNav({children, active, onCloseClick}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  return active && mounted 
    ? createPortal(
        <div className={styles["mobile-nav"]}>
          <button className={styles.close} onClick={onCloseClick}><i className="material-symbols-outlined">close</i></button>
          {children}
        </div>,
        document.getElementById("nav-overlay")
      )
    : null;
}
