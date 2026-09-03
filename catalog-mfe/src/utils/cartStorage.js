const CART_STORAGE_KEY = "mfe_ecommerce_cart";

export const getCart = () => {
  try {
    const storedCart = localStorage.getItem(CART_STORAGE_KEY);

    if (!storedCart) {
      return [];
    }

    const cart = JSON.parse(storedCart);

    return Array.isArray(cart) ? cart : [];
  } catch (error) {
    console.error("Failed to read cart from localStorage:", error);

    return [];
  }
};

export const saveCart = (cart) => {
  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  } catch (error) {
    console.error("Failed to save cart to localStorage:", error);
  }
};

export const addToCart = (product) => {
  const currentCart = getCart();

  const existingItem = currentCart.find((item) => item.id === product.id);

  let updatedCart;

  if (existingItem) {
    updatedCart = currentCart.map((item) =>
      item.id === product.id
        ? {
            ...item,
            quantity: item.quantity + 1,
          }
        : item,
    );
  } else {
    updatedCart = [
      ...currentCart,
      {
        ...product,
        quantity: 1,
      },
    ];
  }

  saveCart(updatedCart);

  return updatedCart;
};
