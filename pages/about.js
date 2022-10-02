import styles from "./about.module.scss";

import Image from "next/image";

import MainContentWrapper from "/components/common/MainContentWrapper/MainContentWrapper"

export default function AboutPage({}) {
  return (
    <div className={styles["about-page"]}>
      <MainContentWrapper>
        <h1>About Us</h1>
        <section>
          <div className={styles.blurb}>
            <p>
              Clay With Tass saw the light through Animatrium Studio and
              Consulting Inc. It's a business built from scratch with my
              Partner. We love creating and have decided to make Animatrium
              Studio the place which encompasses:
            </p>
            <br />
            <br />
            <ul>
              <li>Animation</li>
              <li>Music & Editing/Composing</li>
              <li>Voice Acting</li>
              <li>And last but not least - Clay Pottery Jewelry</li>
            </ul>
            <br />
            <br />
            <p>
              My creativity is driven by my independence and freedom from a once
              toxic relationship. Through my work and hobby, I thrive and I
              evolve. In returns it also serves as a space for other people to
              also connect with their imagination and create art. All of my
              jewelry are made with Fimo Polymer Clay with a touch of gold or
              silver plated accessories. They are also nickel free. Made with
              love and attention from the comfort of my Studio.
            </p>
          </div>
          <div className={styles.img}>
            <Image src="/images/things.jpg" width="500" height="500" priority />
          </div>
        </section>
      </MainContentWrapper>
    </div>
  );
}

AboutPage.displayName = "About"
