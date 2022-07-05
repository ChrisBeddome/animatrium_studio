import styles from "./Card.module.scss";
import Link from "next/link";
import Image from "next/image";

export default function ProductCard({ product }) {
  return (
    <div className={styles.card}>
      <div className={styles.top}>
        <Image src={product.src} layout="fill" objectFit="cover"/>
      </div>
      <div className={styles.bottom}>
        <h6>{product.name}</h6>
      </div>
    </div>
  );
}
