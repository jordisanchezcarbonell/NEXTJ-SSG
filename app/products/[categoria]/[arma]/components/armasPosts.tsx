type Props = {
  promise: Promise<ArmaResponse>;
};
import { Image, Link } from "@nextui-org/react";
import { notFound } from "next/navigation";

export default async function ArmasPostsDentro({ promise }: Props) {
  const posts = await promise;

  if (!posts) notFound();
  return (
    <article key={posts.data[0].id}>
      <h2>{posts.data[0].attributes.Titulo}</h2>
      <Image
        width={300}
        alt="NextUI hero Image"
        src={posts.data[0].attributes.imagen.data[0].attributes.url}
      />

      <p>{posts.data[0].attributes.slug}</p>
      <p>{posts.data[0].attributes.especificaciones}</p>

      <br />

      <Link
        isBlock
        showAnchorIcon
        href={`/products/${posts.data[0].id}`}
        color="secondary"
      >
        Secondary
      </Link>
    </article>
  );
}
