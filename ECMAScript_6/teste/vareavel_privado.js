function Pessoa(nome, sobreNome){
  this._nome = nome;
  this._sobreNome = sobreNome;
}

Pessoa.prototype.getNome = function(){
  return this._nome;
}
Pessoa.prototype.getSobreNome = function(){
  return this._sobreNome;
}

var carlos = new Pessoa();
carlos._nome = "Carlos";
carlos._sobreNome = "Roberto";

console.log(carlos.getNome());
console.log(carlos.getSobreNome());