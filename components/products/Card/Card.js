import styles from "./Card.module.scss";
import Image from "next/image";

export default function ProductCard({ product }) {
  return (
    <div className={styles.card}>
      <div className={styles.top}>
        <Image
          src={product.src}
          layout="fill"
          objectFit="cover"
          sizes="(max-width: 520px) 500px, 230px"
        />
      </div>
      <div className={styles.bottom}>
        <h6>{product.name}</h6>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto,
          autem.
        </p>
      </div>
    </div>
  );
}
