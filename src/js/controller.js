import { KEY, units, limit } from './config.js';
import * as model from './model.js';
import { renderError } from './view.js';

// Buttons
const searchBtn = document.querySelector('.search-icon-btn');
const searchInput = document.querySelector('.search-input');
const dailyForecast = document.querySelector('.container-forecast-week');
const hourlyForecast = document.querySelector('.container-forecast-week2');
const todayBtn = document.querySelector('.today-btn');
const weekBtn = document.querySelector('.week-btn');

// Event Handlers
// Display today's weather (hourly)
todayBtn.addEventListener('click', function () {
  todayBtn.classList.toggle('chosen-btn');
  weekBtn.classList.toggle('chosen-btn');
  dailyForecast.classList.toggle('hidden');
  hourlyForecast.classList.toggle('hidden');
});

// Display this week's weather (daily)
weekBtn.addEventListener('click', function () {
  todayBtn.classList.toggle('chosen-btn');
  weekBtn.classList.toggle('chosen-btn');
  dailyForecast.classList.toggle('hidden');
  hourlyForecast.classList.toggle('hidden');
});

// Press enter in input field
searchInput.addEventListener('keyup', (e) => {
  const data = searchInput.value;
  if (e.keyCode === 13) {
    fetchCityData(data);
    clear();
  }
});

// Click on search icon
searchBtn.addEventListener('click', function () {
  const data = searchInput.value;
  fetchCityData(data);
  clear();
});

const clear = function () {
  searchInput.value = '';
};

// Update current date and time when load page
const todayDate = function () {
  const date = new Date().toLocaleTimeString('en-nz', {
    weekday: 'long',
    hour: '2-digit',
    minute: '2-digit',
  });

  const dayAndTime = document.querySelector('.day-and-time');
  const markup = `
      <span>${date}</span>
    `;
  dayAndTime.innerHTML = '';
  dayAndTime.insertAdjacentHTML('afterbegin', markup);
};
window.addEventListener('load', todayDate());

// Fetch city input's lattitude and longitude
const fetchCityData = async function (city) {
  const url = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${KEY}`;

  try {
    const res = await fetch(url);
    const data = await res.json();

    model.createLocationObject(data);

    if (!res.ok) throw new Error(`${data.message} (${res.status})`);
  } catch (err) {
    renderError();
    console.error(err);
  }
};

// Fetch city weather data based on its coordinates
export const fetchWeatherData = async function (coords) {
  const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${coords.lat}&lon=${coords.lon}&units=${units}&exclude=minutely&appid=${KEY}`;

  try {
    const res = await fetch(url);
    const data = await res.json();

    model.createCurrentWeatherObject(data);
    model.createDailyWeatherObject(data);
    model.createHourlyWeatherObject(data);

    if (!res.ok) throw new Error(`${data.message} (${res.status})`);
  } catch (err) {
    renderError();
    console.error(err);
  }
};
