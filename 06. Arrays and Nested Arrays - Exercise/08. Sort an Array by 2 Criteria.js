function sortAnArrayByTwoCriteria(inputArr) {
  const output = inputArr
    .sort( (a, b) => a.length - b.length || a.localeCompare(b) )
    //   if (a.length !== b.length) {
    //     return a.length - b.length;
    //   } else {
    //     return a.localeCompare(b);
    .forEach((x) => console.log(x));
}

sortAnArrayByTwoCriteria(["Isacc", "Theodor", "Jack", "Harrison", "George"]);
// sortAnArrayByTwoCriteria(["test", "Deny", "omen", "Default"]);