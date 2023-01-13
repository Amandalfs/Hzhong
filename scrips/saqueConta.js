import {contasHzhong} from "./test.js";

let btnVfSaque = document.querySelector('button.btnVfSaque');
btnVfSaque.addEventListener('click', verificarSaque);

const bancoClient = JSON.parse(localStorage.getItem('bank:client'));
let post = document.querySelector('.Reposta');

let saldoTotal = bancoClient[1]

let nameSaque = document.querySelector('.nameSaque');
nameSaque.innerHTML += `${bancoClient[0]}`
let saldoSaque = document.querySelector('.saldoSaque');
saldoSaque.innerHTML += ` ${saldoTotal.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}`;


function verificarSaque(){
    console.log(bancoClient[1])
    let txtSaqueNumero = Number(document.querySelector('.txtSaqueNumero').value);
    let txtSenhaSaque = String(document.querySelector('.txtSenhaSaque').value);
    let errorSaque = document.querySelector('.errorSaque');
    
    
    
    if(txtSaqueNumero<bancoClient[1]){
        console.log(saldoTotal);
        const senhaVer = dadosFilter(bancoClient[3]);
        if(txtSenhaSaque===senhaVer) {
            saldoTotal -= txtSaqueNumero
            post.innerHTML = `<p>Saque de ${txtSaqueNumero.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}</p>`
            saldoSaque.innerHTML = `<h3> Saldo: ${saldoTotal.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}</h3>`;
            post.style.display = 'block'
            errorSaque.style.display = 'none';
        } else {
            errorSaque.innerHTML = 'Senha Errada ou Saldo Invalido';
            errorSaque.style.display = 'block';
            post.style.display = 'none'
        }
    } else {
        errorSaque.innerHTML = 'Senha Errada ou Saldo Invalido';
        errorSaque.style.display = 'block';
        post.style.display = 'none'
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