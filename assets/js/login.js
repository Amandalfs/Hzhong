
const btnLogin = document.querySelector('button.btnLogin');
btnLogin.addEventListener('click', ()=>{
    loginUser();
})



async function loginUser(){
    const spanError = await document.querySelector('.home_Error');
    const url = await 'https://api-bancohzhong.cyclic.app'
    const inputUser = await document.querySelector('.inputUsername');
    const username = await inputUser.value;
    const inputPassword = await document.querySelector('.inputPassword');
    const password = await inputPassword.value;
    
    const result = await fetch(`${url}/loginUser/?username=${username}&password=${password}`)
        .then(result => result.json())
        .then(data => {return data.userData})
        .catch((e)=> {return false});
    if(result==false){
        spanError.innerHTML = "Senha ou Username Errado"       
    } else {
        console.log(result)
        localStorage.setItem('bank:client', JSON.stringify(result));
        window.location.assign('../pages/conta.html');
    }
}