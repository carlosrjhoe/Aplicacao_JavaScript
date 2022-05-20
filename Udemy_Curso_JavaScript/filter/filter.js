// const numeros = [1, 2, 3, 4, 5, 6, 7];

// const maioarQueZero = elemento => elemento > 0;
// const numerosPares = elemento => elemento % 2 == 0;
// const numerosImpares = elemento => elemento % 2 != 0;

// console.log(numeros.filter(maioarQueZero));
// console.log(numeros.filter(numerosPares));
// console.log(numeros.filter(numerosImpares));

const estudantes = [
  { nome: 'Carlos', nota: 6.9},
  { nome: 'Mayara', nota: 7.9},
  { nome: 'Neto', nota: 8.9},
  { nome: 'Luna', nota: 9.8}
];

const maiorQueSete = elemento => elemento.nota >= 7;
const menorQueSete = elemento => elemento.nota <= 7;
console.log(estudantes.filter(maiorQueSete));
console.log(estudantes.filter(menorQueSete));
