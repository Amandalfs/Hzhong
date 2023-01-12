import {contasHzhong} from "./test.js";


let btnRegister = document.querySelector('button.btnRegister');
btnRegister.addEventListener('click', register);


let errorRegister = document.querySelector('span.errorRegister');

function register() {
    const cpfRegister = String(document.querySelector("input.cpfRegister").value);
    let emailRegister = String(document.querySelector('input.emailRegister').value);
    let senha1 = String(document.querySelector('input.senha1Register').value);
    let senha2 = String(document.querySelector('input.senha2Register').value);
    let nameRegister = String(document.querySelector("input.nameRegister").value);
    /* console.log(nameRegister);
    console.log(emailRegister);
    console.log(senha1);
    console.log(senha2);
    console.log(cpfRegister); */
    if(verificarNome(nameRegister) && verificarEmailExistente(emailRegister, contasHzhong) && 
    (verificarSenhaRegister(senha1, senha2) && verificarNasc()) && verificarCPF(cpfRegister)){
        criarConta(cpfRegister, emailRegister, nameRegister, senha1)
        console.log(contasHzhong)
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
        //errorRegister.innerHTML += '<p>Senha Muito Curta!!<p>'
        //errorRegister.style.display = ('block');
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
    let nascRegister = document.querySelector('input.nascRegister');
    nascRegister = nascRegister.value;
    let dataAtual = new Date();
    let ano = dataAtual.getFullYear();
    const nasc = nascRegister.slice(4, 8);
    if ((ano - nasc) >= 18) {
        return true
    }else {
        errorRegister.innerHTML += `<p>As senhas estao diferentes!!</p>`
        errorRegister.style.display = ('block');     
        return false
    }
    
}

function AddTipo(){
    let radTipo = document.getElementsByClassName('fav_type');
    let tipo = '';
    if(radTipo[0].checked) {
        tipo = "Poupanca";
    } else if(radTipo[1].checked) {
        tipo = "Corrente";
    } else if(radTipo[2].checked) {
        tipo = "Universitaria";
    } 
    return tipo
}

function verificarNome(nameRegister){
    if(nameRegister.length===0) {
        errorRegister.innerHTML = `Campo Nome Obrigatorio`;
        errorRegister.style.display = 'block';
        return false
    } else {
        return true
    }
}

function verificarCPF(cpfRegister){
    if(cpfRegister.length===11) {
        return true;
    } else {
        errorRegister.innerHTML = `Campo CPF Obrigatorio`;
        errorRegister.style.display = 'block';
        return false;
    }
}

function criarConta(cpfRegister, emailRegister, nameRegister, senha1){
    let id = 0;
    for(let el of contasHzhong) {
        const {numero} = el;
        if (numero>id) {
            id = numero;
        }
    }
    id++;

    let tipo = AddTipo();
    //Nome, Senha, Email, CPF
    
    contasHzhong.push({
        nome: nameRegister,
        agencia: "004",
        numero: id,
        tipo: tipo,
        senha: senha1,
        email: emailRegister,
        saldo: 0,
        CPF: cpfRegister,
    })
}