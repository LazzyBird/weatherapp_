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

let apiKey = "4085d4e1d22f7753a9278110dff3ae74";
let cityName;

function usersCity(event) {
  let city = document.querySelector("#city-header");
  let cityInput = document.querySelector("#cityInput");
  cityName = cityInput.value.trim();

  if (cityName === "") {
    cityInput.placeholder = "Please enter a city";
    cityInput.value = "";
    return;
  }

  city.innerHTML = cityName;
  cityInput.value = "";

  searchCity();
}

document.getElementById("search-city").addEventListener("click", usersCity);
document
  .getElementById("cityInput")
  .addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      usersCity();
    }
  });


function searchCity() {
  let uriWeather = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

  axios.get(uriWeather)
    .then(function (response) {
      let currentTemp = Math.round(response.data.main.temp);
      let showTemp = document.getElementById("currentTemp");
      showTemp.innerHTML = `${currentTemp}°`;
    })
    .catch(function (error) {
      console.log(error);
    });
}

document
  .getElementById("cityInput")
  .addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      usersCity();
    }
  });
