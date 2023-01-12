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

    get verSaldo() {
        return this.#saldo;
    }

    #saldo() {
        return this._saldo
    }

    deposit(value) {
        return this._saldo += value;
    }
    
    saque(value) {

    }


const bancoClient = JSON.parse(localStorage.getItem('bank:client'));
/* const contasHzhong = [
    {
        nome: 'Amanda',
        agencia: 004,
        numero: 154,
        tipo: 'ContaCorrente',
        senha: '1234',
        email: 'amanda57@gmail.com',
        saldo: 0,
        CPF: '',
    },
    {
        nome: 'Hugo',
        agencia: 004,
        numero: 154,
        tipo: 'ContaCorrente',
        senha: 'Senha1234',
        email: 'amanda57@gmail.com',
        saldo: 0,
        CPF: '',
    }   
]; */


/*class ContaCorrente extends ContaBancaria{
    super(nome, agencia, numero, senha, email, CPF)
}


class ContaPoupanca extends ContaBancaria{
    super(nome, agencia, numero, senha, email, CPF)
}

class ContaUniversitaria extends ContaBancaria{
    super(nome, agencia, numero, senha, email, CPF)
}
*/

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
    contasHzhong.push(nome, 0123, tipo, contasHzhong.length, senha, email);
    
}

/* function enter(){
    let email = document.getElementById('txtHomeEmail');
    email = String(email.value);
    let senha = document.getElementById('txtHomeSenha');
    senha = String(senha.value);
    console.log(senha);
    console.log(email);
    if(verificarRegister(email, senha, contasHzhong)) {
        window.location.assign('/pages/menuConta.html');
    } else {
        return console.log("errado")
    }
}

function verificarRegister(_email, _senha, bancoDeDados){
    for (el of bancoDeDados) {
        const {email, senha} = el 
        if(_email === email && _senha === senha) {
            return true
        } else {
            return false
        }
    }   
} */


const teste2 = document.querySelector('.nameClient');

console.log(teste2.innerHTML += `${bancoClient.nome}`);

bancoClient.