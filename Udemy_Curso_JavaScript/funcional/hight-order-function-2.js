function PrecoFinal(taxa){
  return function(preco){
    return preco * (1 + taxa);
  }
}

console.log(PrecoFinal(0.0875)(25.1));
console.log(PrecoFinal(0.0875, 21.7));
console.log(PrecoFinal(0.0875, 107.9));