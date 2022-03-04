const APIKEY = 'a6c606a3da0d5f480da526e7352ab847';

function searchCity(){
    let city = document.querySelector(".location-search").value; 
    getWeatherByCity(city);
    document.querySelector(".city").innerHTML = city;
    
}


function getWeatherByCity(cityName){
    let promisse = axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIKEY}`);
    promisse.then(attWeatherHTML)
    promisse.catch( (erro) => {
        console.log(erro.response.status);
        alert("Não foi possível encontrar a cidade");
    });
}

function attWeatherHTML(response){
    let infoHTML = document.querySelector(".general-container");
    infoHTML.innerHTML = "";
    infoHTML.innerHTML =`
    <span class="container-item"><h3>Weather Info</h3></span>
    <div class="weather-infos">
        <span class="container-item">Feels Like</span>
        <span class="container-value">${(parseFloat(response.data.main.feels_like) - parseFloat(273,15)).toFixed(2)}ºC</span>
    </div>

    <div class="weather-infos">
        <span class="container-item">Min</span>
        <span class="container-value">${(parseFloat(response.data.main.temp_min) - parseFloat(273,15)).toFixed(2)}ºC</span>
    </div>

    <div class="weather-infos">
        <span class="container-item">Max</span>
        <span class="container-value">${(parseFloat(response.data.main.temp_max) - parseFloat(273,15)).toFixed(2)}ºC</span>
    </div>

    <div class="weather-infos">
        <span class="container-item">Wind</span>
        <span class="container-value">${response.data.wind.speed} km/h</span>
    </div>

    <div class="weather-infos">
        <span class="container-item">Humidity</span>
        <span class="container-value">${response.data.main.humidity}%</span>
    </div>
    `   

    document.querySelector(".temperature").innerHTML = `
    ${(parseFloat(response.data.main.temp) - parseFloat(273,15)).toFixed(0)}º
    `;
}