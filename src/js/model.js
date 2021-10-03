import * as view from './view.js';
import * as controller from './controller.js';

// Create city input object
export const createLocationObject = function (data) {
  const location = data[0];

  const cityData = {
    city: location.name,
    country: location.country,
    lat: location.lat,
    lon: location.lon,
  };

  view.renderCityData(cityData);
  controller.fetchWeatherData(cityData);
};

export const createCurrentWeatherObject = function (data) {
  const currentDay = [];
  const timezone = data.timezone;

  const currentData = {
    temperature: Math.round(data.current.temp),
    weatherDescription: data.current.weather[0].description,
    wind: (data.current.wind_speed * 3.6).toFixed(2), // Convert m/s to km/h
    precipitation: Math.round(data.hourly[0].pop * 100),
    humidity: data.current.humidity,
    feelsLike: Math.round(data.current.feels_like),
    // timezone: data.timezone,
    sunrise: new Date(data.current.sunrise * 1000).toLocaleTimeString('en-nz', {
      hour: '2-digit',
      minute: '2-digit',
      timeZone: `${timezone}`,
      timeZoneName: 'short',
    }),
    sunset: new Date(data.current.sunset * 1000).toLocaleTimeString('en-nz', {
      hour: '2-digit',
      minute: '2-digit',
      timeZone: `${timezone}`,
      timeZoneName: 'short',
    }),
    locationTime: new Date().toLocaleTimeString('en-nz', {
      weekday: 'long',
      hour: '2-digit',
      minute: '2-digit',
      timeZone: `${timezone}`,
      timeZoneName: 'short',
    }),
    weatherID: data.current.weather[0].id,
    weatherImgPath: '',
  };
  // Push object into an array to use createImagePath function
  currentDay.push(currentData);
  createImagePath(currentDay);

  view.renderCurrentWeather(currentData);
};

export const createDailyWeatherObject = function (data) {
  const daily = data.daily;
  const days = [];
  console.log(daily);
  for (let i = 0; i < daily.length; i++) {
    const dailyData = {
      weekday: new Date(daily[i].dt * 1000).toLocaleDateString('en-nz', {
        weekday: 'short',
      }),
      weather: daily[i].weather[0].main,
      weatherID: daily[i].weather[0].id,
      weatherImgPath: '',
      max: Math.round(daily[i].temp.max),
      min: Math.round(daily[i].temp.min),
    };
    days.push(dailyData);
  }
  console.log('===>', days);
  // Create weather image src path
  createImagePath(days);

  view.renderDailyWeather(days);
};

export const createHourlyWeatherObject = function (data) {
  const hourly = data.hourly.slice(0, 8);
  const hour = [];

  for (let i = 0; i < hourly.length; i++) {
    const hourlyData = {
      hour: new Date(hourly[i].dt * 1000)
        .toLocaleTimeString('en-NZ', {
          hour: '2-digit',
        })
        // Remove 0s from locale time
        .replace(/^0(?:0:0?)?/, ''),
      weather: hourly[i].weather[0].main,
      weatherID: hourly[i].weather[0].id,
      weatherImgPath: '',
      temperature: `${Math.round(hourly[i].temp)}°C`,
    };
    hour.push(hourlyData);
  }
  createImagePath(hour);
  view.renderHourlyWeather(hour);
};

// Reiceive an array and create an img path for each array (weather icon)
const createImagePath = function (days) {
  for (let i = 0; i < days.length; i++) {
    // Thunderstorm
    if (days[i].weatherID >= 200 && days[i].weatherID <= 232)
      days[i].weatherImgPath = 'src/img/weather_icons/weather_23.svg';
    // Drizzle
    if (days[i].weatherID >= 300 && days[i].weatherID <= 321)
      days[i].weatherImgPath = 'src/img/weather_icons/weather_6.svg';
    // Rain
    if (days[i].weatherID >= 500 && days[i].weatherID <= 504)
      days[i].weatherImgPath = 'src/img/weather_icons/weather_17.svg';
    // Heavy rain
    if (days[i].weatherID >= 520 && days[i].weatherID <= 531)
      days[i].weatherImgPath = 'src/img/weather_icons/weather_31.svg';
    // Snow
    if (days[i].weatherID >= 600 && days[i].weatherID <= 622)
      days[i].weatherImgPath = 'src/img/weather_icons/weather_35.svg';
    // Fog
    if (days[i].weatherID >= 700 && days[i].weatherID <= 781)
      days[i].weatherImgPath = 'src/img/weather_icons/weather_30.svg';
    // Clear sky
    if (days[i].weatherID === 800)
      days[i].weatherImgPath = 'src/img/weather_icons/weather_3.svg';
    // Clouds
    if (days[i].weatherID >= 801 && days[i].weatherID <= 804)
      days[i].weatherImgPath = 'src/img/weather_icons/weather_2.svg';
  }
};
