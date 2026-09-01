import CartItem from "./CartItem";

function CartList({ items, onIncrease, onDecrease, onRemove }) {
  if (items.length === 0) {
    return <p>Your cart is empty.</p>;
  }

  return (
    <div>
      {items.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          onIncrease={onIncrease}
          onDecrease={onDecrease}
          onRemove={onRemove}
        />
      ))}
    </div>
  );
}

export default CartList;
