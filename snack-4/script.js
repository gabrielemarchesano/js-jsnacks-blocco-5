const posts = [
  { author: 'Marco', date: '12/3/2021', content: 'lorem ipsum...' },
  { author: 'Luca', date: '30/6/2021', content: 'lorem ipsum...' },
  { author: 'Fabrizio', date: '12/9/2020', content: 'lorem ipsum...' },
  { author: 'Enrico', date: '09/12/2021', content: 'lorem ipsum...' },
]

// Crea un nuovo array coi nomi di tutti gli autori

// Ciclo for
console.log("Ciclo for ⤵");

const authorNames = [];

for (let i = 0; i < posts.length; i++) {
  const post = posts[i];
  authorNames.push(post.author);
}
console.log(authorNames);

// Metodo forEach()
console.log("Metodo forEach() ⤵");

const names = [];

posts.forEach((post) => names.push(post.author))
console.log(names);

// Metodo map()
console.log("Metodo map() ⤵");

const authors = posts.map((post) => post.author) 
console.log(authors);

// Risultato: ['Marco', 'Luca', 'Fabrizio', 'Enrico']