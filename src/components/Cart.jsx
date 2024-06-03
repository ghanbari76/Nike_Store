import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CartCount from "./cart/CartCount";
import CartEmpty from "./cart/CartEmpty";
import CartItem from "./cart/CartItem";
import {
  selectCartItems,
  selectCartState,
  setCloseCart,
} from "../app/CartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const ifCartState = useSelector(selectCartState);
  const cartItems = useSelector(selectCartItems);

  const onCartToggle = () => {
    dispatch(
      setCloseCart({
        cartState: false,
      })
    );
  };
  return (
    <>
      <div
        className={`
          fixed top-0 left-0 right-0 bottom-0 blur-effect-theme w-full h-screen opacity-100 z-[250]
          ${
            ifCartState
              ? "opacity-100 visible translate-x-0"
              : "opacity-0 invisible translate-x-8"
          }
        `}
      >
        <div
          className={`h-screen blur-effect-theme max-w-xl w-full absolute right-0`}
        >
          <CartCount onCartToggle={onCartToggle} />
          {!cartItems.length ? (
            <CartEmpty />
          ) : (
            <div>
              <div className="flex flex-col items-start justify-start gap-y-7 lg:gap-y-5 overflow-y-scroll h-[81vh] scroll-smooth scroll-hidden">
                {cartItems.map((item, i) => (
                  <CartItem item={item} key={i} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
