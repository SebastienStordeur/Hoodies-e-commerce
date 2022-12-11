import Image from "next/image";
import React from "react";
import { Card } from "../";

interface ProductProps {
  imageCover: string;
  title: string;
  price: string;
}

const Product: React.FC<ProductProps> = ({ imageCover, title, price }) => {
  return (
    <Card>
      <Image src="" alt="" layout="fill" />
      <h3>{title}</h3>
    </Card>
  );
};

export default Product;
