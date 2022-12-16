import React from "react";
import Button from "../../UI/Button";
import ColorSelector from "./ColorSelector";
import SizeSelector from "./SizeSelector";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../redux/cart/cart";

interface ProductInfosProps {
  title: string;
  colors: string[];
  price: string;
  brand: string;
  size: string[];
  id: string;
}

const ProductInfos: React.FC<ProductInfosProps> = ({
  title,
  colors,
  price,
  brand,
  size,
  id,
}) => {
  const dispatch = useDispatch();

  const addItemToCartHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        title,
        price: JSON.parse(price),
        quantity: 1,
      })
    );
  };

  return (
    <div className="mx-8">
      <h2 className="text-3xl font-bold ">{title}</h2>
      <p className="font-semibold text-lg">Brand: {brand}</p>
      <div>
        <p className="font-semibold text-lg">
          Price: <span className="text-red font-bold">{price}$</span>
        </p>
      </div>
      <ColorSelector colors={colors} />
      <SizeSelector size={size} />
      <Button className="mt-8" onClick={addItemToCartHandler}>
        Add To Cart
      </Button>
    </div>
  );
};

export default ProductInfos;
