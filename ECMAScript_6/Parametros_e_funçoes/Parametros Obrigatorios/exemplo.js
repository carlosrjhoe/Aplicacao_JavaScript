/* Esta	 é	 uma	 maneira	 interessante	 de	 impedir	 que	 os	 métodos sejam	executados	sem	os	parâmetros	obrigatórios. */

function parametroObrigatorio(parametro){
  throw new Error(`O parametro ${parametro} é obrigatorio.`)
}

function inserirNaTela(objeto = parametroObrigatorio('objeto')) {
  // Lógica de implementação do método.
}

inserirNaTela()