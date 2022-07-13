// var argumento = [1, 2, 3]
// console.log(...argumento)
// console.log(argumento)

// Caso de estudo!

const listaMae = ['leite', 'macarrão', 'feijão'];
const listaEsposa = ['pão', 'queijo', 'arroz'];
const listaEscritorio = ['adesivo', 'fita', 'caneta']

// Serve para unir duas listas com o uso deo "concat"
var listaDeCompras = listaMae.concat(listaEsposa, listaEscritorio) 

// Serve para unir duas listas com o uso do Spred(...)
var listaDeCompras = [...listaMae, ...listaEsposa, ...listaEscritorio];

console.log(listaDeCompras)