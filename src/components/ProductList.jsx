function ProductList({ products, onAddToCart }) {
  return (
    <section className="product-list">
      <h2>Products</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <p className="product-name">{product.name}</p>
            <p className="product-price">${product.price}</p>
            <button className="btn btn-primary" onClick={() => onAddToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ProductList
