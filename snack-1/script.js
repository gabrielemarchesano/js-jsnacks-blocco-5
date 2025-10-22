const names = ['Edoardo', 'Simone', 'Francesco'];

// Stampa in console tutti i nomi
// Ciclo for
console.log("Ciclo for ⤵");  
for (let i = 0; i < names.length; i++) {
  const name = names[i];
  console.log(name);  
}

// Metodo forEach()
console.log("Metodo forEach() ⤵");
names.forEach((name) => console.log(name))

// Risultato: 'Edoardo', 'Simone', 'Francesco'