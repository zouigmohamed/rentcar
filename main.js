let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    navbar.classList.toggle('active');
    menu.classList.toggle('bx-x');
}
window.onscroll = () => {
    navbar.classList.remove('active');
    menu.classList.remove('bx-x');
}
const sr = ScrollReveal ({
    distance:'60px',
    duration:2500,
    delay:400,
    reset:true
})
sr.reveal('.text',{delay:100, origin:'top'})
sr.reveal('.form-container form',{delay:200, origin:'left'})
sr.reveal('.heading',{delay:600, origin:'top'})
sr.reveal('.ride-container .box',{delay:600, origin:'top'})
sr.reveal('.services-container .box',{delay:600, origin:'top'})
sr.reveal('.about-container .box',{delay:600, origin:'top'})
sr.reveal('.reviews-container ',{delay:600, origin:'top'})
sr.reveal('.newsletter .box ',{delay:400, origin:'bottom'})