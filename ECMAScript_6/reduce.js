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

var alunos = [
  {nome: "Carlos", idade: 36},
  {nome: "Mayara", idade: 37},
  {nome: "Neto", idade: 6},
  {nome: "Luna", idade: 4}
];

// Lista dos nomes
var nomes = alunos.reduce(function(listaNomes, aluno){
  listaNomes.push(aluno.nome);
  return listaNomes;
}, []);
console.log(nomes);

// Lista das idades
var idades = alunos.reduce(function(listaIdades, aluno){
  listaIdades.push(aluno.idade);
  return listaIdades;
}, []);
console.log(idades);

// Soma das idades
soma = idades.reduce(function(soma, idade){
  return soma + idade;
});
console.log(soma);