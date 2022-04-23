// Primeiro,	fazemos	da	forma	convencional:
var pesoDasMalas = [12, 40, 35, 20];
var malasAcimaDoPeso = false;
for(var i = 0; i < pesoDasMalas.length; i++){
  if(pesoDasMalas[i] > 30){
    malasAcimaDoPeso = true;
  };
};
console.log(malasAcimaDoPeso)

// utilizando	o		SOME:
var malasAcimaDoPeso = pesoDasMalas.some(function(malas){
  return malas > 30;
});
console.log(malasAcimaDoPeso);