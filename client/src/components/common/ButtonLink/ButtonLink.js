import styles from "./ButtonLink.module.scss"

import Link from "next/link"

export default function ButtonLink({text, href, dark = false}) {
  return (
    <div className={`${styles["button-link"]} ${dark ? styles.dark : ''}`}>
      <Link href={href}>
        <a>{text}</a>
      </Link>
    </div>
  )
}
