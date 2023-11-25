import { Suspense } from "react";
import type { Metadata } from "next";

import { notFound, useParams } from "next/navigation";
import getAllUsers from "@/app/lib/getAllUsers";
import getUserPosts from "@/app/lib/getUserPosts";
import getUser from "@/app/lib/getUsers";
import getAllCategoria from "@/app/lib/getAllCategoria";
import getCategoria from "@/app/lib/getCategoria";
import getAllArmas from "@/app/lib/getAllArmas";
import ArmasPosts from "./components/armasPosts";
import { Link } from "@nextui-org/react";

type Params = {
  params: {
    categoria: number;
  };
};

// export async function generateMetadata({
//   params: { userId },
// }: Params): Promise<Metadata> {
//   const userData: Promise<Categoria> = getCategoria(userId);
//   const categoria: Categoria = await userData;
//   if (!categoria.data) {
//     return {
//       title: "categoria Not Found",
//     };
//   }

//   return {
//     title: categoria.data[0].attributes.categoria,
//     description: `This is the page of ${categoria.data[0].attributes.categoria}`,
//   };
// }

export default async function UserPage({ params: { categoria } }: Params) {
  const armasData: Promise<DatosArmas> = getAllArmas(categoria);
  const categoriaData: Promise<CategoriaResponse> = getCategoria(categoria);

  // const userPostsData: Promise<Post[]> = getUserPosts(userId);

  //const [user, userPosts] = await Promise.all([userData, userPostsData])

  const categoriaDataResponse = await categoriaData;

  if (!categoriaDataResponse) notFound();

  return (
    <div className="flex flex-col ">
      <p>test</p>

      <h2>{categoriaDataResponse.data[0].attributes.categoria}</h2>

      <Suspense fallback={<h2>Loading...</h2>}>
        <ArmasPosts
          categoria={categoriaDataResponse.data[0].id}
          promise={armasData}
        />
      </Suspense>
      <Link isBlock showAnchorIcon href={`/products`} color="secondary">
        Secondary
      </Link>
    </div>
  );
}

export async function generateStaticParams() {
  const categoriaData: Promise<Categoria> = getAllCategoria();
  const categoria = await categoriaData;

  return categoria.data.map((categoria) => ({
    categoria: categoria.id.toString(),
  }));
}
