import {contasHzhong} from "./test.js";

const bancoClient = JSON.parse(localStorage.getItem('bank:client'));

/* localStorage.setItem("bank:client", ) */
const extractDados = JSON.parse(localStorage.getItem('extract:client')); //array para guardar os dados do que foi depositado

/* Pegar os inputs nome e senha e monstrar no depositoConta.html */
const nameDeposito = document.querySelector(".nameDeposito");
const saldoDeposito = document.querySelector(".saldoDeposito");
nameDeposito.innerHTML += `${bancoClient[0]}`;
saldoDeposito.innerHTML += `${bancoClient[1].toLocaleString("pt-br", {style: "currency", currency: "BRL"})}`;
console.log(bancoClient)

//Criando o evento de click para executar a funcao de verificar e se for verdade para depositar 
const  btnDeposito = document.querySelector("button.btnDepositar");
btnDeposito.addEventListener('click', Depositar)


function Depositar(){
    //pegando a senha e quantia do deposito que a pessoal quer adicionar na conta
    const quantidadeDeposito = Number(document.querySelector('.txtDepositoQuantia').value);
    const senhaDeposito = String(document.querySelector('.txtDepositoSenha').value);
    console.log(quantidadeDeposito, senhaDeposito)
    const respostaDeposito = document.querySelector('.respostaDeposito');
    const errorDeposito = document.querySelector('span.errorDeposito');
    const senhaVer = dadosFilter(bancoClient[3]);
    console.log(senhaVer);
    if(senhaVer==senhaDeposito){
        errorDeposito.style.display = 'none'
        saldoDeposito.innerHTML = ''
        let saldoTotal = bancoClient[1];
        saldoTotal += quantidadeDeposito;
        bancoClient[1] = saldoTotal;
        respostaDeposito.innerHTML = (`<p>Deposito de ${quantidadeDeposito.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}</p>`);
        saldoDeposito.innerHTML += `Saldo" ${bancoClient[1].toLocaleString('pt-br', {style: 'currency', currency:'BRL'})}`;
        
        const newDate = new Date();
        const hours = newDate.getHours();
        const minutes = newDate.getMinutes();
        const day = newDate.getDay();
        const month = newDate.getMonth()+1;
        const year = newDate.getFullYear();

        localStorage.setItem("bank:client", JSON.stringify(bancoClient));
        extractDados.push(`Voce depositou ${saldoTotal.toLocaleString("pt-br", {style: "currency", currency: "BRL"})} ${hours}:${minutes} ${day}/${month}/${year}`)
        localStorage.setItem("extract:client", JSON.stringify(extractDados));
    } else {
        errorDeposito.innerHTML += `Senha Invalida`
        errorDeposito.style.display = 'block'
    }
}


function dadosFilter(n){
    for (let el of contasHzhong) {
        const {numero, senha} = el; 
        if(n === numero){
            return senha
        }
    }
    return
}