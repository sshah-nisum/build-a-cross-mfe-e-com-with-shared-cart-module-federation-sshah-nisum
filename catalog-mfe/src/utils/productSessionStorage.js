const RECENT_PRODUCT_KEY = "mfe_recent_product";

export const getRecentProduct = () => {
  try {
    const storedProduct = sessionStorage.getItem(RECENT_PRODUCT_KEY);

    if (!storedProduct) {
      return null;
    }

    return JSON.parse(storedProduct);
  } catch (error) {
    console.error("Failed to read recent product from sessionStorage:", error);

    return null;
  }
};

export const saveRecentProduct = (product) => {
  try {
    sessionStorage.setItem(RECENT_PRODUCT_KEY, JSON.stringify(product));
  } catch (error) {
    console.error("Failed to save recent product to sessionStorage:", error);
  }
};

export const removeRecentProduct = () => {
  try {
    sessionStorage.removeItem(RECENT_PRODUCT_KEY);
  } catch (error) {
    console.error(
      "Failed to remove recent product from sessionStorage:",
      error,
    );
  }
};
