let d = new Date();
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let month = months[d.getMonth()];
let day = days[d.getDay()];
let hour = d.getHours();
let minute = d.getMinutes();
let date = d.getDate();
let year = d.getFullYear();
year = year - 2000;

if(minute < 10) minute = "0" + minute;
if(hour < 10) hour = "0" + hour;

document.querySelector(".time-date").innerHTML = `${hour}:${minute} - ${day}, ${date} ${month} '${year}`; 