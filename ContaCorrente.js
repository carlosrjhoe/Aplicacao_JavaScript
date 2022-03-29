export class ContaCorrente {
    Agencia;
    cliente;
    Saldo;
        
    sacar(valor){ // Comportamento
        // Metodo sacar
        if(this.Saldo >= valor){
            this.Saldo -= valor;
            return valor;
        }
    }

    depositar(valor){
        // Metodo depositar
        if(valor <= 0){
            return;
        } else {
            this.Saldo += valor;
        }
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }

}