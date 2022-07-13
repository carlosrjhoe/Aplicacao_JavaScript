/* 14.3	OPERADOR	 SPREAD	 EM	 CHAMADAS	DE FUNÇÕES */

// Chamada de função normal
function soma(a,b){
  console.log(a + b)
};

soma(1,2);

// Chamando uma função e utilizando Spred
var numeros = [1, 2];
soma(...numeros);