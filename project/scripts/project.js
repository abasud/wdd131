document.getElementById("currentYear").textContent = new Date().getFullYear();

const nav = document.querySelector(".navigation");
const hambutton = document.querySelector("#menu");

hambutton.addEventListener("click", function() {
    nav.classList.toggle("show");
    hambutton.classList.toggle("show");
});

const countries = [
    {name: "Afghanistan"}, {name: "Albania"}, {name: "Algeria"},
    {name: "American Samoa"}, {name: "Andorra"}, {name: "Angola"},
    {name: "Anguilla"}, {name: "Antarctica"}, {name: "Antigua and Barbuda"},
    {name: "Argentina"}, {name: "Armenia"}, {name: "Aruba"},
    {name: "Australia"}, {name: "Austria"}, {name: "Azerbaijan"},
    {name: "Bahamas"}, {name: "Bahrain"}, {name: "Bangladesh"},
    {name: "Barbados"}, {name: "Belarus"}, {name: "Belgium"},
    {name: "Belize"}, {name: "Benin"}, {name: "Bermuda"},
    {name: "Bhutan"}, {name: "Bolivia"}, {name: "Bosnia and Herzegovina"},
    {name: "Botswana"}, {name: "Brazil"}, {name: "Brunei Darussalam"},
    {name: "Bulgaria"}, {name: "Burkina Faso"}, {name: "Burundi"},
    {name: "Cambodia"}, {name: "Cameroon"}, {name: "Canada"},
    {name: "Cape Verde"}, {name: "Cayman Islands"}, {name: "Central African Republic"},
    {name: "Chad"}, {name: "Chile"}, {name: "China"},
    {name: "Christmas Island"}, {name: "Cocos (Keeling) Islands"}, {name: "Colombia"},
    {name: "Comoros"}, {name: "Congo"}, {name: "Congo, The Democratic Republic of the"},
    {name: "Cook Islands"}, {name: "Costa Rica"}, {name: "Cote D'Ivoire"},
    {name: "Croatia"}, {name: "Cuba"}, {name: "Cyprus"},
    {name: "Czech Republic"}, {name: "Denmark"}, {name: "Djibouti"},
    {name: "Dominica"}, {name: "Dominican Republic"}, {name: "Ecuador"},
    {name: "Egypt"}, {name: "El Salvador"}, {name: "Equatorial Guinea"},
    {name: "Eritrea"}, {name: "Estonia"}, {name: "Ethiopia"},
    {name: "Fiji"}, {name: "Finland"}, {name: "France"},
    {name: "Gabon"}, {name: "Gambia"}, {name: "Georgia"},
    {name: "Germany"}, {name: "Ghana"}, {name: "Greece"},
    {name: "Grenada"}, {name: "Guatemala"}, {name: "Guinea"},
    {name: "Guinea-Bissau"}, {name: "Guyana"}, {name: "Haiti"},
    {name: "Honduras"}, {name: "Hungary"}, {name: "Iceland"},
    {name: "India"}, {name: "Indonesia"}, {name: "Iran"},
    {name: "Iraq"}, {name: "Ireland"}, {name: "Israel"},
    {name: "Italy"}, {name: "Jamaica"}, {name: "Japan"},
    {name: "Jordan"}, {name: "Kazakhstan"}, {name: "Kenya"},
    {name: "Kiribati"}, {name: "Kuwait"}, {name: "Kyrgyzstan"},
    {name: "Laos"}, {name: "Latvia"}, {name: "Lebanon"},
    {name: "Lesotho"}, {name: "Liberia"}, {name: "Libya"},
    {name: "Liechtenstein"}, {name: "Lithuania"}, {name: "Luxembourg"},
    {name: "Madagascar"}, {name: "Malawi"}, {name: "Malaysia"},
    {name: "Maldives"}, {name: "Mali"}, {name: "Malta"},
    {name: "Mexico"}, {name: "Moldova"}, {name: "Monaco"},
    {name: "Mongolia"}, {name: "Montenegro"}, {name: "Morocco"},
    {name: "Mozambique"}, {name: "Myanmar"}, {name: "Namibia"},
    {name: "Nauru"}, {name: "Nepal"}, {name: "Netherlands"},
    {name: "New Zealand"}, {name: "Nicaragua"}, {name: "Niger"},
    {name: "Nigeria"}, {name: "North Korea"}, {name: "Norway"},
    {name: "Oman"}, {name: "Pakistan"}, {name: "Panama"},
    {name: "Peru"}, {name: "Philippines"}, {name: "Poland"},
    {name: "Portugal"}, {name: "Qatar"}, {name: "Romania"},
    {name: "Russia"}, {name: "Rwanda"}, {name: "Saint Kitts and Nevis"},
    {name: "Saint Lucia"}, {name: "Saint Vincent and the Grenadines"},
    {name: "Samoa"}, {name: "San Marino"}, {name: "Saudi Arabia"},
    {name: "Senegal"}, {name: "Serbia"}, {name: "Seychelles"},
    {name: "Sierra Leone"}, {name: "Singapore"}, {name: "Slovakia"},
    {name: "Slovenia"}, {name: "Solomon Islands"}, {name: "South Africa"},
    {name: "Spain"}, {name: "Sri Lanka"}, {name: "Sudan"},
    {name: "Suriname"}, {name: "Sweden"}, {name: "Switzerland"},
    {name: "Syria"}, {name: "Taiwan"}, {name: "Tajikistan"},
    {name: "Tanzania"}, {name: "Thailand"}, {name: "Togo"},
    {name: "Tonga"}, {name: "Trinidad and Tobago"}, {name: "Tunisia"},
    {name: "Turkey"}, {name: "Turkmenistan"}, {name: "Tuvalu"},
    {name: "Uganda"}, {name: "Ukraine"}, {name: "United Arab Emirates"},
    {name: "United Kingdom"}, {name: "United States"}, {name: "Uruguay"},
    {name: "Uzbekistan"}, {name: "Vanuatu"}, {name: "Venezuela"},
    {name: "Vietnam"}, {name: "Yemen"}, {name: "Zambia"},
    {name: "Zimbabwe"}
]

const datalist = document.querySelector("#countries");

function addCountry(countries) {
    countries.forEach((country) => {
        let countryOption = document.createElement("option");
        countryOption.value = country.name;
        datalist.appendChild(countryOption);
    });
}

addCountry(countries);


document.addEventListener("DOMContentLoaded", function() {
    if (document.body.id === "interest") {
        let counter = getCounter() || 0;

        function setCounter() {
            localStorage.setItem("Service Interest", `${counter}`);
        }

        function getCounter() {
            return parseInt(localStorage.getItem("Service Interest")) || 0;
        }

        counter += 1;
        setCounter();
    }
});

