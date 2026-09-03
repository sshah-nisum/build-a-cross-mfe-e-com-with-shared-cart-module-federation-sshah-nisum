import ProductCard from "./ProductCard";
import { getCurrency } from "../utils/cookieStorage";

function ProductList({ products, onAddToCart, onViewDetails }) {
  const currency = getCurrency();

  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          currency={currency}
          onAddToCart={onAddToCart}
          onViewDetails={onViewDetails}
        />
      ))}
    </div>
  );
}

export default ProductList;
