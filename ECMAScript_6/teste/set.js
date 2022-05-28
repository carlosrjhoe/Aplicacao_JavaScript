var set = new Set();
set.add(1);
set.add(2);
set.add(2);
set.add(3);
set.add(3);

for(const valor of set){
  console.log(valor);
}

var set2 = new Set([3, 2, 1, 3, 2]);
for(const valor of set2){
  console.log(valor);
}
