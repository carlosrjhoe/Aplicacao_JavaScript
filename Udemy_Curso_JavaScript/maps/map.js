// const numeros = [1, 2, 3, 4, 5, 6, 7];

// const numeros1 = numeros.map(function(elemento){
//   return elemento * 2
// });

// const numeros2 = numeros.map((elemento) => {
//   return elemento * 3
// });

// const numeros3 = numeros.map( elemento => elemento * 4);

// console.log(numeros1, numeros2, numeros3);

const estudantes = [
  { nome: 'Carlos', nota: 6.9},
  { nome: 'Mayara', nota: 7.9},
  { nome: 'Neto', nota: 8.9},
  { nome: 'Luna', nota: 9.8}
];

const getNotas = elemento => elemento.nota
const getNomes = elemento => elemento.nome
console.log(estudantes.map(getNotas).map(Math.floor));
console.log(estudantes.map(getNomes));