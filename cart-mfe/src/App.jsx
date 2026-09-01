import { useMemo, useState } from "react";
import CartList from "./components/CartList";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);

  const increaseQuantity = (id) => {
    setItems((currentItems) =>
      currentItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item,
      ),
    );
  };

  const decreaseQuantity = (id) => {
    setItems((currentItems) =>
      currentItems
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  const removeItem = (id) => {
    setItems((currentItems) => currentItems.filter((item) => item.id !== id));
  };

  const totalItems = useMemo(
    () => items.reduce((total, item) => total + item.quantity, 0),
    [items],
  );

  const totalPrice = useMemo(
    () => items.reduce((total, item) => total + item.price * item.quantity, 0),
    [items],
  );

  return (
    <main className="cart-page">
      <div className="cart-page__header">
        <p className="cart-page__eyebrow">Your Order</p>

        <h1>Shopping Cart</h1>

        <p>Review your selected products before checkout.</p>
      </div>

      {items.length === 0 ? (
        <div className="cart-empty">
          <div className="cart-empty__icon">🛒</div>

          <h2>Your cart is empty</h2>

          <p>Add some products from the catalog to get started.</p>
        </div>
      ) : (
        <div className="cart-layout">
          <section className="cart-items">
            <CartList
              items={items}
              onIncrease={increaseQuantity}
              onDecrease={decreaseQuantity}
              onRemove={removeItem}
            />
          </section>

          <aside className="cart-summary">
            <h2>Order Summary</h2>

            <div className="cart-summary__row">
              <span>Items</span>
              <span>{totalItems}</span>
            </div>

            <div className="cart-summary__row">
              <span>Subtotal</span>
              <strong>${totalPrice.toFixed(2)}</strong>
            </div>

            <div className="cart-summary__divider" />

            <div className="cart-summary__total">
              <span>Total</span>
              <strong>${totalPrice.toFixed(2)}</strong>
            </div>

            <button className="button button--primary cart-summary__checkout">
              Proceed to Checkout
            </button>

            <button
              className="cart-summary__clear"
              onClick={() => setItems([])}
            >
              Clear Cart
            </button>
          </aside>
        </div>
      )}
    </main>
  );
}

export default App;
