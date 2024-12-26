export function isSymmetric(arr) {
  if (!Array.isArray(arr)) {
    return false; // Non-arrays are non-symmetric
  }

  let reversed = arr.slice(0).reverse(); // Clone and reverse

  let equal = JSON.stringify(arr) == JSON.stringify(reversed);

  return equal;
}

// console.log(isSymmetric([1,2,3,2,1])); // true
// console.log(isSymmetric([1,3,2,2,1])); // false
// console.log(isSymmetric([1])); // true
// console.log(isSymmetric([1,1])); // true
// console.log(isSymmetric([1,2,1])); // true

console.log(isSymmetric('asd')); // false
console.log(isSymmetric(5)); // false
console.log(isSymmetric(undefined)); // false
console.log(isSymmetric(Infinity)); // false
console.log(isSymmetric(true)); // false