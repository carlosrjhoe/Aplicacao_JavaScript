// Primeiro, fazemos	da	forma	convencional:
var numeros = [2, 4, 6, 8, 10];
var soma = 0;
for(var i = 0; i < numeros.length; i++){
  soma += numeros[i];
};
console.log(soma);

// utilizando	o REDUCE:
soma = numeros.reduce(function(soma, numero){
  return soma + numero;
});
console.log(soma);