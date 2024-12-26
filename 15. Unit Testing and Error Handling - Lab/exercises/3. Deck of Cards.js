function printDeckOfCards(cards) {

  function createCard(face, suit) {
    const facesArr = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const suitsObj = {
      S: '\u2660', // ♠
      H: '\u2665', // ♥
      D: '\u2666', // ♦
      C: '\u2663' // ♣
    }

    let output;

    if (!facesArr.includes(face)) {
      output = 'Error'
      // throw new Error('Invalid face')
    } else if (!suitsObj.hasOwnProperty(suit)) {
      output = 'Error'
      // throw new Error('Invalid suit')
    } else {
      output = {
        face,
        suit: suitsObj[suit],
        toString: () => `${face}${suitsObj[suit]}`
      }

      return output
    }


  }
  
  let output = '';

  for (const card of cards) {
    const face = card.slice(0, -1)
    const suit = card.substr(-1)

    let currentCard = createCard(face, suit)
    if (!currentCard) {
      output = `Invalid card: ${face}${suit}`
      break
    }
    
    output += `${currentCard.face}${currentCard.suit} `
  }

  console.log(output.trim());
}

  printDeckOfCards(['AS', '10D', 'KH', '2C'])
  printDeckOfCards(['5S', '3D', 'QD', '1C'])
  // printDeckOfCards(['QD', '1C'])