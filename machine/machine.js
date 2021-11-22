/* "♠", "♥", "♦", "♣" */
let symbol = ["♠", "♥", "♦", "♣", "1", "2", "3", "4"]
const { randomInt } = require('crypto')
let symb = []
for (let i = 0; i < 100; i++) {
    let pick = symbol[randomInt(0, symbol.length)];
    symb.push(pick)
}
const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);
console.log("♠ : " + countOccurrences(symb, "♠"))
console.log("♥ : " + countOccurrences(symb, "♥"))
console.log("♦ : " + countOccurrences(symb, "♦"))
console.log("♣ : " + countOccurrences(symb, "♣"))
console.log("1 : " + countOccurrences(symb, "1"))
console.log("2 : " + countOccurrences(symb, "2"))
console.log("3 : " + countOccurrences(symb, "3"))
console.log("4 : " + countOccurrences(symb, "4"))