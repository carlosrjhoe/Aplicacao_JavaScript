/* Estruturamos esses dados no objeto Usuario: */
const Usuario = {
    nome: 'Carlos Roberto',
    sobrenome: 'Conceição',
    senha: 'LaraCroft36@',
    confirmaSenha: 'LaraCroft36',
	email: 'carlosrjhoe@gmail.com',
    profissao: 'Líder de manutenção',
	github: 'https://github.com/carlosRJhoe'
}

/* O desestruturamento permite que usemos a sintaxe de objetos literais para extrair valores. */
const {email} = Usuario;
const {nome} = Usuario;
const {sobrenome} = Usuario;

console.log(email);
console.log(nome);
console.log(sobrenome);