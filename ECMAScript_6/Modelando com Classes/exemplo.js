// Modelo de classe 
class Carro {
    // SINTAXE NOVA DE CLASSES DO ES6
    constructor(modelo, chassi, qtdPortas){
        this.modelo = modelo;
        this.chassi = chassi;
        this.qtdPortas = qtdPortas;
    }

    andar() {
        // METODO FAZER O CARRO ANDAR
        console.log('Vrummm vrumm');
    }
}

// 1° forma de Instanciar um objeto apartir da classe Carro
const CarroNovo = new Carro();
CarroNovo.modelo = 'Prototipo';
CarroNovo.chassi = '12345';
CarroNovo.qtdPortas = 4;

// 2° Forma de Instancia um objeto apartir da classe Carro
const CarroVelho = new Carro('Chevete', '12345', 2);

console.log(CarroVelho.modelo);
console.log(CarroVelho.chassi);
console.log(CarroVelho.qtdPortas);
console.log(CarroVelho.andar());

// console.log(CarroNovo.modelo);
// console.log(CarroNovo.chassi);
// console.log(CarroNovo.qtdPortas);

// Carro.prototype.andar = function() {
//     console.log('Vrummm vrumm')
// }

// CarroVelho.andar();
// CarroNovo.andar();

// Instanciando outro objeto
// const onix = new Carro('Onix', '54321', 4)
// console.log(onix.qtdPortas);
// onix.andar();