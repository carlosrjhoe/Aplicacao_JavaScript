function Set() {
  var lista = [];
  this.add = function (valor) {
    if (lista.indexOf(valor) === -1) {
      lista.push(valor);
    }
  };
  // Metodo mostra valores
  this.mostrarValores = function () {
    console.log(lista);
  };
}

var set = new Set();
set.add(2);
set.add(1);
set.add(2);

set.mostrarValores();

for (var valor of set) {
  console.log(valor);
}
