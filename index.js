class Cliente {
    Nome; 
    CPF;
    RG;
}

class ContaCorrente {
    Agencia;
    Saldo;
        
    sacar(valor){ // Comportamento
        // Metodo sacar
        if(this.Saldo >= valor){
            this.Saldo -= valor;
        } else {
            console.log("Saldo insuficiente.")
        }
    }

    depositar(valor){
        // Metodo depositar
        if(valor > 0){
            this.Saldo += valor;
        } else {
            return console.log("Saldo insuficiente.")
        }
            
    }
}



const cliente1 = new Cliente(); // Contrutor
cliente1.Nome = "Carlos"; // Atributos
cliente1.CPF = "11122233344"; // Atributos
cliente1.RG = "123456"; // Atributos

const cliente2 = new Cliente();
cliente2.Nome = "Mayara";
cliente2.CPF = "22233344455"
cliente2.RG = "234567"

const contaCorrentoCarlos = new ContaCorrente();
contaCorrentoCarlos.Agencia = "1599";
contaCorrentoCarlos.Saldo = 100;
contaCorrentoCarlos.sacar(50);

contaCorrentoMayara = new ContaCorrente();
contaCorrentoMayara.Agencia = "1599"
contaCorrentoMayara.Saldo = 100;

console.log(`Nome: ${cliente1.Nome} Agencia: ${contaCorrentoCarlos.Agencia} Saldo: R$${contaCorrentoCarlos.Saldo}`);
// console.log(contaCorrentoMayara);
// console.log(cliente2);