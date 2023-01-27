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
    (verificarSenhaRegister(senha1, senha2) && verificarNasc()) && verificarCPF(cpfRegister) && verifyCpf()){
        criarConta(cpfRegister, emailRegister, nameRegister, senha1)
        localStorage.setItem('bank:client', JSON.stringify(contasHzhong[contasHzhong.length-1]));
        window.location.assign('./confirmarEmail.html');
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

function verifyCpf(){
    let cpfClass = document.querySelector('.cpfRegister');
    let cpf = String(cpfClass.value)
    let soma = 0;
    let soma2 = 0;
    const arrayValue = []; 
    const arrayValue2 = [];
    let cont = 10
    let cont2 = 11
    for(let c=0; c<9; c++) {
        arrayValue.push(cont*(parseInt(cpf[c])));
        cont--;
    }
    for(let el of arrayValue){
        soma+= el;
    }
    for(let c=0; c<9; c++){
        arrayValue2.push(cont2*(parseInt(cpf[c])));
        cont2--;
    }
    let result = 11-(soma%11);
    arrayValue2.push(2*result);

    for(let el of  arrayValue2){
        soma2+=el
    }
    let result2 = 11-(soma2%11);
    if(result<2){
        result = 0;
    }
    if(result<2){
        result = 0;
    }
    let conclusao = `${result}`+ `${result2}`
    let comparacao = cpf[cpf.length-2]+cpf[cpf.length-1]
    console.log( conclusao, comparacao)
    if(conclusao==comparacao){
        return true;
    } else {
        errorRegister.innerHTML = `\n CPF Invalido \n`;
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