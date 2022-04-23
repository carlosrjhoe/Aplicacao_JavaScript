function* iteraveis(){
  yield "Olá 1";
  yield "Olá 2";
  yield "Olá 3";
  yield "Olá 4";
  console.log("Primeiro console");
  console.log("Segundo console");
  console.log("Terceiro console");
  console.log("Quarto console");
}
let iterador = iteraveis();

console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());