// PARA MOSTRAR MENU
const navMenu = document.querySelector("#navMenu");
const navToggle = document.querySelector("#navToggle");
const navClose = document.querySelector("#navClose");

//show menu
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("showMenu");
  });
}
//close menu
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("showMenu");
  });
}

//cerrar menu al clickear link
const navLink = document.querySelectorAll(".navLink"); //crea una nodeList

function linkAction() {
  const navMenu = document.querySelector("#navMenu");
  navMenu.classList.remove("showMenu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction)); //recorro la nodeList creada por querySelectorAll

//efecto blur al header
function blurHeader() {
  const header = document.querySelector("#header");
  this.scrollY >= 50
    ? header.classList.add("blurHeader")
    : header.classList.remove("blurHeader");
}
window.addEventListener("scroll", blurHeader);
//cambiar tema de color
const elementos = {
    navSun: document.querySelector("#navSun"),
    navMoon : document.querySelector("#navMoon"),
    sectionTitle : document.querySelectorAll(".sectionTitle"),
    sectionSubtitle : document.querySelectorAll(".sectionSubtitle"),
    body : document.querySelector("body"),
    home : document.querySelector(".home"),
    skills : document.querySelector(".skills"),
    projects : document.querySelector(".projects"),
    footer : document.querySelector("footer"),
    homeSubtitle : document.querySelector(".homeSubtitle"),
    homeEducation : document.querySelector(".homeEducation"),
    footerTitle : document.querySelector(".footerTitle"),
    footerEducation : document.querySelector(".footerEducation"),
    li : document.querySelectorAll('li'),
    servicesCard: document.querySelectorAll('.servicesCard'),
    header: document.querySelector('#header')
}

function addTheme() {

  elementos.sectionTitle.forEach((n) => n.classList.toggle("txtColorDark"));
  elementos.sectionSubtitle.forEach((n) => n.classList.toggle("txtColorDark"));
  elementos.li.forEach((n) => n.classList.toggle("txtColorDark"));
  elementos.body.classList.toggle("themeLight");
  elementos.servicesCard.forEach((n) => n.classList.toggle("bgLight"));
  elementos.header.classList.toggle('dark');
  navMenu.classList.toggle('dark');
  
  for (const key in elementos) {
    if (key === 'homeSubtitle'|| key === 'homeEducation' || key === 'footerTitle'|| key === 'footerEducation') {
       elementos[key].classList.toggle('txtColorDark')
    }
  }

  for (const key in elementos) {
    if (key === 'home' || key === 'skills' || key === 'projects' ||key === 'footer') {
        elementos[key].classList.toggle('bgLight')
    }
  }
}

function handleButtonTheme() {
  navSun.classList.toggle("hiddenBtn"),
    navMoon.classList.toggle("hiddenBtn"),
    addTheme()
}


if (navSun) {
  navSun.addEventListener("click", handleButtonTheme);
}
if (navMoon) {
  navMoon.addEventListener("click", handleButtonTheme);
}
//para manejar EmailJs
const contactForm = document.querySelector("#contactForm");
const contactMessage = document.querySelector("#contactMessage");

const enviarEmail = (e) => {
  e.preventDefault();

  //serviceID - templateID - #form - publicKey
  emailjs
    .sendForm(
      "service_z0jsv7t",
      "template_y4ml7s4",
      "#contactForm",
      "g-kIBePYIAvhw72xf"
    )
    .then(
      () => {
        contactMessage.textContent = "Mensaje enviado con exito ✅";
        setTimeout(() => {
          contactMessage.textContent = "";
        }, 5000);
        contactForm.reset();
      },
      () => {
        (contactMessage.textContent =
          "Mensaje no enviado (error en el servidor)❌"),
          console.log(error);
      }
    );
};

contactForm.addEventListener("submit", enviarEmail);

//mostrar boton scrollUp
const scrollUp = () => {
  const scrollUp = document.querySelector("#scrollUp");
  this.scrollY >= 350
    ? scrollUp.classList.add("showScroll")
    : scrollUp.classList.remove("showScroll");
};
window.addEventListener("scroll", scrollUp);

// scroll sections active link
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollY = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight, //toma la altura total de cada seccion
      sectionTop = current.offsetTop - 58, //toma la distancia desde el border superior de la seccion hasta el borde superior del contenido dentro de la seccion y le resta 58px (58px que se obtienen de restar 80px de padding superior en cada seccion con 32px de padding inferior de la seccion anterior )
      sectionId = current.getAttribute("id"), //toma el id de cada seccion iterada
      sectionClass = document.querySelector(
        ".navMenu a[href*=" + sectionId + "]"
      );

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionClass.classList.add("activeLink");
    } else {
      sectionClass.classList.remove("activeLink");
    }
  });
};
window.addEventListener("scroll", scrollActive);

//animacion con scrollReveal
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
  // reset: true
});
sr.reveal(`.homeData, .homeSocial, .contactContainer, .footerContainer`);
sr.reveal(`.homeImage`, { origin: "bottom" });
sr.reveal(`.aboutData, .skillsData`, { origin: "left" });
sr.reveal(`.aboutImage, .skillsContent`, { origin: "right" });
sr.reveal(`.servicesCard, .projectsCard`, { interval: 100 });
