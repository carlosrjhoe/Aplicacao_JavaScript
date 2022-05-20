const numeros = [1, 2, 3, 4, 5, 6];

const soma = (total, elemento) => total + elemento;
const total = numeros.reduce(soma);
console.log(`A soma dos numeros = ${total}`);

const media = (acumulador, elemento, i, array) => {
  if(i === array.length - 1) {
    return (acumulador + elemento) / array.length;
  } else {
    return acumulador + elemento;
  }
}

console.log(`A media da soma dos numeros = ${numeros.reduce(media)}`);