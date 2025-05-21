// assets/scripts/products.js
(function() {
  const productsContainer = document.getElementById('products');
  if (!productsContainer) {
    console.error('products.js: #products not found');
    return;
  }

  productsContainer.addEventListener('click', event => {
    if (!event.target.classList.contains('add-to-cart')) return;

    const productEl = event.target.closest('.product');
    const name  = productEl.dataset.name;
    const price = parseFloat(productEl.dataset.price);

    try {
      // fetch raw
      const raw = localStorage.getItem('cart');
      let cart = [];

      if (raw) {
        const parsed = JSON.parse(raw);
        // if it’s actually an array, use it; otherwise reset
        if (Array.isArray(parsed)) {
          cart = parsed;
        } else {
          console.warn('products.js: cart in storage was not an array, resetting.', parsed);
        }
      }

      // now safe to push
      cart.push({ name, price });
      localStorage.setItem('cart', JSON.stringify(cart));

      alert(`${name} added to cart!`);
    } catch (err) {
      console.error('products.js storage error:', err);
      alert('Sorry, could not save to cart: ' + err.message);
    }
    updateCartCount();
  });
})();
