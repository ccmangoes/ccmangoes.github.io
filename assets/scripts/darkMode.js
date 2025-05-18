// dark-mode.js
document.addEventListener('DOMContentLoaded', () => {
  // 1) Inject the CSS
  const style = document.createElement('style');
  style.textContent = `/* paste the dark-mode CSS you already have here */`;
  document.head.appendChild(style);

  // 2) Inject the toggle HTML
  const toggle = document.createElement('div');
  toggle.id = 'dark-mode-toggle';
  toggle.innerHTML = `
    <label class="switch">
      <input type="checkbox" id="darkModeCheckbox">
      <span class="slider"></span>
    </label>
    Dark Mode
  `;
  document.body.appendChild(toggle);

  // 3) Wire up the JS (your existing listener)
  const checkbox = document.querySelector('#darkModeCheckbox');
  // load saved preference
  if (localStorage.getItem('dark') === 'on') {
    document.body.classList.add('dark');
    checkbox.checked = true;
  }
  checkbox.addEventListener('change', () => {
    document.body.classList.toggle('dark', checkbox.checked);
    localStorage.setItem('dark', checkbox.checked ? 'on' : 'off');
  });
});
