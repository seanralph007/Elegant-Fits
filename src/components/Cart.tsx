import { createPortal } from "react-dom";

import CartItems from "./CartItems.tsx";
import { useAppDispatch, useAppSelector } from "../store/hooks.ts";
import { clearCart } from "../store/cart-slice.ts";

type CartProps = {
  onClose: () => void;
};

export default function Cart({ onClose }: CartProps) {
  const cartItems = useAppSelector((state) => state.cart.items);

  const dispatch = useAppDispatch();

  function handleClear() {
    dispatch(clearCart());
  }

  return createPortal(
    <>
      <div className="cart-backdrop" />
      <dialog id="cart-modal" open>
        <h2>Your Cart</h2>
        <CartItems />
        <p id="cart-actions">
          {cartItems.length > 0 && (
            <button onClick={handleClear}>Clear Cart</button>
          )}
          <button onClick={onClose}>Close</button>
        </p>
      </dialog>
    </>,
    document.getElementById("modal")!
  );
}
