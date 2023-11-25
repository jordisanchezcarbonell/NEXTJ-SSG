import getAllUsers from "@/app/lib/getAllUsers";
import type { Metadata } from "next";
import Link from "next/link";
import getAllCategoria from "../lib/getAllCategoria";
import CardCustom from "../componente/card";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Users",
};

export default async function UsersPage() {
  const categoriaData: Promise<Categoria> = getAllCategoria();
  const categoria = await categoriaData;

  const content = (
    <section>
      <h2>
        <Link href="/">Back to Home</Link>
      </h2>
      <br />
      <Suspense fallback={<h2>Loading...</h2>}>
        {categoria.data.map((categoria) => {
          return (
            <>
              <Link key={categoria.id} href={`/products/${categoria.id}`}>
                <CardCustom texto={categoria.attributes.categoria} />
              </Link>

              <br />
            </>
          );
        })}
      </Suspense>
    </section>
  );

  return content;
}
