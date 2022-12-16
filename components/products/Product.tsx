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
      <div className="max-w-xs h-72 overflow-hidden mx-auto">
        <Image src={imageCover} alt={title} width={300} height={600} priority />
      </div>
      <h3 className="font-medium">{title}</h3>
      <span className="font-semibold">{price}$</span>
    </Card>
  );
};

export default Product;
