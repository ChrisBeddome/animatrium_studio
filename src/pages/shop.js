import styles from "./shop.module.scss";

import Link from "next/link";

import Product from "/src/models/product";

import Card from "/src/components/products/Card/Card";
import MainContentWrapper from "/src/components/common/MainContentWrapper/MainContentWrapper";

export default function ShopPage({ products }) {
  return (
    <div className={styles["shop-page"]}>
      <MainContentWrapper>
        <ul>
          {products.map(product => (
            <li key={product.id}>
              <Link href={`/products/${product.id}`}>
                <a>
                  <Card product={product}></Card>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </MainContentWrapper>
    </div>
  );
}

export async function getStaticProps() {
  const products = await Product.findAll();
  return {
    props: {
      products: products.map(product => product.toJSON())
    }
  };
}

ShopPage.displayName = "Shop";
