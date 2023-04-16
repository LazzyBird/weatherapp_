const now = new Date();
let actualDate = document.getElementById("actiual_date");
let date = now.getDate();
let year = now.getFullYear();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let month = months[now.getMonth()];
let hours = now.getHours();
let minutes = now.getMinutes();
//let seconds = now.getSeconds();  - how to do continuous refreshing withiut page update
actualDate.innerHTML = `${day}, ${date} of ${month}, ${year}, ${hours}:${minutes}`;
function formatDate() {
  return `${day}, ${month} ${date}, ${year}, ${hours}, ${minutes}, ${seconds}`;
}
function locateCity(event) {
  let city = document.querySelector("#city-header");
  let cityInput = document.querySelector("#cityInput");
  let cityName = cityInput.value.trim();
  if (cityName === "") {
    cityInput.placeholder = "Please enter a city";
    cityInput.value = "";
    return;
  }

  city.innerHTML = cityName;
  cityInput.value = "";
}

document.getElementById("search-city").addEventListener("click", locateCity);
document
  .getElementById("cityInput")
  .addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      locateCity();
    }
  });
let isCelsius = true; // Set default unit to Celsius
const currentTemp = document.querySelector("#currentTemp");
const unit = document.querySelector("#unit");

function convertTemp() {
  let temp = parseFloat(currentTemp.textContent);

  if (isCelsius) {
    // Convert Celsius to Fahrenheit
    temp = temp * 1.8 + 32;
    isCelsius = false;
    unit.textContent = "ºF";
  } else {
    // Convert Fahrenheit to Celsius
    temp = (temp - 32) / 1.8;
    isCelsius = true;
    unit.textContent = "ºC";
  }

  currentTemp.textContent = temp.toFixed(1);
}

document.querySelector("#convertBtn").addEventListener("click", convertTemp);

/*let apiKey = "4085d4e1d22f7753a9278110dff3ae74";
let latitude, longitude;

function showPosition(position) {
  console.log(position.coords.longitude);
  console.log(position.coords.latitude);
  latitude = position.coords.latitude;
  longitude = position.coords.longitude;

  let uriWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  axios.get(uriWeather).then(getWeather);
}

function getWeather(response) {
  let currentTemp = Math.round(response.data.main.temp);
  console.log(currentTemp);
  let showTemp = document.querySelector("h1");
  showTemp.innerHTML = `It is ${currentTemp}°C`;
}

navigator.geolocation.getCurrentPosition(showPosition);

*/
/* let isCelsius = true; // Set default unit to Celsius
const currentTemp = document.querySelector("#currentTemp");
const unit = document.querySelector("#unit");

function convertTemp() {
  let temp = parseFloat(currentTemp.textContent);

  if (isCelsius) {
    // Convert Celsius to Fahrenheit
    temp = temp * 1.8 + 32;
    isCelsius = false;
    unit.textContent = "ºF";
  } else {
    // Convert Fahrenheit to Celsius
    temp = (temp - 32) / 1.8;
    isCelsius = true;
    unit.textContent = "ºC";
  }

  currentTemp.textContent = temp.toFixed(1);
}

document.querySelector("#convertBtn").addEventListener("click", convertTemp);
*/
/*function convertToFahrenheit(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = 66;
}

function convertToCelsius(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = 19;
}
let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", convertToFahrenheit);

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", convertToCelsius); */