/* 14.2	ADICIONANDO	ITENS	A	UM	ARRAY */

const carrinho = [
  {descricao: 'Bota de cano médio', preco: 199.99},
  {descricao: 'Saia Colorida', preco: 29.99},
  {descricao: 'Vestido	Longo', preco: 399.99}
];

const produtoSelecionado = {
  descricao: 'Blusa de lã',
  preco: 59.99,
};

const carrinhoAtualizado = [...carrinho, produtoSelecionado]; // Adicionando itens a um array com usso de Spred

for(let produto of carrinhoAtualizado){
  console.log(produto.descricao)
};