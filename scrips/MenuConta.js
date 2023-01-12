bancoClient = JSON.parse(localStorage.getItem('bank:client'));
console.log(bancoClient)

const menuNome = document.querySelector('.nameClient');
const menuSaldo = document.querySelector('.saldoClient');
const menuTipo = document.querySelector('.tipoClient');
const menuNumero = document.querySelector('.numeroClient');
const menuAgencia = document.querySelector('.agenciaClient')

console.log(menuNome.innerHTML += ` ${bancoClient[0]}`);
console.log(menuSaldo.innerHTML += ` ${bancoClient[1].toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}`);
console.log(menuTipo.innerHTML += ` ${bancoClient[2]}`);
console.log(menuNumero.innerHTML += ` ${bancoClient[3]}`);
console.log(menuAgencia.innerHTML += ` ${bancoClient[4]}`);
