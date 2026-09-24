function CartItem({ item, onIncreaseQty, onDecreaseQty, onRemoveItem }) {
  return (
    <li className="cart-item">
      <span className="cart-item-name">{item.name}</span>
      <span className="cart-item-price">${item.price}</span>
      <div className="qty-controls">
        <button className="btn btn-small" onClick={() => onDecreaseQty(item.id)}>
          -
        </button>
        <span className="qty-value">{item.quantity}</span>
        <button className="btn btn-small" onClick={() => onIncreaseQty(item.id)}>
          +
        </button>
      </div>
      <span className="cart-item-line-total">
        ${(item.price * item.quantity).toFixed(2)}
      </span>
      <button className="btn btn-small btn-danger" onClick={() => onRemoveItem(item.id)}>
        Remove
      </button>
    </li>
  )
}

export default CartItem
