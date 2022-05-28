var nomes = ["Carlos", "Mayara", "Neto", "Luna"];

// Primeiro,	fazemos	da	forma	convencional:
for(var i = 0; i < nomes.length; i++){
  console.log(nomes[i]);
};

// utilizando	o FOREACH:
nomes.forEach(function(nome){
  console.log(`Nome: ${nome}`)
});


