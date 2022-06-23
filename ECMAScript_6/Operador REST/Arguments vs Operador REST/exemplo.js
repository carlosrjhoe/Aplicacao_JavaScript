function somar(...valores) {
  let soma = 0;
  const quantidade = valores.length;
  for(let i = 0; i < quantidade; i++) {
    soma += valores[i];
  }
  return soma
}

console.log(somar(1,2))
console.log(somar(1,2,3))
console.log(somar(1,2,3,4))