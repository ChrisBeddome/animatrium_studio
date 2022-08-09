import styles from "./index.module.scss";
import Hero from "/components/Hero/Hero";
import Image from "next/image";
import Link from "next/link";
import logo from "/public/images/logo.png";

export default function HomePage({}) {
  return (
    <>
      <Hero />
      <main className={styles["home-page"]}>
        <section>
          <div className="content-wrapper">
            <h1 className="mb-3">We are Animatrium Studio</h1>
            <p>
              Animatrium Studio was created in the midst of the Covid-19
              pandemic. Founders Tassia Dorsamy and Tom Doughty found that
              creativity gave peace and comfort during trying times. As such we
              wish for all artists to have a platform where they can express and
              voice their creativity and imagination.
            </p>
          </div>
          <div className={styles["logo-separator"]}>
            <Image src={logo} width={60} height={60} />
          </div>
        </section>
        <section>
          <div className="content-wrapper">
            <div className={styles["image-with-header"]}>
              <div className={styles["text"]}>
                <h3 className="mb-3">We make films!</h3>
                <p>
                  Tom Doughty has been a freelance animator for over 10 years.
                  His animations can be found all over the web and in 2020
                  released his first feature film/animated series 'Ascentrium'
                  based on his own novella. For Ascentrium or bespoke prints
                  available for purchase, visit the 'Shop All' section.
                </p>
                <div className={styles.link}>
                  <Link href="https://www.youtube.com/c/AnimatriumStudio">
                    <a>Check out our YouTube channel</a>
                  </Link>
                </div>
              </div>
              <div className={styles["image"]}>
                <Image src="/images/RoushHelm.jpg" width={665} height={520} />
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="content-wrapper">
            <div className={styles["image-with-header"]}>
              <div className={styles["image"]}>
                <Image
                  src="/images/index-jewelry.jpeg"
                  width={1313}
                  height={1313}
                  className={styles.circle}
                />
              </div>
              <div className={styles["text"]}>
                <h3 className="mb-2">We make jewelry!</h3>
                <p>
                  Tassia Dorsamy creates polymer clay jewelry with unique
                  concepts and ideas. If it can imagined, Tassia can make it.
                  Her earrings are hypoallergenic, light, and fashionable. All
                  of her creative work can be found and purchased on her Etsy
                  page.
                </p>
                <div className={styles.link}>
                  <Link href="https://www.etsy.com/shop/ClayWithTass">
                    <a>Check out our Etsy shop</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
