import styles from "./Footer.module.scss";
import Link from "next/link";
import Image from "next/image";
import youtubeLogo from "/public/images/external/yt_icon_mono_dark.png";
import instagramLogo from "/public/images/external/Instagram_Glyph_White.png";
import facebookLogo from "/public/images/external/f_logo_white.png";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <nav>
        <ul>
          <li>
            <Link href="https://youtube.com/animatriumstudio">
              <a>
                <Image src={youtubeLogo} height={18} width={25} />
              </a>
            </Link>
          </li>
          <li>
            <Link href="https://www.instagram.com/animatrium_studio/">
              <a>
                <Image src={instagramLogo} height={25} width={25} />
              </a>
            </Link>
          </li>
          <li>
            <Link href="https://www.facebook.com/AnimatriumStudio/">
              <a>
                <Image src={facebookLogo} height={25} width={25} />
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
