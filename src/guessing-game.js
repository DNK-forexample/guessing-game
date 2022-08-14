class GuessingGame {
    constructor() {}
  
    setRange(min, max) {
      this.low = min;
      this.high = max;
    }
  
    guess() {
      this.mid = Math.ceil((this.low + this.high) / 2);
      return this.mid;
    }
  
    lower() {
      this.high = this.mid;
    }
  
    greater() {
      this.low = this.mid;
    }
  }
  
  module.exports = GuessingGame;