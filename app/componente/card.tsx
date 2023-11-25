import React from "react";
import { Card, CardBody } from "@nextui-org/react";
type CardCustomProps = {
  texto: string;
};

export default function CardCustom(props: CardCustomProps) {
  const { texto } = props;
  return (
    <Card>
      <CardBody>
        <p>{texto}</p>
      </CardBody>
    </Card>
  );
}
