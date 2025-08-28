class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
  // si ya hay un intervalo activo, no arrancar otro
  if (this.intervalId) return;

  this.intervalId = setInterval(() => {
    this.currentTime += 1;
    if (callback) callback(); // ejecutar el callback si existe
  }, 10);
}

  getMinutes() {
    return Math.floor((this.currentTime / 100) / 60);
  }

  getSeconds() {
    return Math.floor(this.currentTime / 100) % 60;
  }

  getMilliseconds() {
  return this.currentTime % 100;
}


  computeTwoDigitNumber(value) {
    let number = String(value);

    if (number.length === 1) {
      return number.padStart(2, '0');
    }
    return number
  }

  stop() {
  clearInterval(this.intervalId); // parar el intervalo
  this.intervalId = null;         // reiniciar la referencia
}

  reset() {
    this.currentTime = 0
  }

  split() {
    let mins = this.computeTwoDigitNumber(this.getMinutes())
    let secs = this.computeTwoDigitNumber(this.getSeconds())
    let mills = this.computeTwoDigitNumber(this.getMilliseconds())
    return `${mins}:${secs}.${mills}`
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
