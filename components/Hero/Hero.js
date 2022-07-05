import styles from "./Hero.module.scss";
import Image from "next/image";

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles["hero-left"]}>
        <Image
          src="/images/clay-with-tass.png"
          priority
          height={132}
          width={596}
        />
        <button>BUY OUR STUFF</button>
      </div>
      <div className={styles["hero-right"]}>
        <div>
          <Image
            className={styles["hero-image"]}
            src="/images/neat-things.jpg"
            priority
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
}
