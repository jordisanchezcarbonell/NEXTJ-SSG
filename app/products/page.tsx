import type { Metadata } from "next";
import getAllCategoria from "../lib/getAllCategoria";
import { Suspense } from "react";
import React from "react";
import RendeerProducts from "../componente/RendeerProducts";
const Link = React.lazy(() => import("next/link"));

export const metadata: Metadata = {
  title: "Products",
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
            <RendeerProducts
              link={categoria.attributes.slug}
              titulo={categoria.attributes.titulo}
              key={categoria.id}
            />
          );
        })}
      </Suspense>
    </section>
  );

  return content;
}
