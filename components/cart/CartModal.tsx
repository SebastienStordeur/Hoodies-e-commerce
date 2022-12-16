import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/index";
import { cartActions } from "../../redux/cart/cart";

const CartModal: React.FC = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart.items);
  const total = useSelector((state: RootState) => state.cart.totalPrice);

  const increaseItemQuantity = (item: any) => {
    dispatch(cartActions.addItemToCart(item));
  };

  const decreaseItemQuantity = (item: any) => {
    dispatch(cartActions.removeItemFromCart(item));
    console.log(cart);
  };
  return (
    <div className="absolute top-1/2 left-1/2 w-72 h-auto">
      <h2 className="text-2xl font-bold">Cart {cart.length}</h2>
      <div>
        {cart.map((item: any) => {
          return (
            <div key={item.id}>
              <h4>{item.title}</h4>
              Quantity:
              <span
                className="px-2 py-1 border mr-1"
                onClick={() => decreaseItemQuantity(item.id)}
              >
                -
              </span>
              {item.quantity}
              <span
                className="px-2 py-1 border ml-1"
                onClick={() => increaseItemQuantity({ ...item, quantity: 1 })}
              >
                +
              </span>
              Total Price : {total}
            </div>
          );
        })}
      </div>
      {cart.length}
    </div>
  );
};

export default CartModal;
