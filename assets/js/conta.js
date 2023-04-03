const reloadConta = document.querySelector('.conta_principal')
document.onload(monstrarDados())

function monstrarDados(){
    const transacoes = document.querySelector('.template_transacoes');
    const dados = JSON.parse(localStorage.getItem('bank:client', JSON.stringify)); 
    console.log(dados);
    const spanName = document.querySelector('.name_perfil'); 
    const saldo_value = document.querySelector('.saldo_value')
    spanName.innerHTML = `${dados.username}`
    saldo_value.innerHTML = `R$ ${dados.Saldo},00`
    dados.extrato.forEach(element => {
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
        transacoes.appendChild(divPrincipal);
    });
}   

{/* <div class="template">
    <div class="template_data">02/10/2003</div>
    <div class="template_desc">Voce sacou tanto dinheiro</div>
</div> */}

const btnSair = document.querySelector('.btn_sair');
btnSair.addEventListener('click', ()=>{
    window.location.assign('../home.html');
})