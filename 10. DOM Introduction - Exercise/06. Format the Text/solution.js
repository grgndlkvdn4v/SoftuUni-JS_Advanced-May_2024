function solve() {

  let textAreaEl = document.getElementById('input');
  let resultEl = document.getElementById('output');


  let textAreaArr = textAreaEl.value.split('.').filter(el => el !== "");

  let res = [];
  for (let i = 0; i < textAreaArr.length; i++) {
    const sentance = textAreaArr[i];
    res.push(sentance);

    if (res.length % 3 === 0 || i === textAreaArr.length - 1) {
      let p = document.createElement('p');
      p.textContent = res.join('.') + '.';
      resultEl.appendChild(p)
      res = [];
    }

  }
}