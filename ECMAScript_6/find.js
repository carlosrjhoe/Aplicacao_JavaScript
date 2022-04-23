var alunos = [
  "Carlos",
  "Mayara",
  "Neto",
  "Luna"
];

var aluno = alunos.find(function(aluno){
  return aluno === "Neto";
});

console.log(`O aluno ${aluno} foi encontrado`);