const inicio = document.querySelector('.data_inicial');
const fim = document.querySelector('.data_final');

const btnExec = document.querySelector('.controle_executar');


window.addEventListener('load', ()=>{
    const username = JSON.parse(localStorage.getItem('bank:client', JSON.stringify)).username;
    const spanName = document.querySelector('.name_perfil'); 
    spanName.innerHTML = `${username}`;
})



btnExec.addEventListener('click', async()=>{
    const username = JSON.parse(localStorage.getItem('bank:client', JSON.stringify)).username;
    const dados = await apiRender(username, inicio.value, fim.value);
    const add_excluir = document.querySelector('.add_excluir')
    if(dados.length === 0){
        add_excluir.innerHTML = '';
        add_excluir.style.color = 'red';
        add_excluir.innerHTML = `<h2>Nao tem um registro nesse intervalo ${inicio.value} - ${fim.value} </h2>`
    } else{
        dados.forEach(element => {
            const divPrincipal = document.createElement('div')
            divPrincipal.setAttribute('class', 'template');
            const divData = document.createElement('div');
            divData.setAttribute('class', 'template_data');
            const divDesc = document.createElement('div');
            divDesc.setAttribute('class', 'template_desc');
            divData.innerHTML = `${element.date.slice(0, 10)}`
            divDesc.innerHTML = `${element.descricao}`
            divPrincipal.appendChild(divData);
            divPrincipal.appendChild(divDesc);
            add_excluir.appendChild(divPrincipal);
        });
    } 
})

async function apiRender(username, inicio, fim){
    const dados = await fetch(`https://api-bancohzhong.cyclic.app/extractUsers?dateInicial=${inicio}&dateFinal=${fim}&username=${username}`)
        .then(result => result.json())
        .then(data => {return data})
            .catch((e)=> {return false});
    return dados;
}
