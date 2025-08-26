class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
      if (callback) callback();
    }, 1000);
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return Math.floor(this.currentTime % 60);
  }

  computeTwoDigitNumber(value) {
    let number = String(value);

    if (number.length === 1) {
      return number.padStart(2, '0');
    }
    return number
  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime = 0
  }

  split() {
    let mins = this.computeTwoDigitNumber(this.getMinutes())
    let secs = this.computeTwoDigitNumber(this.getSeconds())
    return `${mins}:${secs}`
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
