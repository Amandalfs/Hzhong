const eventoReload = document.querySelector('.revelarExtrato');
eventoReload.addEventListener('click', extractRodar)

const dadosExtrato = JSON.parse(localStorage.getItem('extract:client'));
const dadosClient = JSON.parse(localStorage.getItem('bank:client'));

const extractContainer = document.querySelector('.extract-container');
const nameExtract = document.querySelector('.nameExtract');
nameExtract.innerHTML += `${dadosClient[0]}`
function extractRodar(){
    extractContainer.innerHTML = ''
    for(let el of dadosExtrato){
        for(let i in dadosExtrato){
            extractContainer.innerHTML += `<p>${dadosExtrato[i]}</p>`;
        }
        extractContainer.innerHTML += `<p>Saldo Atual: ${dadosClient[1].toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}</p>`
        break;
    }
}
