import styles from "./Hero.module.scss";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles["hero-left"]}>
        <Image
          src={`/images/spacestuff.jpg`}
          priority
          layout="fill"
          objectFit="cover"
          sizes="(max-width: 800px) 100vw, 50vw"
        />
      </div>
      <div className={styles["hero-right"]}>
        <div>
          <Image
            src="/images/neat-things.jpg"
            layout="fill"
            objectFit="cover"
          />
        </div>
        {[1, 2, 3, 8, 5, 6, 7, 4].map((num) => {
          return (
            <div key={num}>
              <Image
                src={`/images/products/${num}.jpg`}
                layout="fill"
                objectFit="cover"
                sizes="(max-width: 800px) 0vw, (max-width: 1100px) 50vw, 17vw"
                quality={5}
              />
            </div>
          );
        })}
      </div>
      <div className={styles["hero-main"]}>
        <h1>
          Animatrium
          <br />
          Studio
        </h1>
        <Link href="/shop">
          <a>Explore</a>
        </Link>
      </div>
    </div>
  );
}
