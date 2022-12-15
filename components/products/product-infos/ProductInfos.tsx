import React from "react";

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
      Colors:
      {colors.map((color, index: number) => {
        return (
          <span className="mx-1" key={index}>
            {color}
          </span>
        );
      })}
      {size.map((itemSize, index: number) => {
        return (
          <span className="mx-1" key={index}>
            {itemSize}
          </span>
        );
      })}
    </div>
  );
};

export default ProductInfos;
