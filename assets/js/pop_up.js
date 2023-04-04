const btnClose = document.querySelector('.btn_close');
btnClose.addEventListener('click',()=>{
    const popUp = document.querySelector('.pop-up');
    const saque_span = document.querySelector('.saque_span');
    popUp.style =  'opacity: 0';
    popUp.style.transform = 'scale(0.8)';
})