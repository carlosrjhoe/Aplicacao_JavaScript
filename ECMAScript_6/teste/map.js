var numeros = [1, 2, 3, 4, 5];
var dobro = [];
// Primeiro,	fazemos	da	forma	convencional:
for(var i = 1; i < numeros.length + 1; i++){
  dobro.push(i * 2)
};

// utilizando	o MAP:
var dobro = numeros.map(function(numero){
  return numero * 2;
});

console.log(numeros);
console.log(dobro);