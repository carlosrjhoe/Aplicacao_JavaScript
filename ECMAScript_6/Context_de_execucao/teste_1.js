const equipe = {
  nome: 'Guerreiros Z',
  membros: [
    'Goku',
    'Vegeta',
    'Kuririn'
  ],
  membrosDaEquipe: function(){
    const that = this;
    this.membros.forEach(function(membro){
      console.log(`${membro} é da equipe ${this.nome}`);
    })
  }
}



