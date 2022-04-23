var alunos = [
  {nome: 'Carlos', idade: 36},
  {nome: 'Mayara', idade: 37},
  {nome: 'Neto', idade: 6},
  {nome: 'Luna', idade: 4}
];

var maiorDeIdades = alunos.filter(function(aluno){
  return aluno.idade >= 18;
})

var menorDeIdades = alunos.filter(function(aluno){
  return aluno.idade <= 18;
});

console.log(maiorDeIdades);
console.log(menorDeIdades);