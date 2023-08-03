import styles from "./index.module.scss"

import Image from "next/image"

import logo from "/public/images/logo.png"

import Hero from "/src/components/Hero/Hero"
import MainContentWrapper from "/src/components/common/MainContentWrapper/MainContentWrapper"
import ButtonLink from "/src/components/common/ButtonLink/ButtonLink"

export default function HomePage() {
  return (
    <>
      <Hero />
      <div className={styles["home-page"]}>
        <MainContentWrapper>
          <section>
            <h1 className="mb-3">We are Animatrium Studio</h1>
            <p>
              Animatrium Studio was created in the midst of the Covid-19
              pandemic. Founders Tassia Dorsamy and Tom Doughty found that
              creativity gave peace and comfort during trying times. As such we
              wish for all artists to have a platform where they can express and
              voice their creativity and imagination.
            </p>
            <div className={styles["logo-separator"]}>
              <Image src={logo} width={60} height={60} />
            </div>
          </section>
        </MainContentWrapper>
        <MainContentWrapper dark>
          <section>
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
                <div className={styles['external-link']}>
                  <ButtonLink
                    text="Check out our YouTube channel"
                    href="https://www.youtube.com/c/AnimatriumStudio" 
                    dark
                  />
                </div>
              </div>
              <div className={styles["image"]}>
                <Image src="/images/RoushHelm.jpg" width={665} height={520} />
              </div>
            </div>
          </section>
        </MainContentWrapper>
        <MainContentWrapper>
          <section>
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
                <div className={styles['external-link']}>
                  <ButtonLink
                    text="Check out our Etsy shop"
                    href="https://www.etsy.com/shop/ClayWithTass"
                  />
                </div> 
              </div>
            </div>
          </section>
        </MainContentWrapper>
      </div>
    </>
  )
}
