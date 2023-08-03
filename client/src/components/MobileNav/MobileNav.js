import styles from "./MobileNav.module.scss"

import { createPortal } from "react-dom"
import { useEffect, useState } from "react"

import MobileNavItem from "./MobileNavItem"

export default function MobileNav({pages, active, onCloseRequest}) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    return () => setMounted(false)
  }, [])

  return active && mounted 
    ? createPortal(
      <div className={styles["mobile-nav"]}>
        <button
          className={styles.close}
          onClick={onCloseRequest}
        >
          <i className="material-symbols-outlined">close</i>
        </button>
        <ul>
          {pages.map(page => (
            <li key={page.path}>
              <MobileNavItem 
                text={page.text} 
                path={page.path} 
                onClick={onCloseRequest}
              />
            </li>
          ))}
        </ul>
        <ul>
          <li>
            <MobileNavItem 
              text="View Cart" 
              path="/cart" 
              onClick={onCloseRequest}
            />
          </li>
        </ul>
      </div>,
        document.getElementById("nav-overlay")
      )
    : null
}
