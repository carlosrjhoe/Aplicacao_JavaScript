let numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
numeros[numeros.length] = 10;
console.log(numeros);

// numeros.push(11);
// console.log(numeros);

// Array.prototype.insertFirstPosition = function(value){
//   for(let i = this.length; i >= 0; i--){
//     this[i] = this[i - 1];
//   }
//   this[0] = this.value;
// }

// numeros.insertFirstPosition(-1);
// console.log(numeros);

// numeros.unshift(-2);
// console.log(numeros);

numeros.pop(4);
numeros.shift(1);
numeros.splice(3, 2);
console.log(numeros);