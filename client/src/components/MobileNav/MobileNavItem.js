import Link from "next/link"

export default function MobileNavItem({text, path, onClick}) {
  return (
    <Link href={path}>
      <a onClick={onClick}>
        <h3>{text}</h3>
      </a>
    </Link>
  )
}
