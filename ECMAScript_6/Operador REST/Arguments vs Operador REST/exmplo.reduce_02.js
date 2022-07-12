// function somar (...valores) {
//   let soma = 0;
//   const qtd = valores.length;
//   for(let i =0; i < qtd; i++) {
//     soma += valores[i];
//   }
//   return soma
// }

// console.log(`A soma é = ${somar(1, 2, 3, 4, 5, 2)}`)
// console.log(`A soma é = ${somar(5, 10)}`)
// console.log(`A soma é = ${somar(3, 8)}`)

// 2º Forma de trabalhar com ARGUMENTS	X	OPERADOR	REST

function somar(...valores) {
  return valores.reduce((soma, valor) => {
    return soma + valor;
  }, 0)
}

function mult(...valores) {
  return valores.reduce((produto, valor) =>{
    return produto * valor
  }, 1)
}

console.log(`A soma = ${somar(1, 2)}`)
console.log(`A soma = ${mult(3, 5)}`)