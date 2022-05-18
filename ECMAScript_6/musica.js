var musicas = new Set();
musicas.add('Musica 1');
musicas.add('Musica 2');
musicas.add('Musica 3');
for(var musica of musicas){
  console.log(musica);
}

var musicas1 = new Set(['musica1','musica2','musica3']);
musicas1.delete('musica2');
// musicas1.clear();
for(var musi of musicas1){
  if(musicas1.has('musica4')){
    console.log('Já existe na lista');
    break;
  } else {
    console.log('Não existe na lista.');
    break;
  }
}

var qtdmusicas1 = musicas1.size;
var qtdmusicas = musicas.size;
console.log(`Há ${qtdmusicas} de musicas na lista!`);
console.log(`Há ${qtdmusicas1} de musicas na lista!`);
