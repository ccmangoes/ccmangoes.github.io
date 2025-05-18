// inject switch into the DOM
const html = document.documentElement;
const container = document.createElement('label');
container.className = 'switch';
container.innerHTML = `
  <input type="checkbox" id="theme-toggle">
  <span class="slider"></span>
`;
document.body.appendChild(container);

// on toggle, add/remove 'dark' class
const checkbox = container.querySelector('#theme-toggle');
checkbox.addEventListener('change', () => {
  html.classList.toggle('dark', checkbox.checked);
  // optional: persist choice in localStorage
  localStorage.setItem('darkMode', checkbox.checked);
});

// on load, read saved preference
if (localStorage.getItem('darkMode') === 'true') {
  checkbox.checked = true;
  html.classList.add('dark');
}
