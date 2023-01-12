bancoClient = JSON.parse(localStorage.getItem('bank:client'));
console.log(bancoClient)

const menuNome = document.querySelector('.nameClient');
const menuSaldo = document.querySelector('.saldoClient');
const menuTipo = document.querySelector('.tipoClient');
const menuNumero = document.querySelector('.numeroClient');
const menuAgencia = document.querySelector('.agenciaClient')

menuNome.innerHTML += ` ${bancoClient[0]}`;
menuSaldo.innerHTML += ` ${bancoClient[1].toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}`;
menuTipo.innerHTML += ` ${bancoClient[2]}`;
menuNumero.innerHTML += ` ${bancoClient[3]}`;
menuAgencia.innerHTML += ` ${bancoClient[4]}`;
