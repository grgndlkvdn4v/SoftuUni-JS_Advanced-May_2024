(function solve() {

  Array.prototype.last = function() {
    if (this.length <= 0) {
      throw new Error("empty arr");
    }
    let lastIndex = this.length - 1;
    return this[lastIndex]
  };

  Array.prototype.skip = function(index) {
    if (index < 0 || index > this.length-1) {
      throw new Error("index out of boundries");
    }
    return this.slice(index)
  };

  Array.prototype.take = function(index) {
    if (index < 0 || index > this.length-1) {
      throw new Error("index out of boundries");
    }
    return this.splice(0, index)
  };

  Array.prototype.sum = function() {
    return this.reduce((a, b) => a + b, 0)
  };

  Array.prototype.average = function() {
    if (this.length <= 0) {
      throw new Error("empty arr");
    }
    return this.sum() / this.length
  }

})();