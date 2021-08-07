import menuItemTpl from './templates/templateMenuItems.hbs';
import menu from './menu.json';
import refs from './js/refs.js';

function renderMarkup() {
    return refs.menu.insertAdjacentHTML('beforeend', menuItemTpl(menu))
}

renderMarkup();
