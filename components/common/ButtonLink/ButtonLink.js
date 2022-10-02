import styles from "./ButtonLink.module.scss";

import Link from "next/link";

export default function ButtonLink({text, href, dark = false}) {
  return (
    <div className={`${styles["button-link"]} ${dark ? styles.dark : ''}`}>
      <Link href="https://www.youtube.com/c/AnimatriumStudio">
        <a>Check out our YouTube channel</a>
      </Link>
    </div>
  );
}
