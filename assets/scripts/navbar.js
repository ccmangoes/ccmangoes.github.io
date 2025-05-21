const navbar = document.createElement("div");
navbar.className = "navbar";
navbar.innerHTML = `
  <a href="index.html" class="logo">🏠</a>
  <a href="cart" class="floating-cart">
    <i class="fas fa-shopping-cart"></i> <span id="cart-count" class="cart-count">0</span>
  </a>
`;
document.body.prepend(navbar);

// Spacer so content doesn't get hidden behind navbar
const spacer = document.createElement("div");
spacer.style.height = "60px";
document.body.insertBefore(spacer, navbar.nextSibling);

// Update cart count
function updateCartCount() {
  try {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    document.getElementById("cart-count").textContent = cart.length;
  } catch {
    document.getElementById("cart-count").textContent = "0";
  }
}
updateCartCount();
window.addEventListener("storage", updateCartCount);
