import {contasHzhong} from "./test.js";


let btnRegister = document.querySelector('button.btnRegister');
btnRegister.addEventListener('click', register);


const errorRegister = document.querySelector('span.errorRegister');

function register() {
    errorRegister.innerHTML = ''
    let emailRegister = String(document.querySelector('input.emailRegister').value);
    let senha1 = String(document.querySelector('input.senha1Register').value);
    let senha2 = String(document.querySelector('input.senha2Register').value);
    if(verificarEmailExistente(emailRegister, contasHzhong) && (verificarSenhaRegister(senha1, senha2))){

    }else {
        
    }
   

    
}

function verificarEmailExistente(emailRegister, contasHzhong) {
    for(let el of contasHzhong) {
        const {email} = el;
        if(email===emailRegister) {
            errorRegister.innerHTML += `<p>Email Ja tem uma conta!!!</p>`;
            errorRegister.style.display = 'block';
            return false
        } else {
            return true
        }
    }
}

function verificarSenhaRegister(senha1, senha2) {
    if(senha1.length <8 || senha2.length <8) {
        errorRegister.innerHTML += '<p>Senha Muito Curta!!<p>'
        errorRegister.style.display = ('block');
    } else {
        if(senha1===senha2){
            return true
        } else {
            errorRegister.innerHTML += `<p>As senhas estao diferentes!!</p>`
            errorRegister.style.display = ('block');
            return false
        } 
    }
}

function verificarNasc() {

}