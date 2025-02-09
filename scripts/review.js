document.getElementById("currentYear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;

let counter = getCounter() || 0;

function setCounter() {
    localStorage.setItem('Reviews', JSON.stringify(counter));
}

function getCounter() {
    return parseInt(localStorage.getItem('Reviews')) || 0;
}

document.addEventListener("DOMContentLoaded", function() {
    counter += 1;
    setCounter();
})