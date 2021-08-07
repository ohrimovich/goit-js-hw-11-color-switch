import refs from '../js/refs.js'

export function onChange() {
    if (refs.themeSwitcher.checked) {
        refs.body.classList.remove('light-theme');
        refs.body.classList.add('dark-theme');
        localStorage.setItem('Theme', 'dark-theme');
    } else {
        refs.body.classList.remove('dark-theme');
        refs.body.classList.add('light-theme');
        localStorage.setItem('Theme', 'light-theme');
        refs.themeSwitcher.checked = false;
    }
}