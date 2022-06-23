function somar() {
  let soma = 0;
  const quantidade = arguments.length;
  for(let i = 0; i < quantidade; i++) {
    soma += arguments[i]
  }
  return soma
}

console.log(somar(1,2))
console.log(somar(1,2,3))
console.log(somar(1,2,3,4))