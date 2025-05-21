document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.createElement("div");
  navbar.className = "navbar";

  navbar.innerHTML = `
    <a href="index.html">Home</a>
    <a href="products.html">Products</a>
    <a href="cart.html">
      <i class="fa fa-shopping-cart"></i> Cart
    </a>
  `;

  document.body.prepend(navbar);
});