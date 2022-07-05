function somar (...valores) {
  return valores.reduce((soma, valor) => {
    return soma + valor
  }, 0);
}

console.log(somar(1,2))
console.log(somar(3,5))