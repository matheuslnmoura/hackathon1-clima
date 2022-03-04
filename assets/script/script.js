let latitude
let longitude
let cityName
const API_KEY = 'a6c606a3da0d5f480da526e7352ab847';

const getLocation = () => {
    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);
    } else{
        alert("O seu navegador não suporta Geolocalização.");
    }
}
const getWeather = () =>{
    if(latitude==undefined && longitude==undefined){
        getCityName()
    }
}

const showPosition = (position) =>{
    latitude= position.coords.latitude 
    longitude = position.coords.longitude;
    getWeatherByNavigatorLocation()
}
getLocation()

const getWeatherByNavigatorLocation = () =>{
    console.log(axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`))
}

const getWeatherByCityName= () =>{
    console.log(axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`))
}

const getCityName = () =>{
    cityName = prompt("cidade");
    getWeatherByCityName()
}

getWeather()



