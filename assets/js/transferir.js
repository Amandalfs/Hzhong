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

const btnTransferir = document.querySelector('.transferir_btn');
btnTransferir.addEventListener('click',()=>{
    transferir()
})

async function transferir(){
    const username = await JSON.parse(localStorage.getItem('bank:client')).username;
    const password = await document.querySelector('.transferir_password').value;
    const keypix = await document.querySelector('.keypix_transferir').value;
    const valueTransfer = await Number(document.querySelector('.transfer_value').value);
    const body = await {
        "username": username,
        "deposit": valueTransfer,
        "keypix": keypix
    }
    const myInit = await {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            "password": password
        },
        body: JSON.stringify(body) 
    }
    const result = await fetch('https://api-bancohzhong.cyclic.app/pixKeyTransaction', myInit)
        .then((result) => result.json())
        .then((data) => {return data})
        .catch(e=>{return false})
    if(result===false){
        const error = document.querySelector('.error_transferir');
        error.innerHTML = `Erro de transacao, verifique a senha, valor ou a chave pix`
    } else {
        const error = document.querySelector('.error_transferir');
        error.innerHTML = ``
        const popUp = document.querySelector('.pop-up');
        const saque_span = document.querySelector('.transferir_span');
        saque_span.innerHTML = `${valueTransfer.toFixed(2).replace('.',',')}`
        popUp.style =  'opacity: 1';
        popUp.style.transform = 'scale(1.1)';
        console.log(result)
    }
}