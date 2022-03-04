const APIKEY = 'a6c606a3da0d5f480da526e7352ab847';

function searchCity(){
    let city = document.querySelector(".location-search").value; 
    getWeatherByCity(city);
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
    let infoHTML = document.querySelector("body");
    infoHTML.innerHTML +=`
    <p>Temperature = ${(parseFloat(response.data.main.temp) - parseFloat(273,15)).toFixed(2)}°</p>
    <p>Feels like = ${(parseFloat(response.data.main.feels_like) - parseFloat(273,15)).toFixed(2)}°</p>
    <p>Temp min = ${(parseFloat(response.data.main.temp_min) - parseFloat(273,15)).toFixed(2)}°</p>
    <p>Temp max = ${(parseFloat(response.data.main.temp_max) - parseFloat(273,15)).toFixed(2)}°</p>
    <p>${response.data.weather[0].main} = ${response.data.weather[0].description}   ${response.data.clouds.all}% </p>
    <p>Wind = ${response.data.wind.speed} km/h </p>
    <p>Humidity = ${response.data.main.humidity}%</p>
    `
    console.log(response.data);
}