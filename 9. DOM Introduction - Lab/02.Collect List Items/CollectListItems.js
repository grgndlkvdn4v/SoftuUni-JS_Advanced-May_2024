function extractText() {
  let liElement = document.querySelectorAll("li");
  // console.log(liElement);

  const liArr = Array.from(liElement);
  // console.log(liArr);

  const res = liArr.map((x) => x.textContent);
  // console.log(res);

  let textArea = document.getElementById("result");
  const output = res.join("\n");
  textArea.value = output;
}
