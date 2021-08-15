import { randomIntegerFromInterval } from './randomNumberFunction.js';
import refs from './refs.js';

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

let intervalId;

export function startBackgroundColorChanging() {
    intervalId = setInterval(() => {
        let generatedNumber = randomIntegerFromInterval(0, colors.length);
        refs.body.style.backgroundColor = colors[generatedNumber];
    } ,1000
    )
    refs.start.disabled = true;
}

export function stopBackgroundColorChanging() {
    clearInterval(intervalId);
    refs.start.disabled = false;
}