import styles from "./Card.module.scss"
import Image from "next/image"

export default function ProductCard({ product }) {
  function formatPrice(price) {
    return `$${price && price.toFixed(2)}`
  }
  return (
    <div className={styles.card}>
      <div className={styles.top}>
        <Image
          src={product.imageUrl}
          layout="fill"
          objectFit="cover"
          sizes="(max-width: 550px) 550px, 230px"
          quality={25}
        />
      </div>
      <div className={styles.bottom}>
        <h6 className="mb-2">{product.name}</h6>
        <p>{product.description}</p>
        <div className={styles['price-row']}>
          <h5>
            {formatPrice(product.price)}
          </h5>
        </div>
      </div>
    </div>
  )
}
