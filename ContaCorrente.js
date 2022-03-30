import { Cliente } from "./Cliente.js";

export class ContaCorrente {
    Agencia;
    _cliente;

    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
    }

    get cliente (){
        return this._cliente;
    }

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