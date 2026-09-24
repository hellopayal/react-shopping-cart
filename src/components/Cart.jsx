import { useState } from 'react'
import CartItem from './CartItem.jsx'

function Cart({
  cartItems,
  onIncreaseQty,
  onDecreaseQty,
  onRemoveItem,
  onApplyPromo,
  promoCode,
  promoError,
}) {
  const [codeInput, setCodeInput] = useState('')

  // TODO: compute subtotal, discount, and final total here
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  let discountPercent = 0
  if (subtotal > 100) discountPercent += 10
  if (promoCode === 'SAVE20') discountPercent += 20
  const discount = subtotal * (discountPercent / 100)
  const total = subtotal - discount

  function handlePromoSubmit(e) {
    e.preventDefault()
    // TODO
    onApplyPromo(codeInput)
  }

  return (
    cartItems.length === 0 ? (
      <p>cartItems is empty</p>
    ) : (
      <section className="cart">
        <h2>Cart</h2>

        {/* TODO: render empty state when cartItems is empty */}

        <ul className="cart-list">
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onIncreaseQty={onIncreaseQty}
              onDecreaseQty={onDecreaseQty}
              onRemoveItem={onRemoveItem}
            />
          ))}
        </ul>

        <form className="promo-form" onSubmit={handlePromoSubmit}>
          <input
            type="text"
            placeholder="Promo code"
            value={codeInput}
            onChange={(e) => setCodeInput(e.target.value)}
          />
          <button type="submit" className="btn btn-small">
            Apply
          </button>
        </form>
        {promoError && <p className="error-message">{promoError}</p>}
        {promoCode && <p className="promo-active">Promo applied: {promoCode}</p>}

        <div className="cart-summary">
          {/* TODO: render subtotal, discount (if any), and final total */}
          <p>SubTotal: {subtotal}</p>
          <p>Discount: {discount}</p>
          <p>Final Total: {total}</p>
        </div>

      </section>
    )
  )

}

export default Cart
