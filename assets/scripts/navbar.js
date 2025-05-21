// Create navbar container
const navbar = document.createElement("div");
navbar.className = "navbar";
navbar.innerHTML = `
  <a href="index.html" class="logo">🏠</a>
  <a href="cart.html" class="cart-icon">
    🛒 <span id="cart-count" class="cart-count">0</span>
  </a>
`;
document.body.prepend(navbar);

// Optional spacer to prevent overlap
const spacer = document.createElement("div");
spacer.style.height = "60px";
document.body.insertBefore(spacer, navbar.nextSibling);

// Function to update cart count
function updateCartCount() {
  try {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const count = cart.length;
    document.getElementById("cart-count").textContent = count;
  } catch {
    document.getElementById("cart-count").textContent = "0";
  }
}

// Update on load
updateCartCount();

// Update whenever cart is changed
window.addEventListener("storage", updateCartCount);
