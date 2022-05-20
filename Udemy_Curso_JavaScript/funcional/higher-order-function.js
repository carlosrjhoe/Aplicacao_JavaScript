function run(fn){
  return `Resultado: ${fn()}`
}

function sayHello() {
  console.log('Olá');
}

run(sayHello);

run(function() {
  console.log('Corre...')
})

const resultado = run(Math.random)
console.log(resultado);