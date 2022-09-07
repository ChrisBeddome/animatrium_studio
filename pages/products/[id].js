import Product from "/models/product";
import Head from 'next/head'
import Image from 'next/image'
import styles from "./product.module.scss";

export default function ProductPage({product}) {
  return (
    <>
      <Head><title>{product.name}</title></Head>
      <main className="content-wrapper">
        <div className={styles['product-page']}>
          <section className={styles['product-info']}>
            <div className={styles['img-container']}>
              {<Image 
                priority 
                src={product.imageUrl} 
                layout="fill" 
                objectFit="cover" 
                sizes="50vw"
                alt={product.name} 
              /> }
            </div>
            <div>
              <h2 className="mb-3">{product.name}</h2>
              <h4 className="mb-5">${product.price.toFixed(2)}</h4>
              <p>{product.description}</p>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export async function getStaticProps({params}) {
  const product = await Product.findOne({ where: { id: params.id } });
  return {
    props: {
      product: JSON.parse(JSON.stringify(product)),
    },
  };
}

export async function getStaticPaths() {
  const products = await Product.findAll();
  return {
    paths: products.map(p => {
      return {params: {id: p.id.toString()}}
    }),
    fallback: 'blocking'
  }
}
