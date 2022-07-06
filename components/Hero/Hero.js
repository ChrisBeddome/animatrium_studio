import styles from "./Hero.module.scss";
import Image from "next/image";

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles["hero-left"]}>
        <div className={styles["hero-img"]}>
          <Image
            src={`/images/spacestuff.jpg`}
            priority
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
      <div className={styles["hero-right"]}>
        <div>
          <Image
            src="/images/neat-things.jpg"
            priority
            layout="fill"
            objectFit="cover"
          />
        </div>
        {[1, 2, 3, 8, 5, 6, 7, 4].map((num) => {
          return (
            <div>
              <Image
                className={styles["hero-image"]}
                src={`/images/products/${num}.jpg`}
                priority
                layout="fill"
                objectFit="cover"
              />
            </div>
          );
        })}
      </div>
      <div className={styles["hero-main"]}>
        <div className={styles.blurry}></div>
        <h1>Animatrium Studio</h1>
        <button>Explore</button>
      </div>
    </div>
  );
}
