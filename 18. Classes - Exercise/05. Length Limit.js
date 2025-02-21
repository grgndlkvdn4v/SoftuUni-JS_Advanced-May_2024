class Stringer {
  constructor(string, length) {
    this.innerString = string
    this.innerLength = length
    this.initialState = string
  }

  increase(length) {
    this.innerLength += length
  }

  decrease(length) {
    this.innerLength -= length
    if (this.innerLength < 0) {
      this.innerLength = 0
    }
  }

  toString() {

    let newString = '';
    for (let i = 0; i < this.innerLength; i++) {
      newString += this.innerString[i];
      if (newString === this.initialState) {
        return newString
      }
    }

    return newString + '...'
  }

}

let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4);
console.log(test.toString()); // Test