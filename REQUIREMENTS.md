# Challenge: Shopping Cart

## Difficulty: Medium
## Format: Interview-style — 4 requirements, no hints, no starter logic.

You are given a product list and an empty cart. Build the cart functionality
in `src/App.jsx` and `src/components/`. The component structure and styling
are already set up. All logic is left for you — there are no TODO hints
guiding individual steps this time.

---

## Requirements

### 1. Add / Remove from Cart
Each product has an "Add to Cart" button. Clicking it adds the product to the
cart with quantity 1. If the product is already in the cart, clicking it
again should increase its quantity instead of creating a duplicate line item.
The cart must show a way to remove an item entirely, and a way to increase/
decrease its quantity (decreasing to 0 removes it from the cart).

### 2. Price Calculation
The cart must display, live, as quantities change:
- Subtotal (sum of price × quantity across all cart items)
- A 10% discount applied automatically ONLY if the subtotal exceeds $100
- Final total after discount

### 3. Promo Code
There is a promo code input in the cart. The valid code is `SAVE20`, which
applies an additional 20% off the total (stacking on top of the automatic
$100+ discount if both apply). An invalid code should show an inline error
and must not change the total. Only one promo code can be active at a time —
applying a new one replaces the old one.

### 4. Empty Cart / Edge Cases
If the cart is empty, show a clear empty-state message instead of a blank
cart section. Handle the case where a user rapidly clicks "Add to Cart" many
times, and the case where quantity is decreased below 1 (must not go
negative, and must remove the item at 0 rather than showing "0" quantity of
a phantom item).

---

## Constraints
- No external state management library — use React's built-in hooks.
- No UI library — plain HTML + the provided CSS.
- All calculations must be derived (computed), not stored redundantly in
  separate state that can drift out of sync with the cart contents.

## How to Run
```bash
npm install
npm run dev
```

Good luck.
