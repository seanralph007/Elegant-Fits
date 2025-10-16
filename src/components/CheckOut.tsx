import { useAppSelector } from "../store/hooks";
import "./Checkout.css";

export default function Checkout() {
  const cartItems = useAppSelector((state) => state.cart.items);
  const totalPrice = cartItems.reduce(
    (val, item) => val + item.price * item.quantity,
    0
  );

  return (
    <div className="checkout-container">
      {/* LEFT SIDE - ORDER SUMMARY */}
      <section className="checkout-summary">
        <header className="checkout-header">
          <h2>Elegant Fits</h2>
        </header>

        <div className="checkout-items">
          <h3>
            {cartItems.length > 1
              ? `${cartItems[0].title} and ${cartItems.length - 1} more`
              : cartItems[0]?.title || "Your Cart"}
          </h3>

          <p className="checkout-total">${totalPrice.toFixed(2)}</p>

          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                <div>
                  <p>{item.title}</p>
                  <p className="qty">Qty {item.quantity}</p>
                </div>
                <p className="price">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <footer className="powered-by">
          <p>
            Powered by <strong>Stripe</strong>
          </p>
          <div className="links">
            <a href="#">Terms</a> • <a href="#">Privacy</a>
          </div>
        </footer>
      </section>

      {/* RIGHT SIDE - PAYMENT FORM */}
      <section className="checkout-form">
        <h3>Pay with card</h3>

        <form>
          <div className="form-section">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-section">
            <label>Shipping address</label>
            <input type="text" placeholder="Name" required />
            <input
              type="text"
              placeholder="Country"
              defaultValue="United Kingdom"
            />
            <input type="text" placeholder="Address" required />
          </div>

          <div className="form-section">
            <label>Payment details</label>
            <input type="text" placeholder="Card number" required />
            <div className="card-row">
              <input type="text" placeholder="MM / YY" required />
              <input type="text" placeholder="CVC" required />
            </div>
          </div>

          <div className="checkbox">
            <input type="checkbox" id="billing" defaultChecked />
            <label htmlFor="billing">Billing address is same as shipping</label>
          </div>

          <button type="submit" className="pay-btn">
            Pay
          </button>
        </form>
      </section>
    </div>
  );
}
