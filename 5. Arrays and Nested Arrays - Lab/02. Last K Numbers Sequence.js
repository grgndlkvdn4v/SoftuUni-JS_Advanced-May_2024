function lastKnumberSequence(n, k) {
  let ressArr = [1];

  for (let i = 1; i < n; i++) {
    let startIndex;
    i - k > 0 ? (startIndex = i - k) : (startIndex = 0);

    const sumArr = ressArr.slice(startIndex, i);

    let sum = 0;
    for (const currNum of sumArr) {
      if (currNum) {
        sum += currNum;
      }
    }

    ressArr.push(sum);
  }

  console.log(ressArr);
}
lastKnumberSequence(8, 2);
lastKnumberSequence(6, 3);
