const checkbox = document.getElementById('darkModeCheckbox');
// On load, check localStorage
if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark');
    checkbox.checked = true;
}

checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
        document.body.classList.add('dark');
        localStorage.setItem('darkMode', 'enabled');
    } else {
        document.body.classList.remove('dark');
        localStorage.setItem('darkMode', 'disabled');
    }
});