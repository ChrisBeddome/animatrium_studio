import Image from "next/image";
import styles from "./index.module.scss";

export default function HomePage({}) {
  return (
    <div className={styles["home-page"]}>
      <div className={styles.hero}>
        <Image src="/images/hero.jpg" width="1200" height="300" />
      </div>
      <br />
      <br />
      <h1>Home</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
        consequatur tempora dolorem harum distinctio debitis nemo maxime
        perspiciatis porro velit, tenetur laboriosam quasi vero consequuntur
        eligendi, nesciunt eaque, repudiandae reprehenderit placeat. Voluptate
        vitae quo, numquam totam nihil blanditiis sequi, assumenda excepturi
        perferendis possimus placeat, natus autem obcaecati? Minima, soluta aut
        iusto laboriosam perferendis porro fugiat officiis expedita, accusantium
        corporis tenetur fugit ratione sapiente magnam. Inventore, eius
        doloribus. Sint optio unde nisi, quia officiis impedit. Cupiditate,
        doloremque quas eum veritatis totam illum eligendi tempora quis veniam
        impedit. Blanditiis alias, voluptatibus quo hic illum maiores laboriosam
        quam dicta. Impedit perferendis, sequi quis voluptates facere soluta ex
        itaque neque pariatur. Atque facere obcaecati maiores aperiam sunt animi
        nobis optio quis dignissimos ea ullam debitis distinctio architecto,
        alias accusantium aliquam voluptatibus odit eaque at doloribus nostrum
        commodi eligendi. Labore, illum quia. Adipisci ab expedita praesentium
        autem id atque quo nobis ea exercitationem eum debitis deleniti vel
        labore quidem tenetur ducimus, nemo perspiciatis incidunt? Perspiciatis
        debitis repellat aliquid accusamus illo earum accusantium! Est
        distinctio exercitationem neque in. Facere quod neque voluptatibus dolor
        libero, illo eveniet autem natus dignissimos pariatur eum sed officiis
        obcaecati et voluptates, hic maiores aperiam. Velit nostrum repudiandae
        quaerat possimus aliquid, autem distinctio, enim voluptas, dolores iure
        reiciendis. Odit quas veritatis ab accusamus porro, nesciunt, quisquam
        soluta quibusdam quis non, corporis pariatur saepe quos laborum? Sit
        quasi ipsa nemo et cupiditate natus, illum aut nisi ipsum est, numquam
        porro voluptatibus maxime odio fuga doloribus in voluptatum incidunt!
        Velit voluptatibus esse amet iste aperiam. Ea totam vel assumenda odio
        quis fugit repudiandae molestiae in reprehenderit incidunt modi
        doloribus nihil, ipsam earum maxime aliquam nesciunt cumque, a, enim
        autem obcaecati rem pariatur? Natus officia earum ea repellat laboriosam
        itaque, laborum officiis soluta veritatis illo optio voluptas ratione
        quasi quo nihil minima labore maiores vel!
      </p>
    </div>
  );
}
