import styles from "./Hero.module.scss";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles["hero-left"]}>
        <Image
          src="/images/hero-animatrium.jpg"
          priority
          layout="fill"
          objectFit="cover"
          sizes="(max-width: 800px) 100vw, 50vw"
        />
      </div>
      <div className={styles["hero-right"]}>
        <div>
          <Image
            src="/images/hero-clay.jpeg"
            layout="fill"
            objectFit="cover"
            sizes="(max-width: 800px) 0vw, 50vw"
          />
        </div>
      </div>
      <div className={styles["hero-main"]}>
        <h1>
          Animatrium
          <br />
          Studio
        </h1>
        {<Link href="/shop">
          <a>Explore</a>
        </Link>}
      </div>
    </div>
  );
}
