import refs from '../js/refs.js'
import menu from '../menu.json';
import menuItemTpl from '../templates/templateMenuItems.hbs';

export function renderMarkup() {
    return refs.menu.insertAdjacentHTML('beforeend', menuItemTpl(menu))
}
