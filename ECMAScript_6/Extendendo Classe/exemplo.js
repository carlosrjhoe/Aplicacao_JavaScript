class Carro {
    // SINTAXE NOVA DE CLASSES DO ES6
    constructor(modelo, chassi, qtdPortas) {
        this.modelo = modelo;
        this.chassi = chassi;
        this.qtdPortas = qtdPortas;
    }

    andar() {
        // METODO FAZER O CARRO ANDAR
        console.log('Vrummm vrumm');
    }

    abrirTetoSolar() {
        console.log('Abrindo teto solar');
    }
}

class Onix extends Carro{
    abrirTetoSolar() {
        console.log('Abrindo teto solar');
    }
}

const sonix = new Onix();
sonix.modelo = 'Fiat';
// sonix.abrirTetoSolar();
console.log(sonix.modelo);