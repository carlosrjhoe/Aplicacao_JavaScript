(function(a, b, c){
  console.log(`O resultado: ${a + b + c}`)
})(1, 2, 3);

(function(){
  let x = 300;
  console.log(x)
})();

(() => {
  console.log('ArrouFunction');
})();

(() => console.log('ArrouFunction 2'))();