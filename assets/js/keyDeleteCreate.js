window.addEventListener("load", monstrarDados());

function monstrarDados(){
    const dados = JSON.parse(localStorage.getItem('bank:client'));
    const name_perfil = document.querySelector('.name_perfil');
    name_perfil.innerHTML = `${dados.username}`
}




const btn_delete = document.querySelector('.btnDelete')
btn_delete.addEventListener('click', ()=>{
    deleteKey();
})

async function deleteKey(){
    const senha = await document.querySelector('.password').value;
    const username = await JSON.parse(localStorage.getItem('bank:client')).username;
    const body = {
        "username": username
    }
    const myInit = await {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            "password": senha
        },
        body: JSON.stringify(body) 
    }
    const result = await fetch('https://api-bancohzhong.cyclic.app/deleteKeyPixUser', myInit)
        .then((result) => result.json())
        .then((data) => {return data})
        .catch(e=>{return false})
    if(result==false){
        const error = document.querySelector('.error_pix');
        error.innerHTML = `erro senha errada ou nao existe chave`
    } else {
        const error = document.querySelector('.error_pix');
        const campoKey  = document.querySelector('.chavePix_campo');
        error.innerHTML = '';
        campoKey.innerHTML = ``
        console.log(result)
    }
}




const btn_create = document.querySelector('.btnCreate')
btn_create.addEventListener('click',()=>{
    createKey();
})

async function createKey(){
    const senha = await document.querySelector('.password').value;
    const username = await JSON.parse(localStorage.getItem('bank:client')).username;
    const body = {
        "username": username
    }
    const myInit = await {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            "password": senha
        },
        body: JSON.stringify(body) 
    }
    const result = await fetch('https://api-bancohzhong.cyclic.app/createKeyPixUser', myInit)
        .then((result) => result.json())
        .then((data) => {return data})
        .catch(e=>{return false})
    if(result==false){
        const error = document.querySelector('.error_pix');
        error.innerHTML = `erro senha errada ou chave pix ja existente`
    } else {
        const error = document.querySelector('.error_pix');
        const campoKey  = document.querySelector('.chavePix_campo');
        error.innerHTML = '';
        campoKey.innerHTML = `${result.key}`
        console.log(result)
    }
}

