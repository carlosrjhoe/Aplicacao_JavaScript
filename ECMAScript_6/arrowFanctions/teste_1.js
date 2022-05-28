function boasVindas(nome){
  return `Seja bem vindo, ${nome}`;
}

let boasVindas2 = nome => {
  return `Seja bem vindo novamente ${nome}`
}

let boasVindas3 = nome => `Sejam bem vindos outra vez, ${nome}`;

console.log(boasVindas('Carlos'));
console.log(boasVindas('Mayara'));
console.log(boasVindas2('Luna'));
console.log(boasVindas2('Neto'));
console.log(boasVindas3('Rose'));
console.log(boasVindas3('Lucia'));
