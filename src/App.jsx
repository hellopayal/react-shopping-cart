import { useState } from 'react'
import products from './products.js'
import ProductList from './components/ProductList.jsx'
import Cart from './components/Cart.jsx'

function App() {
  const [cartItems, setCartItems] = useState([])
  const [promoCode, setPromoCode] = useState(null)
  const [promoError, setPromoError] = useState('')

  const VALID_PROMO_CODE = 'SAVE20'

  function handleAddToCart(product) {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id)

      if (existing) {
        return prev.map((item) => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)
      }
      return [...prev, { ...product, quantity: 1 }]
    })
  }

  function handleIncreaseQty(id) {
    // TODO
    setCartItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    )
  }

  function handleDecreaseQty(id) {
    // TODO
    setCartItems((prev) => {
      const dec = prev.map((item) => item.id === id ? { ...item, quantity: item.quantity - 1 } : item)

      return dec.filter(item => item.quantity > 0)
    }
    )
  }

  function handleRemoveItem(id) {
    // TODO
    setCartItems((pre) => {
      const result = pre.filter((item) => item.id !== id)
      return result
    })
  }

  function handleApplyPromo(code) {
    // TODO
    const cleancode  = code.trim().toUpperCase()
    if(cleancode === VALID_PROMO_CODE){
      setPromoCode(20)
      setPromoError('')
    } else {
      setPromoError("Invalid PromoCode. Try again")
    }
    
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>Shopping Cart</h1>
        <p className="subtitle">React Practice Project</p>
      </header>

      <main className="app-main">
        <ProductList products={products} onAddToCart={handleAddToCart} />

        <Cart
          cartItems={cartItems}
          onIncreaseQty={handleIncreaseQty}
          onDecreaseQty={handleDecreaseQty}
          onRemoveItem={handleRemoveItem}
          onApplyPromo={handleApplyPromo}
          promoCode={promoCode}
          promoError={promoError}
        />
      </main>
    </div>
  )
}

export default App
