var alunos = [
  {nome: "Carlos", idade: 36},
  {nome: "Mayara", idade: 37},
  {nome: "Neto", idade: 6},
  {nome: "Luna", idade: 4}
];

// Primeiro,	fazemos	da	forma	convencional:
var alunosMaiorDeIdade = true;
for(var i = 0; i < alunos.length; i++){
  if(alunos[i].idade < 18){
    alunosMaiorDeIdade = false;
  };
};
console.log(alunosMaiorDeIdade);

// Com o EVERY:
var alunosMaiorDeIdade = alunos.every(function(aluno){
  return aluno.idade > 18;
});
console.log(alunosMaiorDeIdade);
