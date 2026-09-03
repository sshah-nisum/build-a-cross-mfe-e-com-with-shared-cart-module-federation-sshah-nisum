const PRODUCT_QUERY_KEY = "product";

export const getProductIdFromQuery = () => {
  const params = new URLSearchParams(window.location.search);

  return params.get(PRODUCT_QUERY_KEY);
};

export const setProductIdInQuery = (productId) => {
  const url = new URL(window.location.href);

  url.searchParams.set(PRODUCT_QUERY_KEY, productId);

  window.history.pushState({}, "", url);
};

export const removeProductIdFromQuery = () => {
  const url = new URL(window.location.href);

  url.searchParams.delete(PRODUCT_QUERY_KEY);

  window.history.pushState({}, "", url);
};
