import Link from "next/link"

export default function DesktopNavItem({ text, path }) {
  return (
    <Link href={path}>
      <a>
        <span>{text}</span>
      </a>
    </Link>
  )
}
