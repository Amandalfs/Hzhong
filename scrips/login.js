import {contasHzhong} from "./test.js";

function enter(){
    let panel = document.querySelector('span.erroLogin')
    let email = document.getElementById('txtHomeEmail');
    email = String(email.value);
    let senha = document.getElementById('txtHomeSenha');
    senha = String(senha.value);
    if(verificarRegister(email, senha, contasHzhong)) {
        localStorage.setItem('bank:client', JSON.stringify(contasHzhong[0]));
        window.location.assign('./pages/menuConta.html');
    } else {
        panel.style.display = 'block'
    }
}

let btnLogin = document.querySelector('button.btnLogin');
btnLogin.addEventListener('click', enter)

btnLogin.addEventListener('reload',(e) => {
    e.preventDefault();
    
})


function verificarRegister(_email, _senha, bancoDeDados){
    console.log(bancoDeDados);
    console.log(_email);
    console.log(_senha);
    for (let el of bancoDeDados) {
        const {email, senha} = el
        if(_email === email && _senha === senha) {
            return true
        } else {
            return false
        }
    }   
}

