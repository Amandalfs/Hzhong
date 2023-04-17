window.addEventListener("load", monstrarDados());

async function monstrarDados(){
    async function apiRender(username){
        const dados = await fetch(`https://api-bancohzhong.cyclic.app/users/userAconnt?username=${username}`)
            .then(result => result.json())
                .then(data => {return data.dados})
                    .catch((e)=> {return false});
        return dados;
    }

    
    const dados = JSON.parse(localStorage.getItem('bank:client'));
    const name_perfil = document.querySelector('.name_perfil');
    const saldo_value = document.querySelector('.saldo_value');
    const {saldo} = await apiRender(dados.username)
    name_perfil.innerHTML = `${dados.username}`
    saldo_value.innerHTML = `R$${saldo},00`
}

const btn_saque = document.querySelector('button.btn_saque');

btn_saque.addEventListener('click', ()=>{
    sacar()
});

async function sacar(){
   
    const valor_saque = await Number(document.querySelector('.saque_value').value);
    const senha = await document.querySelector('.saque_password').value;
    const username = await JSON.parse(localStorage.getItem('bank:client')).username;
    const body = {
        "username": username,
        "valueWithdraw": valor_saque
    }
    const myInit = await {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            "password": senha
        },
        body: JSON.stringify(body) 
    }
    const result = await fetch('https://api-bancohzhong.cyclic.app/withdrawUser', myInit)
        .then((result) => result.json())
        .then((data) => {return data})
        .catch(e=>{return false})
    if(result==false){
        const error = document.querySelector('.error_saque');
        error.innerHTML = `Erro de transacao, verifique a senha ou se voce tem esse valor na conta`
    } else {
        const error = document.querySelector('.error_saque');
        error.innerHTML = ``
        const popUp = document.querySelector('.pop-up');
        const saque_span = document.querySelector('.saque_span');
        saque_span.innerHTML = `${valor_saque.toFixed(2).replace('.',',')}`
        popUp.style =  'opacity: 1';
        popUp.style.transform = 'scale(1.1)';
        console.log(result)
    }
}

