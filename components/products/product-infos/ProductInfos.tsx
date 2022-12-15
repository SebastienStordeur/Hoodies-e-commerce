import React from "react";
import Button from "../../UI/Button";
import ColorSelector from "./ColorSelector";
import SizeSelector from "./SizeSelector";

interface ProductInfosProps {
  title: string;
  colors: string[];
  price: string;
  brand: string;
  size: string[];
}

const ProductInfos: React.FC<ProductInfosProps> = ({
  title,
  colors,
  price,
  brand,
  size,
}) => {
  return (
    <div className="mx-8">
      <h2 className="text-3xl font-bold ">{title}</h2>
      <p className="font-semibold text-lg">Brand: {brand}</p>
      <div>
        <p className="font-semibold text-lg">
          Price: <span className="text-red font-bold">{price}</span>
        </p>
      </div>
      <ColorSelector colors={colors} />
      <SizeSelector size={size} />
      <Button className="mt-8">Add To Cart</Button>
    </div>
  );
};

export default ProductInfos;
