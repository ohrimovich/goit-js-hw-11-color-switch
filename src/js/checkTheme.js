import refs from '../js/refs.js'

export function checkTheme() {
    const localStorageTheme = localStorage.getItem('Theme');
    if (localStorageTheme) {
        refs.body.classList.add(localStorageTheme);
        localStorageTheme === 'dark-theme' ? refs.themeSwitcher.checked = true : refs.themeSwitcher.checked = false;
    }
}