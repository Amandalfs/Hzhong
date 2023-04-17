const btnClose = document.querySelector('.btn_close');
btnClose.addEventListener('click',()=>{
    const popUp = document.querySelector('.pop-up');
    popUp.style =  'opacity: 0';
    popUp.style.transform = 'scale(0.8)';
    window.location.reload()
})