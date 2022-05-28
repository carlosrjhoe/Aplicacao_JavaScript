var Pessoa = (function(){
  var dadosPrivados = new WeakMap();

  function Pessoa(nome){
    dadosPrivados.set(this,{ nome: nome });
  }
  
  Pessoa.prototype.getNome = function(){
    return dadosPrivados.get(this).nome;
  }

  return Pessoa;
});

var carlos = new Pessoa("Carlos");
console.log(carlos.getNome());
console.log(carlos.nome);