export const CART_ITEM_ADDED_EVENT = "mfe:cart-item-added";
export const CART_UPDATED_EVENT = "mfe:cart-updated";

export const emitCartItemAdded = (product) => {
  window.dispatchEvent(
    new CustomEvent(CART_ITEM_ADDED_EVENT, {
      detail: {
        product,
      },
    }),
  );
};

export const emitCartUpdated = (cart) => {
  window.dispatchEvent(
    new CustomEvent(CART_UPDATED_EVENT, {
      detail: {
        cart,
      },
    }),
  );
};
