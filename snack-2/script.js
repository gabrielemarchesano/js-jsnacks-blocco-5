const people = [
  { name: 'Paolo', age: 35 },
  { name: 'Giulia', age: 24 },
  { name: 'Marco', age: 67 }
];

// Stampa in console tutti i nomi

// Ciclo for
console.log("Ciclo for ⤵");
for (let i = 0; i < people.length; i++) {
  const person = people[i];
  console.log(person.name);  
}

// Metodo forEach()
console.log("Metodo forEach() ⤵");
people.forEach((person) => console.log(person.name))

// Risultato: 'Paolo', 'Giulia', 'Marco'