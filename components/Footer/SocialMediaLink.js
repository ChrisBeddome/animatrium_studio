import Link from "next/link";
import Image from "next/image";

export default function SocialMediaLink({href, imgSrc, imgHeight, imgWidth}) {
  return (
    <Link href={href}>
      <a>
        <Image src={imgSrc} height={imgHeight} width={imgWidth} />
      </a>
    </Link>
  );
}
