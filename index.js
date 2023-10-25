// PARA MOSTRAR MENU
const navMenu = document.querySelector("#navMenu");
const navToggle = document.querySelector("#navToggle");
const navClose = document.querySelector("#navClose");
//show menu
if(navToggle){
    navToggle.addEventListener("click", () => {
        navMenu.classList.add('showMenu')
    })
}
//close menu
if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('showMenu')
    })
}
//cerrar menu al clickear link
const navLink = document.querySelectorAll('.navLink')//crea una nodeList

function linkAction() {
    const navMenu = document.querySelector('#navMenu');
    navMenu.classList.remove('showMenu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))//recorro la nodeList creada por querySelectorAll