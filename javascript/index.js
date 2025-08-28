import { Chronometer } from './chronometer.js';

const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
  // ... your code goes here
}

function printMinutes() {
  // ... your code goes here
}

function printSeconds() {
  // ... your code goes here
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  // ... your code goes here
}

function setSplitBtn() {
  // ... your code goes here
}

function setStartBtn() {
  // ... your code goes here
}

function setResetBtn() {
  // ... your code goes here
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.classList.contains('start')) {
    btnLeftElement.innerText = 'STOP';
    btnLeftElement.classList.replace('start', 'stop');

    btnRightElement.innerText = 'SPLIT';
    btnRightElement.classList.replace('reset', 'split');

    chronometer.start(() => {
      let minutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes());
      let seconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds());
      let milliseconds = chronometer.computeTwoDigitNumber(
        chronometer.getMilliseconds()
      );

      minDecElement.innerHTML = minutes[0];
      minUniElement.innerHTML = minutes[1];
      secDecElement.innerHTML = seconds[0];
      secUniElement.innerHTML = seconds[1];
      milDecElement.textContent = milliseconds[0];
      milUniElement.textContent = milliseconds[1];
    });
  } else {
    chronometer.stop();
    btnLeftElement.innerText = 'START';
    btnLeftElement.classList.replace('stop', 'start');

    btnRightElement.innerText = 'RESET';
    btnRightElement.classList.replace('split', 'reset');
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  const li = document.createElement('li');
  li.className = 'list-item';
  li.textContent = chronometer.split();
  splitsElement.appendChild(li);

  if (btnRightElement.classList.contains('reset')) {
    chronometer.reset();
    minDecElement.textContent = '0';
    minUniElement.textContent = '0';
    secDecElement.textContent = '0';
    secUniElement.textContent = '0';
    milDecElement.textContent = '0';
    milUniElement.textContent = '0';

    splitsElement.innerHTML = '';
  }
});
