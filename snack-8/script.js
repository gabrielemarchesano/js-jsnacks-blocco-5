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

// Recupera la classe dello studente 'Marco Lanci'

// Ciclo for
console.log("Ciclo for ⤵");

for (let i = 0; i < students.length; i++) {
  const student = students[i];
  if(student.name === "Marco Lanci"){
    console.log(student.class);    
  }
}

// Metodo forEach()
console.log("Metodo forEach() ⤵");

students.forEach((student) => {
  if(student.name === "Marco Lanci"){
    console.log(student.class);    
  }
})

// Metodo find()
console.log("Metodo find() ⤵");

const studentClass = students.find((student) => student.name === "Marco Lanci");
console.log(studentClass.class);

// Risultato: '3C'