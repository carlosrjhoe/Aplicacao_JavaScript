// function somar (...valores) {
//   return valores.reduce((soma, valor) => {
//     return soma + valor
//   }, 0);
// }

// console.log(somar(1,2))
// console.log(somar(3,5))

// const numeros = [1,2,3,4,5];

// const soma = numeros.reduce((acumulador, item) => {
//   return acumulador + item
// }, 0);
// console.log(soma)

const jogos = [
  { nome: 'Dark of Souls III', preco: 95.00},
  { nome: 'Shadow of The Tomb Raider', preco: 101.01},
  { nome: 'Sekiro: Shadows Die Twice', preco: 195.00},
  { nome: 'Resident Evil 2', preco: 115.00},
  { nome: 'Death Stranding', preco: 145.00},
];


const jogosSelecionados = jogos.reduce((acumulador, {nome}) => {
   return `${acumulador} Nome: ${nome} \n`
}, '')

console.log(jogosSelecionados);