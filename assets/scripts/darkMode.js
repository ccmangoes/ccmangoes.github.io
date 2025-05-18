// assets/scripts/darkMode.js
document.addEventListener('DOMContentLoaded', () => {
  // 1) Create the wrapper
  const wrapper = document.createElement('div');
  wrapper.className = 'd2 lightDarkToggle';

  // 2) Inject the checkbox + label + icons
  wrapper.innerHTML = `
    <input type="checkbox" class="d2 checkbox" id="theme-checkbox">
    <label for="theme-checkbox" class="d2 checkbox-label">
      <i class="d2 fas fa-moon"></i>
      <i class="d2 fas fa-sun"></i>
      <span class="d2 ball"></span>
    </label>
  `;

  document.body.appendChild(wrapper);

  // 3) Grab the checkbox
  const checkbox = document.getElementById('theme-checkbox');

  // 4) Initialize state from localStorage
  if (localStorage.getItem('theme') === 'dark') {
    document.documentElement.classList.add('dark');
    checkbox.checked = true;
  }

  // 5) Wire up toggle
  checkbox.addEventListener('change', () => {
    const isDark = checkbox.checked;
    document.documentElement.classList.toggle('dark', isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });
});
