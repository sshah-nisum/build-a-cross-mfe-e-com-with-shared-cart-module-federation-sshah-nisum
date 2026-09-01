import { useState } from "react";
import products from "./data/products";
import ProductList from "./components/ProductList";
import "./App.css";

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleAddToCart = (product) => {
    console.log("Add to cart:", product);
  };

  const handleViewDetails = (product) => {
    setSelectedProduct(product);
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
              onClick={() => setSelectedProduct(null)}
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

              <strong>${selectedProduct.price.toFixed(2)}</strong>

              <button
                className="button button--primary"
                onClick={() => {
                  handleAddToCart(selectedProduct);
                  setSelectedProduct(null);
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
