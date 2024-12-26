function playingCards(face, suit) {
  const facesArr = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
  const suitsObj = {
    S: '\u2660',  // ♠
    H: '\u2665',  // ♥
    D: '\u2666',  // ♦
    C: '\u2663'   // ♣
  }

  let output;

  if (!facesArr.includes(face)) {
    throw new Error ('Invalid face')
  }
  else if (!suitsObj.hasOwnProperty(suit)) {
    throw new Error ('Invalid suit')
  } 
  else {
    output = {
      face, 
      suit: suitsObj[suit],
      toString: () => `${face}${suitsObj[suit]}`
    }

    return output
  }

}

let hui = playingCards('10', 'S');
console.log(hui.face, hui.suit);

console.log( playingCards('10', 'S') );
// console.log( playingCards('11', 'l') );
// console.log( playingCards('8', 's') );