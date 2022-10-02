import styles from "./shop.module.scss";

import Link from "next/link";

import Product from "/models/product";

import ProductCard from "/components/products/Card/Card";
import MainContentWrapper from "/components/common/MainContentWrapper/MainContentWrapper";


export default function ShopPage({ products }) {
  return (
    <div className={styles["shop-page"]}>
      <MainContentWrapper>
        <ul>
          {products.map((product) => {
            return (
              <li key={product.id}>
                <Link href={`/products/${product.id}`}>
                  <a>
                    <ProductCard product={product}></ProductCard>
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
      </MainContentWrapper>
    </div>
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

ShopPage.displayName = "Shop";
