var bruxos = ["Carlos", "Mayara", "Neto", "Luna"];
var iteradorBruxos = bruxos[Symbol.iterator]();
var proximo = iterator.next();

do{
  var bruxo = proximo.value;
  chapeuSeletor.fazerSelecaoDaCasa(bruxo);
  proximo = iterator.next();
} while (!proximo.done);