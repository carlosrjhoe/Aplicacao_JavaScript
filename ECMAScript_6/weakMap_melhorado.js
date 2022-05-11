var weakMap = new WeakMap();
function funcao(){};
var objeto = {};

// weakMap.set("string", 'Isso é uma string');
// weakMap.set(elemento2, 'sou o elemento 2');

console.log(funcao.set(funcao, "isso é uma função"));
console.log(objeto.set(objeto, "Isso é um objeto"));