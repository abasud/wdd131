document.getElementById("currentYear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;

const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');
const hideh1 = document.querySelector('h1');

hambutton.addEventListener('click', function() {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
    hideh1.classList.toggle('hide');
});