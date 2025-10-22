const nums = [2, 8, 4, 7, 12, 87];

// Crea un array a partire dall'array nums, che abbia solo i numeri pari

// Ciclo for
console.log("Ciclo for ⤵");

const even = [];

for (let i = 0; i < nums.length; i++) {
  const number = nums[i];
  if(number % 2 === 0){
    even.push(number);
  }
}
console.log(even);

// Metodo forEach()
console.log("Metodo forEach() ⤵");

const evenNumbs = [];

nums.forEach((number) => {
  if(number % 2 === 0){
    evenNumbs.push(number)
  }
})
console.log(evenNumbs);

// Metodo filter()
console.log("Metodo filter() ⤵");

const evenNumbers = nums.filter((number) => number % 2 === 0);
console.log(evenNumbers);

// Risultato: [2, 8, 4, 12]