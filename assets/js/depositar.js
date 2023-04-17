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
    const { saldo } = await apiRender(dados.username)
    name_perfil.innerHTML = `${dados.username}`
    saldo_value.innerHTML = `R$${saldo},00`
}

async function depositar(){
    const username = await JSON.parse(localStorage.getItem('bank:client')).username;
    const depositar_value = await document.querySelector('.depositar_value').value;
    const password = await Number(document.querySelector('.depositar_password').value);
    const body = {
        "username": username,
        "deposit": depositar_value
    }
    const myInit = await {
        method: "PATCH",
        headers:{
            "Content-Type":"application/json",
            "password": password
        }, 
        body: JSON.stringify(body)
    } 
    const result = await fetch('https://api-bancohzhong.cyclic.app/depositUser', myInit)
        .then((result)=>{result.json()})
        .then((data)=>{return data})
        .catch((e)=>{return false})
    if(result==false){
        const error = document.querySelector('.error_deposito');
        error.innerHTML = "Erro de transacao, verifique se a senha esta certa"
    } else {
        const error = document.querySelector('.error_deposito');
        error.innerHTML = ``
        const popUp = document.querySelector('.pop-up');
        const saque_span = document.querySelector('.deposito_span');
        saque_span.innerHTML = `${Number(depositar_value).toFixed(2).replace('.',',')}`
        popUp.style =  'opacity: 1';
        popUp.style.transform = 'scale(1.1)';
    }
}

const btnDepositar = document.querySelector('.depositar_btn');
btnDepositar.addEventListener('click',()=>{
    depositar()
})