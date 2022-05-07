import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";


const cliente1 = new Cliente(); // Contrutor
cliente1.Nome = "Carlos"; // Atributos
cliente1.CPF = "11122233344"; // Atributos
cliente1.RG = "123456"; // Atributos

const cliente2 = new Cliente();
cliente2.Nome = "Mayara";
cliente2.CPF = "22233344455";
cliente2.RG = "234567";

const contaCorrenteCarlos = new ContaCorrente();
contaCorrenteCarlos.cliente = cliente1;
contaCorrenteCarlos.Agencia = "1599";
contaCorrenteCarlos.Saldo = 100;
contaCorrenteCarlos.depositar(200);

const contaCorrenteMayara = new ContaCorrente();
contaCorrenteMayara.cliente = cliente2;
contaCorrenteMayara.Agencia = "1599";
contaCorrenteMayara.Saldo = 190;
contaCorrenteMayara.depositar(400);


contaCorrenteCarlos.transferir(150, contaCorrenteMayara);
contaCorrenteMayara.transferir(300, contaCorrenteCarlos);
console.log(contaCorrenteCarlos);
console.log(contaCorrenteMayara);
