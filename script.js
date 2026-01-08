const apiKey        = "477a188871d6483c651ab7381ae3ce27";
const apiUrl        = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const weatherIcon   = document.querySelector('.weather-icon');
const weatherText   = document.querySelector('.weather-text');

async function checkWeather() {

    const responseJson      = await fetch('config.json');
    
    if(!responseJson.ok) {
        throw new Error(`Erreur de chargement de config.json': ${responseJson.status} ${responseJson.statusText}`);
    }

    const config            = await responseJson.json();
    const city              = config.city 
    const response          = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data                = await response.json();

    if(!city) {
        console.error('Aucune ville définie dans config.json');
    }
    else {

        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
        document.querySelector('.wind').innerHTML = Math.round(data.wind.speed) + " km/h";

        switch(data.weather[0].main) {

            case "Clouds":
                weatherIcon.src = "images/clouds.png";
                weatherText.textContent = "Nuageux";
                break;

            case "Clear":
                weatherIcon.src = "images/clear.png";
                weatherText.textContent = "Ciel dégagé";
                break;

            case "Drizzle":
                weatherIcon.src = "images/drizzle.png";
                weatherText.textContent = "Pluie fine";
                break;

            case "Mist":
                weatherIcon.src = "images/mist.png";
                weatherText.textContent = "brume";
                break;

            case "Rain":
                weatherIcon.src = "images/rain.png";
                weatherText.textContent = "Pluie";
                break;
            case "Snow":
                weatherIcon.src = "images/snow.png";
                weatherText.textContent = "Neige";
                break;

            default:
                weatherIcon.src = "";
                weatherText.textContent = "";
        }

        

    }
        
}

setInterval(checkWeather(), 3600000);



// if(data.weather[0].main == "Clouds") {
        //     weatherIcon.src = "images/clouds.png";
        //     weatherText.textContent = "Nuageux";
        // }
        // else if(data.weather[0].main == "Clear") {
        //     weatherIcon.src = "images/clear.png";
        //     weatherText.textContent = "Ciel dégagé";
        // }
        // else if(data.weather[0].main == "Drizzle") {
        //     weatherIcon.src = "images/drizzle.png";
        //     weatherText.textContent = "Pluie fine";
        // }
        // else if(data.weather[0].main == "Mist") {
        //     weatherIcon.src = "images/mist.png";
        //     weatherText.textContent = "brume";
        // }
        // else if(data.weather[0].main == "Rain") {
        //     weatherIcon.src = "images/rain.png";
        //     weatherText.textContent = "Pluie";
        // }
        // else if(data.weather[0].main == "Snow") {
        //     weatherIcon.src = "images/snow.png";
        //     weatherText.textContent = "Neige";
        // }