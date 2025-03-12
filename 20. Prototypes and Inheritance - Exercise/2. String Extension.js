(function solve() {

  String.prototype.ensureStart = function (str) {
    if (this.startsWith(str)) {
      return this.toString()
    }
    return (str + this)
  };

  String.prototype.ensureEnd = function (str) {
    if (this.endsWith(str)) {
      return this.toString()
    }
    return (this + str)
  };

  String.prototype.isEmpty = function () {
    if ( this.toString() ) {
      return false
    } else {
      return true
    }
  };

  String.prototype.truncate = function (n) {
    return turnicate(this.toString(), n)
  };

  String.format = function (string, ...params) {
    let newStr = string;
    for (let i = 0; i < params.length; i++) {
      const param = params[i];
      newStr = newStr.replace(`{${i}}`, param)
    }

    return newStr
  }


  function turnicate(input, n) {
    
    // If n is less than 4, return n amount of periods.
    if (n < 4) { 
      return ".".repeat(n)
    }
    
    // If a string is less than n characters long, return the same string
    if (input.length < n) {
      return input
    }

    // If no space occurs anywhere in the string, return n - 3 characters and an ellipsi
    if (!input.includes(' ')) { 
      return input.slice(0, -3) + '...'
    } 
    // If it is longer, split the string where a space occurs and append an ellipsis to it so that the total length is less than or equal to n
    else {
      let arr = input.split(' ');
      let newArr = [arr.shift(0)];

      for (const word of arr) {
        const count =(newArr.join(' ') +  '...').length + word.length
        const condition = count <= n
        if (condition) {  
          newArr.push(word)
        } else {
          break
        }
      }

      if (newArr.length === 1) { 
        return newArr[0].slice(0, n-3) + '...'
      } 

      return newArr.join(' ') + '...'
    }
  }
})();


let str = 'my string';

str = str.ensureStart('my');

str = str.ensureStart('hello ');

str = str.truncate(16);

str = str.truncate(14);

str = str.truncate(8);

str = str.truncate(4);

str = str.truncate(2);

str = String.format('The {0} {1} fox',

'quick', 'brown');

str = String.format('jumps {0} {1}',

'dog');