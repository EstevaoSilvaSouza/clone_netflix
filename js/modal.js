let modal = document.getElementById('modalMeu');
let modalCont = document.getElementById('cont');
let modalInfo = document.getElementById('info');
let btnAssistir = document.getElementById('btnAssistir');
let btnInfo = document.getElementById('btnInfo');
let sair = document.getElementsByClassName('close')[0];


btnAssistir.addEventListener('click', () => {
    modal.style.display = "block";
})

sair.addEventListener('click', () => {
    modal.style.display = "none";
})

btnInfo.addEventListener('click', () => {
    modal.style.display = "block";
    modalCont.style.display = "none";
    modalInfo.style.display = "block";
})

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
        location.reload();
    }
}