import getAllArmasWithouCategory from "@/app/lib/getAllArmasWithouCategprys";
import getAllCategoria from "@/app/lib/getAllCategoria";
import { Suspense } from "react";
import ArmasPostsDentro from "./components/armasPosts";
import getArmas from "@/app/lib/getArmas";
import { Metadata } from "next";
type Params = {
  params: {
    categoria: string;
    arma: string;
  };
};
export async function generateMetadata({
  params: { arma },
}: Params): Promise<Metadata> {
  const armasData: Promise<ArmaResponse> = getArmas(arma);

  const armasDataRespnse = await armasData;
  if (!armasDataRespnse.data) {
    return {
      title: "categoria Not Found",
    };
  }
  const value = armasDataRespnse.data[0].attributes.Titulo;
  return {
    title: value,
    description: `This is the page of ${value}`,
  };
}

export default async function UserPage({
  params: { categoria, arma },
}: Params) {
  const armasData: Promise<ArmaResponse> = getArmas(arma);

  return (
    <>
      <Suspense fallback={<h2>Loading...</h2>}>
        <ArmasPostsDentro promise={armasData} />
      </Suspense>
    </>
  );
}

// Generate segments for both [category] and [product]
export async function generateStaticParams() {
  const categoriaData: Promise<DatosArmas> = getAllArmasWithouCategory();

  const categoria = await categoriaData;
  return categoria.data.map((product) => ({
    categoria: product.attributes.categoria.data.attributes.slug,
    arma: product.attributes.slug,
  }));
}
