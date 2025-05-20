document.addEventListener('DOMContentLoaded', () => {
  const cartLink = document.createElement('a');
  cartLink.href = 'cart';
  cartLink.className = 'floating-cart';
  cartLink.innerHTML = '<i class="fas fa-shopping-cart"></i>';

  document.body.appendChild(cartLink);
});