function onJSONReady(json) {
  const messageBox = document.querySelector("#message");
  const weatherBox = document.querySelector('#weather-box');

  if (!json.main) {
    onNotFound(messageBox, weatherBox);
    return;
  }

  onFound(json, messageBox, weatherBox);
}

function onNotFound(messageBox, weatherMain) {
  messageBox.classList.remove('hidden');
  weatherMain.classList.add('hidden');

  messageBox.style.fontSize = '30px';
}

function onFound(json, messageBox, weatherMain) {
  messageBox.classList.add('hidden');
  weatherMain.classList.remove('hidden');

  setDescription(json);
  setCityName(json);
  setTemp(json);
  setIcon(json);
  setPressure(json);
  setHumidity(json);
}

function setCityName(json) {
  const city = document.querySelector('#city-name');
  const country = json.sys.country;
  city.innerHTML = json.name + ', ' + country;
}

function setDescription(json) {
  const description = document.querySelector('#description');
  const result = json.weather[0].description;
  description.textContent =
  "Description: " + result.charAt(0).toUpperCase() + result.slice(1);
}

function setTemp(json) {
  const temp = document.querySelector("#current-temp");
  temp.innerHTML = '';
  temp.innerHTML = Math.floor(json.main.temp) + '&#186';
}


function setIcon(json) {
  const filename = json.weather[0].icon;
  const iconBox = document.querySelector("#weather-icon");
  iconBox.src = 'http://openweathermap.org/img/wn/' + filename + '@2x.png'
}

function setPressure(json) {
  const windSpeed = document.querySelector("#pressure");
  windSpeed.innerHTML =
  "Atmospheric pressure: " + json.main.pressure + " hPa";
}

function setHumidity(json) {
  const humidity = document.querySelector('#humidity');
  humidity.innerHTML = "Humidity: " + json.main.humidity + " %";
}

function retrieveData(url) {
  request = new XMLHttpRequest();
  request.open("GET", url, true);
  request.onreadystatechange = function() {
      if (request.readyState == 4 && request.status == 200) {
          result =  request.responseText;
          json   = JSON.parse(result);
          onJSONReady(json);
      }
  }
  request.send();
}

function toC() {
  const textInput = document.querySelector('#search-text');
  const query = encodeURIComponent(textInput.value);
  const URL_FETCH = BASE_URL + query + UNIT_METRIC + API_KEY;

  retrieveData(URL_FETCH);
}

function toF(event) {
  event.preventDefault();
  const textInput = document.querySelector('#search-text');
  const query = encodeURIComponent(textInput.value);

  const URL_FETCH = BASE_URL + query + UNIT_IMPERIAL + API_KEY;
  retrieveData(URL_FETCH);
}

var currentTemp = 0;

const API_KEY = '&APPID=07091f71950fdfeb3cc3c6ffd8a79857';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather?q=';
const UNIT_METRIC = '&units=metric';
const UNIT_IMPERIAL = '&units=imperial';

const searchButton = document.querySelector('form');
searchButton.addEventListener('submit', toF);

const farenheitButton = document.querySelector('#toF');
farenheitButton.addEventListener('click', toF);

const celciusButton = document.querySelector('#toC');
celciusButton.addEventListener('click', toC);
