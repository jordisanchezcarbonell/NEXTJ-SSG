import getAllArmasWithouCategory from "@/app/lib/getAllArmasWithouCategprys";
import getAllCategoria from "@/app/lib/getAllCategoria";
import { Suspense } from "react";
import ArmasPostsDentro from "./components/armasPosts";
import getArmas from "@/app/lib/getArmas";
type Params = {
  params: {
    categoria: number;
    arma: string;
  };
};

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
    categoria: product.attributes.categoria.data.id.toString(),
    arma: product.attributes.slug,
  }));
}
