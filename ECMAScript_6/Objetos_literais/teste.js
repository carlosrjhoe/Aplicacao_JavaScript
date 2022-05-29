var livro = new Livro('Entendendo ES6');
function Livro(titulo){
  this.titulo = titulo;
}

console.log(livro.titulo);

var livro = {
  titulo: 'Anjos e Demômios'
}
console.log(livro.titulo);

var outroLivro = livro;
livro.titulo = 'O codigo da Vinci';
console.log(outroLivro.titulo);
console.log(livro.titulo);