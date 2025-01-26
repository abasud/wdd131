document.getElementById("currentYear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;

document.addEventListener("DOMContentLoaded", function () {
    let temperatureElement = document.querySelector(".temperature");
    let windSpeedElement = document.querySelector(".wind_speed");
    let windChillElement = document.querySelector("#windchill");

    let temperature = parseFloat(temperatureElement.textContent);
    let windSpeed = parseFloat(windSpeedElement.textContent);

    const calculateWindChill = function (temp, wind) {
        return 13.12 + 0.6215 * temp - 11.37 * wind ** 0.16 + 0.3965 * temp * wind ** 0.16;
    };

    if (temperature <= 10 && windSpeed > 4.8) {
        windChillElement.textContent = calculateWindChill(temperature, windSpeed).toFixed(2);
    } else {
        windChillElement.textContent = "N/A";
    }
});

