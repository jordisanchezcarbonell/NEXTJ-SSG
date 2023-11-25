type Props = {
  promise: Promise<DatosArmas>;
  categoria: number;
};
import { Image } from "@nextui-org/react";
import { Link } from "@nextui-org/react";

export default async function ArmasPosts({ promise, categoria }: Props) {
  const posts = await promise;
  const content = posts.data.map((post) => {
    return (
      <>
        <Link
          key={post.id}
          isBlock
          showAnchorIcon
          href={`/products/${categoria}/${post.attributes.slug}`}
          color="foreground"
        >
          <article>
            <h2>{post.attributes.Titulo}</h2>
            <Image
              width={300}
              alt="NextUI hero Image"
              src={post.attributes.imagen.data[0].attributes.url}
            />

            <p>{post.attributes.slug}</p>

            <br />
          </article>
        </Link>
      </>
    );
  });

  return content;
}
