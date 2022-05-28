const horas = new Date().getHours();
const msg = `Bom dia, são ${horas} horas`;

console.log(msg);

const msg1 = defineMensagem`${""}${horas} horas`;

function defineMensagem(strings, ...values){
  const hora = values[1];
  if(hora >= 6 && hora <= 12){
    values[0] = "Bom dia";
  } else if (hora > 12 && hora <= 18){
    values[0] = "Boa tarde";
  } else {
    values[0] = "Boa noite"
  }
  values[0] = `${values[0]}, são`
}

