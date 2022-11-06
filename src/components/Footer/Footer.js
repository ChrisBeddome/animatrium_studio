import styles from "./Footer.module.scss";

import youtubeLogo from "/public/images/external/yt_icon_mono_dark.png";
import instagramLogo from "/public/images/external/Instagram_Glyph_White.png";
import facebookLogo from "/public/images/external/f_logo_white.png";

import SocialMediaLink from "./SocialMediaLink"

const socialMediaSites = [
  {
    href: "https://youtube.com/animatriumstudio",
    imgSrc: youtubeLogo,
    imgHeight: 16,
    imgWidth: 22
  },
  {
    href: "https://instagram.com/animatrium_studio/",
    imgSrc: instagramLogo,
    imgHeight: 20,
    imgWidth: 20
  }, 
  {
    href: "https://facebook.com/AnimatriumStudio/",
    imgSrc: facebookLogo,
    imgHeight: 20,
    imgWidth: 20
  }
];

const socialMediaLis = socialMediaSites.map(site => {
  return (
    <li key={site.href}>
      <SocialMediaLink 
        href={site.href}
        imgSrc={site.imgSrc}
        imgHeight={site.imgHeight}
        imgWidth={site.imgWidth}
      />
    </li> 
  );
})

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <nav>
        <ul>
          { socialMediaLis  }   
        </ul>
      </nav>
    </footer>
  );
}


