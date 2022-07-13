import styles from "./index.module.scss";
import Hero from "/components/Hero/Hero";
import Image from "next/image";
import Link from "next/link";

export default function HomePage({}) {
  return (
    <>
      <Hero />
      <main className={`main-content ${styles["home-page"]}`}>
        <h1 className="mb-3">We are Animatrium Studio</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          blanditiis modi dolorum, amet saepe quo sapiente deserunt non nam
          repudiandae illum nesciunt, numquam inventore sed at explicabo odio
          libero reprehenderit tempora, ex aspernatur quam ullam architecto.
          Obcaecati quia asperiores totam maxime, quaerat ad, explicabo placeat
          ipsum tenetur voluptate reiciendis perferendis eos laudantium quod
          inventore non dolore iusto aliquam sapiente cupiditate ex molestiae
          harum voluptas architecto. Debitis odio eos commodi nulla perspiciatis
          nisi sed placeat veritatis eligendi, earum veniam, maiores harum omnis
          sint incidunt adipisci optio. Reiciendis repudiandae quod mollitia est
          iusto amet fugiat, illum officiis magnam? Officia aperiam, quasi
          dolorem, ducimus nobis voluptate odio qui laborum non natus minus cum!
          Error, quod accusantium cupiditate omnis porro, labore sint velit
          aperiam sit quia minus iure laudantium reiciendis soluta voluptates
          aliquam iste quas, unde ipsa? Ullam ad saepe ducimus quis! Delectus
          impedit sit quod quaerat consequatur vitae unde quas, enim est,
          dolores ipsum, facilis a labore assumenda vero reprehenderit libero.
          Rerum possimus animi quidem omnis fugit, a accusantium quam? Sunt,
          quam dolore. Quos pariatur natus voluptas tempore at rem voluptatum
          nam magni libero amet doloremque rerum facilis commodi in accusamus
          voluptatibus consequatur fugiat aspernatur quidem animi, labore itaque
          odit? Nam, eius eos.
        </p>
        <hr />
        <div className={styles["image-with-header"]}>
          <div className={styles["text"]}>
            <h3 className="mb-3">We make films!</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus
              explicabo eveniet, culpa vel sapiente autem, nobis eos rem illo
              ipsum animi, tempore veritatis placeat repellendus. Autem, quo.
              Quod ipsum soluta labore temporibus officia velit repellat debitis
              illo placeat ullam praesentium neque, quos voluptatem recusandae
              eos sequi facilis itaque, dolorem eius nobis iste sed consectetur
              a! Aperiam iure quo ratione accusamus id. Nostrum reprehenderit
              sed accusantium ex eaque optio praesentium soluta rerum cumque
              earum voluptas accusamus, tempora vel ea officiis nobis
              perspiciatis possimus provident minima cum est et laboriosam iste
              magni? Nobis tenetur beatae natus suscipit, repellendus aliquid
              animi explicabo iste dolorum accusamus magni molestiae a nam
              ducimus architecto ut voluptatem quia dolore officia facilis?
              Magnam voluptatibus architecto molestias, laboriosam, vitae quae
              tempore autem mollitia quis voluptatum adipisci explicabo. Dolorem
              fugiat sapiente eaque nam iste voluptatum eligendi minima dolore!
              Debitis nihil dolores ab non iste quasi ex, deleniti deserunt
              voluptates laborum.
            </p>
            <div className={styles.link}>
              <Link href="https://www.youtube.com/c/AnimatriumStudio">
                <a>Check out our YouTube channel</a>
              </Link>
            </div>
          </div>
          <div className={styles["image"]}>
            <Image src="/images/still.jpg" width={665} height={520} />
          </div>
        </div>
        <hr />
        <div className={styles["image-with-header"]}>
          <div className={styles["image"]}>
            <Image
              src="/images/neat-things.jpg"
              width={991}
              height={978}
              className={styles.circle}
            />
          </div>
          <div className={styles["text"]}>
            <h3 className="mb-2">We make jewelry!</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
              consequuntur consequatur maxime maiores, magni odio ratione et
              explicabo aliquid at totam eos iste. Mollitia ab distinctio veniam
              vitae incidunt, a nostrum nemo iste nam dolores nihil? Mollitia
              quis deleniti itaque incidunt magnam enim harum quibusdam corrupti
              nihil voluptatem repellat facilis autem praesentium, dolores qui
              officiis ut provident molestias necessitatibus nobis.
            </p>
            <div className={styles.link}>
              <Link href="https://www.etsy.com/shop/ClayWithTass">
                <a>Check out our Etsy shop</a>
              </Link>
            </div>
          </div>
        </div>
        <hr />
        <div className={styles["image-with-header"]}>
          <div className={styles["text"]}>
            <h3 className="mb-3">Check us out at RAW Toronto!</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              nesciunt recusandae, tenetur nobis dicta ratione natus praesentium
              iste voluptas magnam voluptatum laborum accusamus nostrum
              mollitia, assumenda provident totam dolore unde ex saepe.
              Temporibus ea sint voluptatibus ab voluptate consectetur accusamus
              architecto alias rerum. Eum quasi deleniti aperiam tenetur placeat
              obcaecati maiores, sequi tempora sunt tempore reiciendis numquam
              odit, consequatur explicabo, similique ex eligendi aspernatur est
              corrupti doloribus molestiae. Provident harum placeat alias facere
              explicabo itaque, dolorum, molestias accusamus fuga reiciendis,
              repellat nihil voluptatem nam perferendis doloremque. Doloremque
              expedita voluptatum corrupti minima, eaque aliquam pariatur!
              Ratione perferendis minus quam? Explicabo, ab!
            </p>
            <div className={styles.link}>
              <Link href="https://rawartists.com/AnimatriumStudio">
                <a>Learn more</a>
              </Link>
            </div>
          </div>
          <div className={styles["image"]}>
            <Image src="/images/event.jpg" width={740} height={768} />
          </div>
        </div>
      </main>
    </>
  );
}
