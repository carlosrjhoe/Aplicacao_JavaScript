var pessoas = new Map();
pessoas.set("Carlos", 36);
pessoas.set("Mayara", 37);
pessoas.set("Neto", 6);
pessoas.set("Luna", 4);

// Retorna a chave de todos os chaves.
for(var pessoa of pessoas.keys()){
  console.log(pessoa)
}

// Retorna a chave de todos os valores.
for(var valor of pessoas.values()){
  console.log(valor);
}

// Retorna a chave de todos as entradas.
for(var entrada of pessoas.entries()){
  console.log(entrada);
}