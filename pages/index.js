import styles from "./index.module.scss";

import logo from "/public/images/logo.png";
import Image from "next/image";
export default function HomePage({}) {
  return (
    <>
      <div className={styles.home}>
        <h1>ANIMATRIUM STUDIO</h1> 
        <Image src={logo} width={100} height={100} />
        <h3>Coming soon!</h3>
      </div>
    </>
  );
}

import BlankLayout from "/components/layouts/Blank";
HomePage.getLayout = () => BlankLayout;
