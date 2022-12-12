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
      <div className="w-full h-72 overflow-hidden">
        <Image src={imageCover} alt="" width={300} height={600} />
      </div>
      <h3 className="font-bold">{title}</h3>
      <span>{price}$</span>
    </Card>
  );
};

export default Product;
