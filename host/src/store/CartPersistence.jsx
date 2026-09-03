import { useEffect } from "react";
import { useSelector } from "react-redux";

const CART_STORAGE_KEY = "mfe_ecommerce_cart";

function CartPersistence() {
  const items = useSelector((state) => state.cart.items);

  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
    } catch (error) {
      console.error("Failed to save cart to localStorage:", error);
    }
  }, [items]);

  return null;
}

export default CartPersistence;
