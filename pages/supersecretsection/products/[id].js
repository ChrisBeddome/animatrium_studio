import { useRouter } from "next/router";

export default function ProductPage({}) {
  const router = useRouter();
  return (
    <main className="content-wrapper">
      <h1>{router.query.id}</h1>
    </main>
  );
}

ProductPage.displayName = "Product"