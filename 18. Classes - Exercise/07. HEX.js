class Hex {
  constructor(value) {
    this.value = value
  }

  valueOf() {
    return this.value
  }

  toString() {
    let hexString = this.value.toString(16);
    return ('0x' + hexString)//.toUpperCase()
  }

  plus(input) {
    return new Hex(Number(this.value) + Number(input.value))
  }
}




let FF = new Hex(255);
console.log(FF.toString());
FF.valueOf() + 1 == 256;
let a = new Hex(10);
let b = new Hex(5);
// console.log(a, b);
console.log(a.plus(b).toString());

console.log(a.plus(b).toString()==='0xF');
// console.log(FF.parse('AAA'));