// dark-mode.js
document.addEventListener('DOMContentLoaded', () => {
  // 1) Create the switch element
  const switchLabel = document.createElement('label');
  switchLabel.className = 'switch';
  switchLabel.innerHTML = `
    <input type="checkbox" id="theme-toggle">
    <span class="slider"></span>
  `;

  // 2) Append it (you can target a container instead of body if you like)
  document.body.appendChild(switchLabel);

  // 3) Load saved preference
  const toggle = document.getElementById('theme-toggle');
  const saved = localStorage.getItem('theme');
  if (saved === 'dark') {
    document.documentElement.classList.add('dark');
    toggle.checked = true;
  }

  // 4) Wire up the toggle
  toggle.addEventListener('change', () => {
    if (toggle.checked) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  });
});
