import {contasHzhong} from "./test.js";

function enter(){
    let errorLogin = document.querySelector('span.erroLogin')
    let email = document.getElementById('txtHomeEmail');
    email = String(email.value);
    let senha = document.getElementById('txtHomeSenha');
    senha = String(senha.value);
    if(verificarRegister(email, senha, contasHzhong)) {
        const newContas = dadosFilter();
        localStorage.setItem('bank:client', JSON.stringify(newContas));
        window.location.assign('./pages/menuConta.html');
    } else {
        errorLogin.style.display = 'block'
    }
}

let btnLogin = document.querySelector('button.btnLogin');
btnLogin.addEventListener('click', enter)

btnLogin.addEventListener('reload',(e) => {
    e.preventDefault();
    
})


function verificarRegister(_email, _senha, bancoDeDados){
    //console.log(bancoDeDados);
    //console.log(_email);
    //console.log(_senha);
    for (let el of bancoDeDados) {
        const {email, senha} = el
        if(_email === email && _senha === senha) {
            return true
        } else {
           
        }
        
    }   
    return false
}
function dadosFilter(){
    let emailSearch = String(document.getElementById('txtHomeEmail').value);
    for (let el of contasHzhong) {
        const {email} = el; 
        if(emailSearch === email){
            const {nome, saldo, tipo, numero, agencia} = el;
            const dadosClient = [nome, saldo, tipo, numero, agencia];
            return dadosClient
        }
    }
    return
}