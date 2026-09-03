function ProductCard({ product, onAddToCart, onViewDetails, currency }) {
  return (
    <article className="product-card">
      <button
        className="product-card__image-button"
        onClick={() => onViewDetails(product)}
      >
        <img
          src={product.image}
          alt={product.name}
          className="product-card__image"
        />
      </button>

      <div className="product-card__content">
        <h3 className="product-card__title">{product.name}</h3>

        <p className="product-card__description">{product.description}</p>

        <div className="product-card__footer">
          <span className="product-card__price">
            {product.price.toFixed(2)} {currency}
          </span>

          <button
            className="button button--primary"
            onClick={() => onAddToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
