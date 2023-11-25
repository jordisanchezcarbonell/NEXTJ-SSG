import React from "react";
import Link from "next/link";
import CardCustom from "./card";

type CardCustomProps = {
  titulo: string;
  link: string;
  key: number;
};

export default function RendeerProducts(props: CardCustomProps) {
  const { titulo, link, key } = props;
  return (
    <Link key={key} href={`/products/${link}`}>
      <CardCustom texto={titulo} />
    </Link>
  );
}
