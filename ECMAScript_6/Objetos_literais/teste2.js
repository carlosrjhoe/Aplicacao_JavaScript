var pessoa = {
  nome: 'Carlos',
  sobreNome: 'Roberto',
  mostrarNome (){
    console.log(`Meu nome é ${this.nome}, e meu sobrenome é ${this.sobreNome}`);
  }
};
pessoa.mostrarNome();