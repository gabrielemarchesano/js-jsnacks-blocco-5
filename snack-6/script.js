const zucchine = [
  { type: 'Napoletana', weight: 10, length: 4 },
  { type: 'Trombetta', weight: 13, length: 16 },
  { type: 'Napoletana', weight: 4, length: 23 },
  { type: 'Trombetta', weight: 11, length: 6 },
  { type: 'Napoletana', weight: 2, length: 17 },
  { type: 'Romana', weight: 5, length: 10 },
  { type: 'Romana', weight: 7, length: 9 },
  { type: 'Trombetta', weight: 3, length: 8 },
  { type: 'Calabrese', weight: 6, length: 27 },
  { type: 'Calabrese', weight: 14, length: 4 },
];

// A partire dall'array fornito, crea due array. Uno con le zucchine più lunghe di almeno 15cm. L'altro con le restanti.

// Ciclo for
console.log("Ciclo for ⤵");

const longest = [];
const remaining = [];

for (let i = 0; i < zucchine.length; i++) {
  const zucchina = zucchine[i];
  if(zucchina.length >= 15){
    longest.push(zucchina);
  }else{
    remaining.push(zucchina);
  }
}
console.log("Zucchine lunghe:", longest)
console.log("Zucchine corte:", remaining);

// Metodo forEach()
console.log("Metodo forEach() ⤵");

const zucchineLunghe = [];
const zucchineCorte = [];

zucchine.forEach((zucchina) => {
  if(zucchina.length >= 15){
    zucchineLunghe.push(zucchina);
  } else{
    zucchineCorte.push(zucchina);
  }
})
console.log("Zucchine lunghe:", zucchineLunghe)
console.log("Zucchine corte:", zucchineCorte);

// Metodo filter()
console.log("Metodo filter() ⤵");

const lunghe = zucchine.filter((zucchina) => zucchina.length >= 15);
const corte = zucchine.filter((zucchina) => zucchina.length < 15);

console.log("Zucchine lunghe:", lunghe)
console.log("Zucchine corte:", corte);

