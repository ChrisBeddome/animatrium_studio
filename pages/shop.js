import styles from "./shop.module.scss";
import ProductCard from "/components/products/Card/Card";

const products = [
  { src: "/images/products/1.jpg", name: "Neat Thing" },
  { src: "/images/products/2.jpg", name: "Lame Thing"},
  { src: "/images/products/3.jpg", name: "Regular Thing"},
  { src: "/images/products/1.jpg", name: "Neat Thing" },
  { src: "/images/products/2.jpg", name: "Lame Thing"},
  { src: "/images/products/3.jpg", name: "Regular Thing"},
  { src: "/images/products/1.jpg", name: "Neat Thing" },
  { src: "/images/products/2.jpg", name: "Lame Thing"},
  { src: "/images/products/3.jpg", name: "Regular Thing"},
];

export default function ShopPage({}) {
  return (
    <main className="main-content">
      <div className={styles["shop-page"]}>
        <h1>Shop</h1>
        <ul>
          {products.map((product) => {
            return (
              <li>
                <ProductCard product={product}></ProductCard>
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
}
