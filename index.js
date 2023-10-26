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
//efecto blur al header
function blurHeader() {
    const header = document.querySelector('#header')
    this.scrollY >= 50 ? header.classList.add('blurHeader') : header.classList.remove('blurHeader')
}
window.addEventListener('scroll', blurHeader);

//para manejar EmailJs
const contactForm = document.querySelector('#contactForm')
const contactMessage = document.querySelector('#contactMessage')

const enviarEmail = (e) => {
    e.preventDefault()

    //serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_z0jsv7t', 'template_y4ml7s4','#contactForm', 'g-kIBePYIAvhw72xf')
    .then(() => {
        contactMessage.textContent = 'Mensaje enviado con exito ✅'
        setTimeout(() => {
            contactMessage.textContent = ''
        }, 5000)
        contactForm.reset()
    }, () => {
        contactMessage.textContent = 'Mensaje no enviado (error en el servidor)❌',
        console.log(error)
    })
}

contactForm.addEventListener('submit', enviarEmail)