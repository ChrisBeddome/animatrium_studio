import { useRouter } from "next/router";

export default function ProdcutPage({}) {
  const router = useRouter();
  return (
    <main className="main-content">
      <h1>{router.query.name}</h1>
    </main>
  );
}
