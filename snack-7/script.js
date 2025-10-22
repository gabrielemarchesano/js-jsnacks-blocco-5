const students = [
  {
    id: 1,
    name: 'Marco Lanci',
    age: 32,
    class: '3C'
  },
  {
    id: 2,
    name: 'Mario Banfi',
    age: 34,
    class: '4A'
  },
  {
    id: 3,
    name: 'Luigi Banzi',
    age: 33,
    class: '5B'
  },
];

// Recupera i dati dello studente con id 2

// Ciclo for
console.log("Ciclo for ⤵");

for (let i = 0; i < students.length; i++) {
  const student = students[i];
  if(student.id === 2){
    console.log(student);    
  }
}

// Metodo forEach()
console.log("Metodo forEach() ⤵");

students.forEach((student) => {
  if(student.id === 2){
    console.log(student);    
  }
})

// Metodo find()
console.log("Metodo find() ⤵");

const student = students.find((student) => student.id === 2);
console.log(student);

// Risultato: { id: 2, name: 'Mario Banfi', age: 34, class: '4A' }