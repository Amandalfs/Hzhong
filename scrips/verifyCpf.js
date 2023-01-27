/* import {bancoHzhong} from ('./test.js') */
//"11144477735";

/* function verifyCpf(){
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
    result = 11-(soma%11);
    arrayValue2.push(2*result);

    for(let el of  arrayValue2){
        soma2+=el
    }
    result2 = 11-(soma2%11);
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
        return false;
    }
} */

console.log(verifyCpf())