const estudantes = [
  { nome: 'Carlos', nota: 6.9},
  { nome: 'Mayara', nota: 7.9},
  { nome: 'Neto', nota: 8.9},
  { nome: 'Luna', nota: 9.8}
];

const bonsEstudantes = estudante => estudante.nota >= 7;
const getNota = elemento => elemento.nota;
const media = (acumulador, elemento, i, array) => {
  if(i === array.length -1) {
    return (acumulador + elemento) / array.length;
  } else {
    return acumulador + elemento;
  }
}

console.log(estudantes.filter(bonsEstudantes).map(getNota).reduce(media));