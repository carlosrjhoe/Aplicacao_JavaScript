// 
var map = new Map();
function funcao(){};
var objeto = {};
var string = [];
var tupla = (12);

// Definir tipos de valores de maps com o metodo "set".
map.set(string, "sou uma string");
map.set(objeto, "sou um objeto");
map.set(funcao, "sou uma função");
map.set(tupla, "sou uma tupla");

// Para recuperar valores do maps das chaves com o metodo "get".
console.log(map.get(string));
console.log(map.get(objeto));
console.log(map.get(funcao));
console.log(map.get(tupla));

// Quantos itens um	mapa tem, usamos a propriedade size.	
console.log(`Tamanho : ${map.size}`);

// Saber se já existe uma chave dentro de maps.
console.log(map.has(objeto));
console.log(map.has("abc"));