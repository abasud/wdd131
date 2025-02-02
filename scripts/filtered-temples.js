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

const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/320x200/aba-nigeria-temple-lds-1636397-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/320x200/manti-temple-766504-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/320x200/payson-utah-temple-daylight-1416668-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/320x200/yigo_guam_temple_4.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/320x200/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/320x200/lima-peru-mormon-temple-911889-wallpaper.jpg"
    },  
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/320x200/mexico-city-temple-exterior-1522387-wallpaper.jpg"
    },
    {
        templeName: "Bogotá Colombia",
        location: "Bogotá, Colombia",
        dedicated: "1999, April, 24",
        area: 53500,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/bogota-colombia/320x200/bogota-colombia-temple-lds-1029726-wallpaper.jpg"
    },
    {
        templeName: "Rome Italy",
        location: "Rome, Italy",
        dedicated: "2019, March, 10",
        area: 41010,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rome-italy/2019/320x200/5-Rome-Temple-2160345.jpg"
    },
    {
        templeName: "Fukuoka Japan",
        location: "Fukuoka, Japan",
        dedicated: "2000, June, 11",
        area: 10700,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/fukuoka-japan/320x200/fukuoka-japan-temple-lds-306863-wallpaper.jpg"
    },
    {
        templeName: "Trujillo Perú",
        location: "Trujillo Perú",
        dedicated: "2015, June, 21",
        area: 28200,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/trujillo-peru/320x200/trujillo-peru-temple-exterior-1449769-wallpaper.jpg"
    },        
    {
        templeName: "Barranquilla Colombia",
        location: "Barranquilla, Colombia",
        dedicated: "2018, December, 9",
        area: 25349,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/barranquilla-colombia/320x200/3-Barranquilla-Columblia-Temple-2135198.jpg"
    }
  ];

const container = document.querySelector(".temples");
const pageName = document.querySelector("h2")

function createTempleCard(temples) {
    container.innerHTML = "";
    temples.forEach(temple => {
        let card = document.createElement("section");
        card.style.backgroundColor = "rgba(240, 240, 240, 1)";
        card.style.border = "1px solid lightgray";
        card.style.padding = "1rem";

        let title = document.createElement("h3");
        title.textContent = temple.templeName; 

        let information = document.createElement("ul");

        let liLocation = document.createElement("li");
        liLocation.innerHTML = `<strong style = "color: #093A3E; font-size: 0.8rem;">LOCATION:</strong> ${temple.location}`;

        let liDedicated = document.createElement("li");
        liDedicated.innerHTML = `<strong style = "color: #093A3E; font-size: 0.8rem;">DEDICATED:</strong> ${temple.dedicated}`;

        let liSize = document.createElement("li");
        liSize.innerHTML = `<strong style = "color: #093A3E; font-size: 0.8rem;">SIZE:</strong> ${temple.area} sq ft`;

        information.appendChild(liLocation);
        information.appendChild(liDedicated);
        information.appendChild(liSize);

        let img = document.createElement("img");
        img.src = temple.imageUrl;
        img.alt = temple.templeName;
        img.loading = "lazy";

        card.appendChild(title);
        card.appendChild(information);
        card.appendChild(img);

        container.appendChild(card);
    });
}

createTempleCard(temples);

const home = document.querySelector(".home");
home.addEventListener("click", () => {
    createTempleCard(temples);
    pageName.textContent = "Home"
});

const old = document.querySelector(".old");
old.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => parseInt(temple.dedicated.split(",")[0]) < 1900));
    pageName.textContent = "Older Temples"
});

const newTemple = document.querySelector(".new");
newTemple.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => parseInt(temple.dedicated.split(",")[0]) > 2000));
    pageName.textContent = "Newer Temples"
});

const large = document.querySelector(".large");
large.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => temple.area > 90000));
    pageName.textContent = "Larger Temples"
});

const small = document.querySelector(".small");
small.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => temple.area < 10000));
    pageName.textContent = "Smaller Temples"
});