var mapa = new Map();
mapa.set("um", 1);
mapa.set("dois", 2);
mapa.set("três", 3);

// imprimir chaves 
for(var chave of mapa.keys()){
  console.log(chave);
}
console.log(typeof(chave));

// Iprimir valor de cada chave
for(var valor of mapa.values()){
  console.log(valor);
}
console.log(typeof(valor));

// Imprime a chave e seu valor
for(var entrada of mapa.entries()){
  console.log(entrada);
}
console.log(typeof(entrada));