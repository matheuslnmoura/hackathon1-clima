let cidade = 'London';
const APIKEY = 'a6c606a3da0d5f480da526e7352ab847';


let promisse = axios.get(`https:/api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${APIKEY}`);
promisse.then( (response) => {
    let infoHTML = document.querySelector("body");
    infoHTML.innerHTML +=`
    Temperature = ${(parseFloat(response.data.main.temp) - parseFloat(273,15)).toFixed(2)}°
    Feels like = ${(parseFloat(response.data.main.feels_like) - parseFloat(273,15)).toFixed(2)}°
    Temp min = ${(parseFloat(response.data.main.temp_min) - parseFloat(273,15)).toFixed(2)}°
    Temp max = ${(parseFloat(response.data.main.temp_max) - parseFloat(273,15)).toFixed(2)}°
    ${response.data.weather[0].main} ${response.data.wind.speed} m/s 

    `
    console.log(response.data);
});
promisse.catch( (erro) => {
    console.log(erro.response.status);
    alert("Não foi possível encontrar a cidade");
});