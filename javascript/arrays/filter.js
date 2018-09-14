const cards = [];
for(let suit of ['H', 'C', 'D', 'S'])  // hearts, clubs, diamonds, spades
 for(let value=1; value<=13; value++)
  cards.push({ suit, value });

//console.log(cards);
// get all cards with value 2:
//cards.filter(c => c.value === 2);   // [
console.log(cards.filter(c => c.value === 2));
console.log('----------------------------------------');
//    { suit: 'H', value: 2 },
//    { suit: 'C', value: 2 },
//    { suit: 'D', value: 2 },
//    { suit: 'S', value: 2 }                                    // ]
// (for the following, we will just list length, for compactness)
// get all diamonds:
console.log(cards.filter(c => c.suit === 'D'));                  // length: 13
console.log('----------------------------------------');

// get all face cards
console.log(cards.filter(c => c.value > 10));                    // length: 12
console.log('----------------------------------------');
// get all face cards that are hearts
console.log(cards.filter(c => c.value > 10 && c.suit === 'H'));  // length: 3
