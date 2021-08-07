import menuItemTpl from './templates/templateMenuItems.hbs';
import menu from './menu.json';
import refs from './js/refs.js';
import Theme from './js/theme.js';

refs.themeSwitcher.addEventListener('change', onChange);
window.addEventListener('load',checkTheme);

function renderMarkup() {
    return refs.menu.insertAdjacentHTML('beforeend', menuItemTpl(menu))
}

renderMarkup();

refs.themeSwitcher.checked = false;

function onChange() {
    if (refs.themeSwitcher.checked) {
        refs.body.classList.remove('light-theme');
        refs.body.classList.add('dark-theme');
        localStorage.setItem('Theme', JSON.stringify(Theme.DARK));
    } else {
        refs.body.classList.remove('dark-theme');
        refs.body.classList.add('light-theme');
        localStorage.setItem('Theme', JSON.stringify(Theme.LIGHT));
    }
}

function checkTheme() {
    const localStorageTheme = localStorage.getItem('Theme');
    console.log(localStorageTheme)
    if (localStorageTheme !== null && localStorageTheme === JSON.stringify(Theme.DARK)) {
        refs.body.classList.add(localStorageTheme);
        refs.themeSwitcher.checked = true;
    }
}
