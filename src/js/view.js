// Render city input name
export const renderCityData = function (data) {
  const cityNameContainer = document.querySelector('.city-name-container');
  const markup = `<span>${data.city}, ${data.country}</span>`;
  cityNameContainer.innerHTML = '';
  cityNameContainer.insertAdjacentHTML('afterbegin', markup);
};

// Render weather for the next 7 days
export const renderDailyWeather = function (day) {
  const weekForecast = document.querySelector('.container-forecast-week');
  const markup = `

          <div class="container-weekday">
            <div class="container-weekday-content">
              <p class="dayname">${day[1].weekday}</p>
              <img
                class="forecast-week-img day1-img"
                src="${day[1].weatherImgPath}"
                alt="weather forecast"
              />
              <p>
                <span class="highest-temperature">${day[1].max}°C</span>
                <span class="lowest-temperature">-${day[1].min}°C</span>
              </p>
            </div>
          </div>

          <div class="container-weekday">
            <div class="container-weekday-content">
              <p class="dayname">${day[2].weekday}</p>
              <img
                class="forecast-week-img day2-img"
                src="${day[2].weatherImgPath}"
                alt="weather forecast"
              />
              <p>
              <span class="highest-temperature">${day[2].max}°C</span>
              <span class="lowest-temperature">-${day[2].min}°C</span>
              </p>
            </div>
          </div>

          <div class="container-weekday">
            <div class="container-weekday-content">
              <p class="dayname">${day[3].weekday}</p>
              <img
                class="forecast-week-img day3-img"
                src="${day[3].weatherImgPath}"
                alt="weather forecast"
              />
              <p>
              <span class="highest-temperature">${day[3].max}°C</span>
              <span class="lowest-temperature">-${day[3].min}°C</span>
              </p>
            </div>
          </div>

          <div class="container-weekday">
            <div class="container-weekday-content">
              <p class="dayname">${day[4].weekday}</p>
              <img
                class="forecast-week-img day4-img"
                src="${day[4].weatherImgPath}"
                alt="weather forecast"
              />
              <p>
              <span class="highest-temperature">${day[4].max}°C</span>
              <span class="lowest-temperature">-${day[4].min}°C</span>
              </p>
            </div>
          </div>

          <div class="container-weekday">
            <div class="container-weekday-content">
              <p class="dayname">${day[5].weekday}</p>
              <img
                class="forecast-week-img day5-img"
                src="${day[5].weatherImgPath}"
                alt="weather forecast"
              />
              <p>
              <span class="highest-temperature">${day[5].max}°C</span>
              <span class="lowest-temperature">-${day[5].min}°C</span>
              </p>
            </div>
          </div>

          <div class="container-weekday">
            <div class="container-weekday-content">
              <p class="dayname">${day[6].weekday}</p>
              <img
                class="forecast-week-img day6-img"
                src="${day[6].weatherImgPath}"
                alt="weather forecast"
              />
              <p>
              <span class="highest-temperature">${day[6].max}°C</span>
              <span class="lowest-temperature">-${day[6].min}°C</span>
              </p>
            </div>
          </div>

          <div class="container-weekday">
            <div class="container-weekday-content">
              <p class="dayname">${day[7].weekday}</p>
              <img
                class="forecast-week-img day7-img"
                src="${day[7].weatherImgPath}"
                alt="weather forecast"
              />
              <p>
              <span class="highest-temperature">${day[7].max}°C</span>
              <span class="lowest-temperature">-${day[7].min}°C</span>
              </p>
            </div>
          </div>
        `;

  weekForecast.innerHTML = '';
  weekForecast.insertAdjacentHTML('afterbegin', markup);
};

// Render city input current weather
export const renderCurrentWeather = function (currentData) {
  // Render temperature, day, time and weather description
  const temperatureAndDescription = document.querySelector(
    '.temperature-and-weather-description'
  );
  const leftTabMarkup = `
          <div class="left-image">
            <img
              class="logo-image"
              src="${currentData.weatherImgPath}"
              alt="weather picture"
            />
          </div>
          <div class="current-temperature">
            <span>${currentData.temperature}°C</span>
          </div>
          <div class="day-and-time">
            <span>${currentData.locationTime.slice(
              0,
              currentData.locationTime.lastIndexOf(' ')
            )}</span>
            <span class="separation-line"></span>
          </div>
          <div class="weather-type">
            <div>
              <img
                class="today-cloud"
                src="src/img/weather_icons/weather_30.svg"
                alt="cloud icon"
              />
              ${
                currentData.weatherDescription.charAt(0).toUpperCase() +
                currentData.weatherDescription.slice(1)
              }
            </div>
          </div>
        `;
  temperatureAndDescription.innerHTML = '';
  temperatureAndDescription.insertAdjacentHTML('afterbegin', leftTabMarkup);

  // Render dashboard
  const dashboard = document.querySelector('.container-dashboard');
  const markup = `
        <div class="container-dash">
        <div class="container-dash-title">Sunrise</div>
        <img
          class="img-dashboard"
          src="src/img/weather_icons/weather_27.svg"
          alt="sunrise icon"
        />
        <div class="container-dash-text sunrise-time">${currentData.sunrise.slice(
          0,
          currentData.sunrise.lastIndexOf(' ')
        )}</div>
      </div>

      <div class="container-dash">
        <div class="container-dash-title">Precipitation</div>
        <img
          class="img-dashboard"
          src="src/img/weather_icons/weather_12.svg"
          alt="rain drop icon"
        />
        <div class="container-dash-text">${currentData.precipitation}%</div>
      </div>

      <div class="container-dash">
        <div class="container-dash-title">Wind Status</div>
        <img
          class="img-dashboard"
          src="src/img/weather_icons/weather_9.svg"
          alt="wind icon"
        />
        <div class="container-dash-text">${currentData.wind} km/h</div>
      </div>

      <div class="container-dash">
        <div class="container-dash-title">Sunset</div>
        <img
          class="img-dashboard"
          src="src/img/weather_icons/weather_26.svg"
          alt="sunset icon"
        />
        <div class="container-dash-text sunset-time">${currentData.sunset.slice(
          0,
          currentData.sunset.lastIndexOf(' ')
        )}</div>
      </div>

      <div class="container-dash">
        <div class="container-dash-title">Humidity</div>
        <img
          class="img-dashboard"
          src="src/img/weather_icons/weather_44.svg"
          alt="humidity level icon"
        />
        <div class="container-dash-text">${currentData.humidity}%</div>
      </div>

      <div class="container-dash">
        <div class="container-dash-title">Feels like</div>
        <img
          class="img-dashboard"
          src="src/img/weather_icons/weather_42.svg"
          alt="Thermometer icon"
        />
        <div class="container-dash-text">${currentData.feelsLike}°C</div>
      </div>
        `;

  dashboard.innerHTML = '';
  dashboard.insertAdjacentHTML('afterbegin', markup);
};

// Render hourly weather
export const renderHourlyWeather = function (data) {
  const containerForecast = document.querySelector('.container-forecast-week2');
  const markup = `
          <div class="container-weekday">
          <div class="container-weekday-content">
            <p class="dayname">${data[1].hour}</p>
            <img
              class="forecast-week-img day1-img"
              src="${data[1].weatherImgPath}"
              alt="weather forecast"
            />
            <p>
              <span class="highest-temperature">${data[1].temperature}</span>
            </p>
          </div>
        </div>

        <div class="container-weekday">
          <div class="container-weekday-content">
          <p class="dayname">${data[2].hour}</p>
            <img
              class="forecast-week-img day1-img"
              src="${data[2].weatherImgPath}"
              alt="weather forecast"
            />
            <p>
              <span class="highest-temperature">${data[2].temperature}</span>
            </p>
          </div>
        </div>

        <div class="container-weekday">
          <div class="container-weekday-content">
          <p class="dayname">${data[3].hour}</p>
            <img
              class="forecast-week-img day1-img"
              src="${data[3].weatherImgPath}"
              alt="weather forecast"
            />
            <p>
              <span class="highest-temperature">${data[3].temperature}</span>
            </p>
          </div>
        </div>

        <div class="container-weekday">
          <div class="container-weekday-content">
          <p class="dayname">${data[4].hour}</p>
            <img
              class="forecast-week-img day4-img"
              src="${data[4].weatherImgPath}"
              alt="weather forecast"
            />
            <p>
              <span class="highest-temperature">${data[4].temperature}</span>
            </p>
          </div>
        </div>

        <div class="container-weekday">
          <div class="container-weekday-content">
          <p class="dayname">${data[5].hour}</p>
            <img
              class="forecast-week-img day5-img"
              src="${data[5].weatherImgPath}"
              alt="weather forecast"
            />
            <p>
              <span class="highest-temperature">${data[5].temperature}</span>
            </p>
          </div>
        </div>

        <div class="container-weekday">
          <div class="container-weekday-content">
          <p class="dayname">${data[6].hour}</p>
            <img
              class="forecast-week-img day6-img"
              src="${data[6].weatherImgPath}"
              alt="weather forecast"
            />
            <p>
              <span class="highest-temperature">${data[6].temperature}</span>
            </p>
          </div>
        </div>

        <div class="container-weekday">
          <div class="container-weekday-content">
          <p class="dayname">${data[7].hour}</p>
            <img
              class="forecast-week-img day7-img"
              src="${data[7].weatherImgPath}"
              alt="weather forecast"
            />
            <p>
              <span class="highest-temperature">${data[7].temperature}</span>
            </p>
          </div>
        </div>
        </div>`;

  containerForecast.innerHTML = '';
  containerForecast.insertAdjacentHTML('afterbegin', markup);
};

export const renderError = function () {
  const mainImg = document.querySelector('.error-display');
  const markup = `
      <img
        class="logo-image"
        src="src/img/weather_icons/weather_48.svg"
        alt="weather picture"
      />
      <p>Cannot found city in database</p>
      </div>`;
  mainImg.innerHTML = '';
  mainImg.insertAdjacentHTML('afterbegin', markup);
};
