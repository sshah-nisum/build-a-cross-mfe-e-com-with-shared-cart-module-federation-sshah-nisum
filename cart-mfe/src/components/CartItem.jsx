function CartItem({ item, onIncrease, onDecrease, onRemove }) {
  const subtotal = item.price * item.quantity;

  return (
    <article className="cart-item">
      <div className="cart-item__info">
        <div className="cart-item__image-wrapper">
          {item.image ? (
            <img
              src={item.image}
              alt={item.name}
              className="cart-item__image"
            />
          ) : (
            <div className="cart-item__placeholder">Product</div>
          )}
        </div>

        <div>
          <h3>{item.name}</h3>

          <p>${item.price.toFixed(2)} each</p>

          <button
            className="cart-item__remove"
            onClick={() => onRemove(item.id)}
          >
            Remove
          </button>
        </div>
      </div>

      <div className="cart-item__actions">
        <div className="quantity-control">
          <button onClick={() => onDecrease(item.id)}>−</button>

          <span>{item.quantity}</span>

          <button onClick={() => onIncrease(item.id)}>+</button>
        </div>

        <strong>${subtotal.toFixed(2)}</strong>
      </div>
    </article>
  );
}

export default CartItem;
