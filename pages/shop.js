import styles from "./shop.module.scss";
import ProductCard from "/components/products/Card/Card";

const products = [
  { src: "/images/products/1.jpg", name: "Neat Thing" },
  { src: "/images/products/2.jpg", name: "Lame Thing"},
  { src: "/images/products/3.jpg", name: "Regular Thing"},
  { src: "/images/products/4.jpg", name: "Neat Thing" },
  { src: "/images/products/5.jpg", name: "Lame Thing"},
  { src: "/images/products/6.jpg", name: "Regular Thing"},
  { src: "/images/products/7.jpg", name: "Neat Thing" },
  { src: "/images/products/8.jpg", name: "Lame Thing"},
  { src: "/images/products/1.jpg", name: "Neat Thing" },
  { src: "/images/products/2.jpg", name: "Lame Thing"},
  { src: "/images/products/3.jpg", name: "Regular Thing"},
  { src: "/images/products/4.jpg", name: "Neat Thing" },
  { src: "/images/products/5.jpg", name: "Lame Thing"},
  { src: "/images/products/6.jpg", name: "Regular Thing"},
  { src: "/images/products/7.jpg", name: "Neat Thing" },
  { src: "/images/products/8.jpg", name: "Lame Thing"},
  { src: "/images/products/1.jpg", name: "Neat Thing" },
  { src: "/images/products/2.jpg", name: "Lame Thing"},
  { src: "/images/products/3.jpg", name: "Regular Thing"},
  { src: "/images/products/4.jpg", name: "Neat Thing" },
  { src: "/images/products/5.jpg", name: "Lame Thing"},
  { src: "/images/products/6.jpg", name: "Regular Thing"},
  { src: "/images/products/7.jpg", name: "Neat Thing" },
  { src: "/images/products/8.jpg", name: "Lame Thing"},
];

export default function ShopPage({}) {
  return (
    <main className="main-content">
      <div className={styles["shop-page"]}>
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
