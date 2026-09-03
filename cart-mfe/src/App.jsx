import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartList from "./components/CartList";
// import { saveCart, removeCart } from "./utils/cartStorage";
import { getCurrency } from "./utils/cookieStorage";
// import { CART_ITEM_ADDED_EVENT, emitCartUpdated } from "./utils/cartEvents";
import "./App.css";

function App() {
  // const [items, setItems] = useState(getCart);
  const currency = getCurrency();
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   const handleCartItemAdded = (event) => {
  //     const product = event.detail?.product;

  //     if (!product) {
  //       return;
  //     }

  //     setItems((currentItems) => {
  //       const existingItem = currentItems.find(
  //         (item) => item.id === product.id,
  //       );

  //       let updatedItems;

  //       if (existingItem) {
  //         updatedItems = currentItems.map((item) =>
  //           item.id === product.id
  //             ? {
  //                 ...item,
  //                 quantity: item.quantity + 1,
  //               }
  //             : item,
  //         );
  //       } else {
  //         updatedItems = [
  //           ...currentItems,
  //           {
  //             ...product,
  //             quantity: 1,
  //           },
  //         ];
  //       }

  //       emitCartUpdated(updatedItems);

  //       return updatedItems;
  //     });
  //   };

  //   window.addEventListener(CART_ITEM_ADDED_EVENT, handleCartItemAdded);

  //   return () => {
  //     window.removeEventListener(CART_ITEM_ADDED_EVENT, handleCartItemAdded);
  //   };
  // }, []);

  // useEffect(() => {
  //   if (items.length > 0) {
  //     saveCart(items);
  //   } else {
  //     removeCart();
  //   }
  // }, [items]);

  const handleIncrease = (productId) => {
    dispatch({ type: "cart/increaseQuantity", payload: productId });
  };

  const handleDecrease = (productId) => {
    dispatch({ type: "cart/decreaseQuantity", payload: productId });
  };

  const handleRemove = (productId) => {
    dispatch({ type: "cart/removeFromCart", payload: productId });
  };

  const handleClearCart = () => {
    dispatch({ type: "cart/clearCart" });
  };

  // const increaseQuantity = (id) => {
  //   setItems((currentItems) =>
  //     currentItems.map((item) =>
  //       item.id === id
  //         ? {
  //             ...item,
  //             quantity: item.quantity + 1,
  //           }
  //         : item,
  //     ),
  //   );
  // };

  // const decreaseQuantity = (id) => {
  //   setItems((currentItems) =>
  //     currentItems
  //       .map((item) =>
  //         item.id === id
  //           ? {
  //               ...item,
  //               quantity: item.quantity - 1,
  //             }
  //           : item,
  //       )
  //       .filter((item) => item.quantity > 0),
  //   );
  // };

  // const removeItem = (id) => {
  //   setItems((currentItems) => currentItems.filter((item) => item.id !== id));
  // };

  // const clearCart = () => {
  //   setItems([]);
  //   removeCart();
  // };

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
              onIncrease={handleIncrease}
              onDecrease={handleDecrease}
              onRemove={handleRemove}
            />
          </section>

          <aside className="cart-summary">
            <h2>Order Summary</h2>

            <div className="cart-summary__row">
              <span>Items</span>
              <span>{totalItems}</span>
            </div>

            <div className="cart-summary__row">
              <span>Subtotal ({currency})</span>

              <strong>{totalPrice.toFixed(2)}</strong>
            </div>

            <div className="cart-summary__divider" />

            <div className="cart-summary__total">
              <span>Total ({currency})</span>

              <strong>{totalPrice.toFixed(2)}</strong>
            </div>

            <button className="button button--primary cart-summary__checkout">
              Proceed to Checkout
            </button>

            <button className="cart-summary__clear" onClick={handleClearCart}>
              Clear Cart
            </button>
          </aside>
        </div>
      )}
    </main>
  );
}

export default App;
