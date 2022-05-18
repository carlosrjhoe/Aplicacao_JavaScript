var musicas = new Set();
musicas.add('Musica 1');
musicas.add('Musica 2');
musicas.add('Musica 3');
for(var musica of musicas){
  console.log(musica);
}

var musicas1 = new Set(['musica1','musica2 ','musica3']);
musicas1.delete('musica2');
for(var musi of musicas1){
  console.log(musi);
}