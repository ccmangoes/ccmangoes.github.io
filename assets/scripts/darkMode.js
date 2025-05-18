document.addEventListener('DOMContentLoaded', () => {
  // Create the wrapper
  const wrapper = document.createElement('div');
  wrapper.className = 'd2 lightDarkToggle';

  // Build the checkbox + label with FontAwesome <i> tags
  wrapper.innerHTML = `
    <input type="checkbox" class="d2 checkbox" id="theme-checkbox">
    <label for="theme-checkbox" class="d2 checkbox-label">
      <i class="d2 fa-moon"></i>
      <i class="d2 fa-sun"></i>
      <span class="d2 ball"></span>
    </label>
  `;

  document.body.appendChild(wrapper);

  // Cache elements
  const checkbox = document.getElementById('theme-checkbox');

  // Initialize from localStorage
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark');
    checkbox.checked = true;
  }

  // Wire the toggle
  checkbox.addEventListener('change', () => {
    document.body.classList.toggle('dark');
    localStorage.setItem(
      'theme',
      document.body.classList.contains('dark') ? 'dark' : 'light'
    );
  });
});
