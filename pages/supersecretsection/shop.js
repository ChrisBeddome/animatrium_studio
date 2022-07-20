import styles from "./shop.module.scss";
import Link from "next/link";
import ProductCard from "/components/products/Card/Card";
import Product from "/models/product";

export default function ShopPage({ products }) {
  return (
    <main className="main-content">
      <div className={styles["shop-page"]}>
        <ul>
          {products.map((product) => {
            return (
              <li key={product.id}>
                <Link href={`/supersecretsection/products/${product.id}`}>
                  <a>
                    <ProductCard product={product}></ProductCard>
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
}

export async function getStaticProps() {
  const products = await Product.findAll();
  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
    },
  };
}
