import { createPortal } from "react-dom";
import { useNavigate } from "react-router-dom";
import CartItems from "./CartItems.tsx";
import { useAppDispatch, useAppSelector } from "../store/hooks.ts";
import { clearCart } from "../store/cart-slice.ts";

type CartProps = {
  onClose: () => void;
};

export default function Cart({ onClose }: CartProps) {
  const cartItems = useAppSelector((state) => state.cart.items);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  // Clear cart
  function handleClear() {
    dispatch(clearCart());
  }

  // Navigate to checkout page
  function handleCheckout() {
    onClose(); // Close cart
    navigate("/checkout");
  }

  return createPortal(
    <>
      <div className="cart-backdrop" />
      <dialog id="cart-modal" open>
        <h2>Your Cart</h2>
        <CartItems />
        <p id="cart-actions">
          {cartItems.length > 0 && (
            <>
              <button onClick={handleClear} className="btns">
                Clear Cart
              </button>
              <button onClick={handleCheckout} className="btn">
                Checkout
              </button>
            </>
          )}
          <button onClick={onClose} className="btns">
            Close
          </button>
        </p>
      </dialog>
    </>,
    document.getElementById("modal")!
  );
}
