const numbers = [2, 8, 4, 7, 2, 87];

// Crea un nuovo array in cui tutti i numeri siano incrementati di 1

// Ciclo for
console.log("Ciclo for ⤵");
const incrementedNumbers = [];

for (let i = 0; i < numbers.length; i++) {
  const number = numbers[i];
  incrementedNumbers.push(number + 1);
}
console.log(incrementedNumbers);

// Metodo forEach()
console.log("Metodo forEach() ⤵");

const incrementedNumbs = [];

numbers.forEach((number) => {
  incrementedNumbs.push(++number);
})
console.log(incrementedNumbs);

// Metodo map()
console.log("Metodo map() ⤵");

const increasedNumbers = numbers.map((number) => ++number);
console.log(increasedNumbers);
// Risultato: [3, 9, 5, 8, 3, 88]