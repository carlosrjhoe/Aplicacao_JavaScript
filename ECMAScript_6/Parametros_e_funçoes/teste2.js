const v = 'valor 1';
function funcao(x = v){
  const v = 'funcao 2';
  console.log(x)
};

funcao();