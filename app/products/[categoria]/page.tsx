import { Suspense } from "react";
import type { Metadata } from "next";

import { notFound } from "next/navigation";
import getAllCategoria from "@/app/lib/getAllCategoria";
import getCategoria from "@/app/lib/getCategoria";
import getAllArmas from "@/app/lib/getAllArmas";
import ArmasPosts from "./components/armasPosts";
import { Link } from "@nextui-org/react";

type Params = {
  params: {
    categoria: string;
    idCategoria: number;
  };
};

export async function generateMetadata({
  params: { categoria },
}: Params): Promise<Metadata> {
  const categoriaData: Promise<CategoriaResponse> = getCategoria(categoria);

  const categoriaDataRespnse: Categoria = await categoriaData;
  if (!categoriaDataRespnse.data) {
    return {
      title: "categoria Not Found",
    };
  }
  const value = categoriaDataRespnse.data[0].attributes.titulo;
  return {
    title: value,
    description: `This is the page of ${value}`,
  };
}

export default async function UserPage({ params: { categoria } }: Params) {
  const armasData: Promise<DatosArmas> = getAllArmas(categoria);
  const categoriaData: Promise<CategoriaResponse> = getCategoria(categoria);

  const categoriaDataResponse = await categoriaData;

  if (!categoriaDataResponse) notFound();

  return (
    <div className="flex flex-col ">
      <p>test</p>

      <h2>{categoriaDataResponse.data[0].attributes.titulo}</h2>

      <Suspense fallback={<h2>Loading...</h2>}>
        <ArmasPosts
          categoria={categoriaDataResponse.data[0].attributes.slug}
          promise={armasData}
        />
      </Suspense>
      <Link isBlock showAnchorIcon href={`/products`} color="secondary">
        back productos
      </Link>
    </div>
  );
}

export async function generateStaticParams() {
  const categoriaData: Promise<Categoria> = getAllCategoria();
  const categoria = await categoriaData;

  return categoria.data.map((categoria) => ({
    categoria: categoria.attributes.slug,
  }));
}
