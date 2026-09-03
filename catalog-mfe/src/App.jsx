import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import products from "./data/products";
import ProductList from "./components/ProductList";
// import { addToCart } from "./utils/cartStorage";
// import { emitCartItemAdded } from "./utils/cartEvents";
import {
  getRecentProduct,
  saveRecentProduct,
} from "./utils/productSessionStorage";
import { getCurrency, setCurrency } from "./utils/cookieStorage";
import {
  getProductIdFromQuery,
  setProductIdInQuery,
  removeProductIdFromQuery,
} from "./utils/queryParams";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [recentProduct, setRecentProduct] = useState(getRecentProduct);
  const [currency, setCurrencyState] = useState(getCurrency);

  useEffect(() => {
    const productId = getProductIdFromQuery();

    if (!productId) {
      return;
    }

    const product = products.find((item) => item.id === Number(productId));

    if (product) {
      setSelectedProduct(product);
    }
  }, []);

  useEffect(() => {
    const handlePopState = () => {
      const productId = getProductIdFromQuery();
      if (!productId) {
        setSelectedProduct(null);
        return;
      }
      const product = products.find((item) => item.id === Number(productId));
      setSelectedProduct(product || null);
    };
    window.addEventListener("popstate", handlePopState);
    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  const handleAddToCart = (product) => {
    // addToCart(product);
    // emitCartItemAdded(product);
    dispatch({ type: "cart/addToCart", payload: product });
  };

  const handleViewDetails = (product) => {
    setSelectedProduct(product);
    setRecentProduct(product);
    saveRecentProduct(product);
    setProductIdInQuery(product.id);
  };

  const handleCloseDetails = () => {
    setSelectedProduct(null);
    removeProductIdFromQuery();
  };

  const handleCurrencyChange = (event) => {
    const newCurrency = event.target.value;

    setCurrencyState(newCurrency);
    setCurrency(newCurrency);
  };

  return (
    <main className="catalog">
      <div className="catalog__header">
        <p className="catalog__eyebrow">Featured Collection</p>

        <h1 className="catalog__title">Everything you need.</h1>

        <p className="catalog__subtitle">
          Discover our collection of carefully selected technology products
          designed for work, creativity, and everyday life.
        </p>
      </div>

      <div className="catalog-toolbar">
        <div>
          <span className="catalog-toolbar__label">Showing prices in</span>
          <strong>{currency}</strong>
        </div>

        <label className="currency-selector">
          <span>Currency</span>

          <select value={currency} onChange={handleCurrencyChange}>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
          </select>
        </label>
      </div>

      {recentProduct && (
        <section className="recent-product">
          <div>
            <p className="recent-product__label"> Recently Viewed </p>
            <h2>{recentProduct.name}</h2>
            <p> You recently viewed this product. </p>
          </div>
          <button
            className="button button--secondary"
            onClick={() => setSelectedProduct(recentProduct)}
          >
            View Again
          </button>
        </section>
      )}
      <ProductList
        products={products}
        onAddToCart={handleAddToCart}
        onViewDetails={handleViewDetails}
      />
      {selectedProduct && (
        <div className="product-modal">
          <div className="product-modal__content">
            <button
              className="product-modal__close"
              onClick={() => handleCloseDetails()}
            >
              ×
            </button>

            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="product-modal__image"
            />

            <div className="product-modal__body">
              <p className="catalog__eyebrow">Product Details</p>

              <h2>{selectedProduct.name}</h2>

              <p>{selectedProduct.description}</p>

              <strong>
                {selectedProduct.price.toFixed(2)} {currency}
              </strong>

              <button
                className="button button--primary"
                onClick={() => {
                  handleAddToCart(selectedProduct);
                  handleCloseDetails();
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default App;
