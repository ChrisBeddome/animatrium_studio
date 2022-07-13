import styles from "./shop.module.scss";
import Link from "next/link";
import ProductCard from "/components/products/Card/Card";

const products = [
  {
    src: "/images/products/1.jpg",
    name: "Neat Thing",
    price: 20,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum, natus!",
  },
  {
    src: "/images/products/2.jpg",
    name: "Lame Thing",
    price: 30,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. In, esse.",
  },
  {
    src: "/images/products/3.jpg",
    name: "Regular Thing",
    price: 24.99,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. In, esse.",
  },
  {
    src: "/images/products/4.jpg",
    name: "Neat Thing",
    price: 24.99,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. In, esse.",
  },
  {
    src: "/images/products/5.jpg",
    name: "Lame Thing",
    price: 24.99,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. In, esse.",
  },
  {
    src: "/images/products/6.jpg",
    name: "Regular Thing",
    price: 24.99,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. In, esse.",
  },
  {
    src: "/images/products/7.jpg",
    name: "Neat Thing",
    price: 24.99,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. In, esse.",
  },
  {
    src: "/images/products/8.jpg",
    name: "Lame Thing",
    price: 24.99,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. In, esse.",
  },
  {
    src: "/images/products/1.jpg",
    name: "Neat Thing",
    price: 24.99,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. In, esse.",
  },
  {
    src: "/images/products/2.jpg",
    name: "Lame Thing",
    price: 24.99,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. In, esse.",
  },
  {
    src: "/images/products/3.jpg",
    name: "Regular Thing",
    price: 24.99,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. In, esse.",
  },
  {
    src: "/images/products/4.jpg",
    name: "Neat Thing",
    price: 24.99,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. In, esse.",
  },
  {
    src: "/images/products/5.jpg",
    name: "Lame Thing",
    price: 24.99,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. In, esse.",
  },
  {
    src: "/images/products/6.jpg",
    name: "Regular Thing",
    price: 24.99,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. In, esse.",
  },
  {
    src: "/images/products/7.jpg",
    name: "Neat Thing",
    price: 24.99,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. In, esse.",
  },
  {
    src: "/images/products/8.jpg",
    name: "Lame Thing",
    price: 24.99,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. In, esse.",
  },
  {
    src: "/images/products/1.jpg",
    name: "Neat Thing",
    price: 24.99,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. In, esse.",
  },
  {
    src: "/images/products/2.jpg",
    name: "Lame Thing",
    price: 24.99,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. In, esse.",
  },
  {
    src: "/images/products/3.jpg",
    name: "Regular Thing",
    price: 24.99,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. In, esse.",
  },
  {
    src: "/images/products/4.jpg",
    name: "Neat Thing",
    price: 24.99,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. In, esse.",
  },
  {
    src: "/images/products/5.jpg",
    name: "Lame Thing",
    price: 24.99,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. In, esse.",
  },
  {
    src: "/images/products/6.jpg",
    name: "Regular Thing",
    price: 24.99,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. In, esse.",
  },
  {
    src: "/images/products/7.jpg",
    name: "Neat Thing",
    price: 24.99,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. In, esse.",
  },
  {
    src: "/images/products/8.jpg",
    name: "Lame Thing",
    price: 24.99,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. In, esse.",
  },
];

export default function ShopPage({}) {
  return (
    <main className="main-content">
      <div className={styles["shop-page"]}>
        <ul>
          {products.map((product) => {
            return (
              <li>
                <Link href={`/products/${product.name}`}>
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
