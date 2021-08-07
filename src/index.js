import refs from './js/refs.js';
import { renderMarkup } from './js/renderMarkup.js';
import { onChange } from './js/onChange.js';
import { checkTheme } from './js/checkTheme.js';

refs.themeSwitcher.addEventListener('change', onChange);

checkTheme();
renderMarkup();






