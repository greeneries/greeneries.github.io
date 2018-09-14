
const cards = [];
for(let suit of ['H', 'C', 'D', 'S'])  // hearts, clubs, diamonds, spades
 for(let value=1; value<=13; value++)
  cards.push({ suit, value });

function cardToString(c) {
  const suits = { 'H': '\u2665', 'C': '\u2663', 'D': '\u2666', 'S': '\u2660' };
  const values = { 1: 'A', 11: 'J', 12: 'Q', 13: 'K' };
  for(let i=2; i<=10; i++) values[i] = i;
    return values[c.value] + suits[c.suit];
 }

 //console.log(cards);

 // get all cards with value 2:
 console.log(cards.filter(c => c.value === 2));
 console.log(cards.filter(c => c.value === 2).map(cardToString));   // [ "2 ♥ ", "2 ♣ ", "2 ♦ ", "2 ♠ " ]
 // get all face cards that are hearts

 console.log(cards.filter(c => c.value > 10 && c.suit === 'H').map(cardToString));   // [ "J ♥ ", "Q ♥ ", "K ♥ " ]
