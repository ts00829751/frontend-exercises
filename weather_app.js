const getWeatherBtn = document.getElementById("get-weather-btn");

async function getWeather(city) {
  try {
    const res = await fetch(`https://weather-proxy.freecodecamp.rocks/api/city/${city}`);
    const data = await res.json();
    //console.log(res);
    return data;
  } catch (err) {
    console.log(err);
  }
}

async function showWeather(city) {
  try {
    const dropdown = document.getElementById("city");
    city = dropdown.value;
    if (city) {

      const weatherInfo = await getWeather(city);

      const {
        weather: [
          {
            main,
            description,
            icon
          }
        ],
        main: {
          temp,
          feels_like,
          humidity
        },
        wind: {
          speed,
          gust
        },
        name
      } = weatherInfo;
      const weatherIcon = document.getElementById("weather-icon");
      const mainTemperature = document.getElementById("main-temperature");
      const feelsLike = document.getElementById("feels-like");
      const humidityEl = document.getElementById("humidity");
      const wind = document.getElementById("wind");
      const windGust = document.getElementById("wind-gust");
      const weatherMain = document.getElementById("weather-main");
      const location = document.getElementById("location");
      const hr = document.getElementById("hr");

      weatherIcon.src = icon;
      weatherIcon.alt = description;
      mainTemperature.textContent = temp ? temp + "° C" : "N/A";
      feelsLike.textContent = `Feels Like: ${feels_like ? feels_like + "° C" : "N/A"}`;
      humidityEl.textContent = `Humidity: ${humidity ? humidity + "%" : "N/A"}`;
      wind.textContent = `Wind: ${speed ? speed + " m/s" : "N/A"} `;
      windGust.textContent = `Gust: ${gust ? gust + " m/s" : "N/A"}`;
      weatherMain.textContent = main ? main : "N/A";
      location.textContent = name ? name : "N/A";
      hr.style.border = "1px solid #aaa";
    }
  } catch (err) {
    console.log(err);
    alert("Something went wrong, please try again later");
  }
}

getWeatherBtn.addEventListener("click", showWeather);
