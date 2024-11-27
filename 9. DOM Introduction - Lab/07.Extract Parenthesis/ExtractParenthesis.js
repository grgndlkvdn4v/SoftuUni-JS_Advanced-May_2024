function extract(content) {

  let textEl = document.getElementById('content');
  let text = textEl.textContent;

  let pattern = /\(([^)]+)\)/g ;
  let matches = text.match(pattern);

  let matchesArr = matches.map( x => x.replaceAll(/[()]/g,'') );

  let output = matchesArr.join('; ');

  // console.log(output);
  return output
}