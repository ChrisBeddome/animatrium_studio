import { useRouter } from "next/router";

export default function ProdcutPage({}) {
  const router = useRouter();
  return <h1>{router.query.name}</h1>
}
