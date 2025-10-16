// import { createPortal } from "react-dom";

// import CartItems from "./CartItems.tsx";
// import { useAppDispatch, useAppSelector } from "../store/hooks.ts";
// import { clearCart } from "../store/cart-slice.ts";

// type CartProps = {
//   onClose: () => void;
// };

// export default function Cart({ onClose }: CartProps) {
//   const cartItems = useAppSelector((state) => state.cart.items);

//   const dispatch = useAppDispatch();

//   function handleClear() {
//     dispatch(clearCart());
//   }

//   return createPortal(
//     <>
//       <div className="cart-backdrop" />
//       <dialog id="cart-modal" open>
//         <h2>Your Cart</h2>
//         <CartItems />
//         <p id="cart-actions">
//           {cartItems.length > 0 && (
//             <button onClick={handleClear}>Clear Cart</button>
//           )}
//           <button onClick={onClose}>Close</button>
//         </p>
//       </dialog>
//     </>,
//     document.getElementById("modal")!
//   );
// }

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
  const navigate = useNavigate(); // Initialize navigation

  // 🧹 Clears the cart
  function handleClear() {
    dispatch(clearCart());
  }

  // 🧭 Navigates to checkout page
  function handleCheckout() {
    onClose(); // Close the cart modal
    navigate("/checkout"); // Go to the checkout route
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
              <button onClick={handleClear}>Clear Cart</button>
              <button onClick={handleCheckout}>Checkout</button>
            </>
          )}
          <button onClick={onClose}>Close</button>
        </p>
      </dialog>
    </>,
    document.getElementById("modal")!
  );
}
