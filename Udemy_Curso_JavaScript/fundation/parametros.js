function login(a, b, c){
  console.log(a, b, c);
}

login(1, 2, 3);
login(1, 2, 3, 4);
login(1, 2);
login(1);
login();

// Spread/rest
function somaTotal(...numeros){
  let total =0;
  for(let numero of numeros){
    total += numero;
  }
  return total;
}
console.log(somaTotal(1,2,3,4,5,6,7,8,9,10))