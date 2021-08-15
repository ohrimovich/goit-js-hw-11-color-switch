import refs from './js/refs.js';
import { startBackgroundColorChanging, stopBackgroundColorChanging} from './js/colorChanger.js';



refs.start.addEventListener('click', startBackgroundColorChanging);
refs.stop.addEventListener('click', stopBackgroundColorChanging);






