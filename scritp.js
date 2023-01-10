class ContaBancaria{
    construtor(nome, agencia, tipo, numero, senha, email, CPF){
        this.nome = nome;
        this.agencia = agencia;
        this.tipo = tipo;
        this.email = email;
        this._senha = senha;
        this._saldo = 0;
        this._CPF = CPF;
    }
}

const contasHzhong = [];

class ContaCorrente extends ContaBancaria{

}

class ContaPoupanca extends ContaBancaria{

}

class ContaUniversitaria extends ContaBancaria{
    
}

function tipo(tipo) {
    switch(tipo){
        case 0: 
            return tipo="poupanca"
            break;
        case 1: 
            return tipo="corrente"
            break;
        case 2:
            return tipo="universitaria"
            break;
    }
}

function registrar(){
    let senha = String(document.getElementById('senha1').value);
    let email = String(document.getElementById('txtEmail').value);
    let nome = String(document.getElementById('txtName').value);
    let nasc = Date(document.getElementById('nasc'));
    let tipo;
    contasHzhong.push(new ContaBancaria(nome, 0123, tipo, contasHzhong.length, senha, email));
    
}

function enter(){

}

function verificarRegister(email, nasc){

}
