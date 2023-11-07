function attachEvents() {
  const URL = "http://localhost:3030/jsonstore/forecaster/";
  const select = document.getElementById("location");
  const button = document.getElementById("submit");
  const forecastDiv = document.getElementById("forecast");
  const upcoming = document.getElementById("upcoming");
  const current = document.getElementById("current");

  button.addEventListener("click", getWeather);

  function error() {
    current.innerHTML = `<div class="label">Current conditions</div>`;
    upcoming.innerHTML = `<div class="label">Three-day forecast</div>`;
    forecastDiv.style.display = "block";
    const errorMessage = document.createElement("p");
    errorMessage.textContent = "Error";
    current.appendChild(errorMessage);
  }
  function weatherCondition(weather) {
    const conditions = {
      Sunny: "&#x2600",
      "Partly sunny": "&#x26C5",
      Overcast: "&#x2601",
      Rain: "&#x2614",
    };
    return conditions[weather] || "not found";
  }
  async function getWeather(event) {
    event.preventDefault();
    if (!select.value) {
      return error();
    }

    current.innerHTML = `<div class="label">Current conditions</div>`;
    upcoming.innerHTML = `<div class="label">Three-day forecast</div>`;

    const location = select.value;
    try {
      const locationsResponse = await fetch(`${URL}locations`);
      const locationsData = await locationsResponse.json();

      const locationData = locationsData.find((x) => x.name === location);
      if (locationData === undefined) {
        return error();
      }
      const code = locationData.code;

      const conditionsResponse = await fetch(`${URL}today/${code}`);
      const conditionsData = await conditionsResponse.json();

      const forecastResponse = await fetch(`${URL}upcoming/${code}`);
      const forecastData = await forecastResponse.json();

      forecastDiv.style.display = "block";
      const forecasts = document.createElement("div");
      forecasts.id = "forecasts";
      forecasts.innerHTML = `
        <span class="condition symbol">${weatherCondition(
          conditionsData.forecast.condition
        )}</span>
        <span class="condition"> 
          <span class="forecast-data">${conditionsData.name}</span>
          <span class="forecast-data">${conditionsData.forecast.low}&#176;/${
        conditionsData.forecast.high
      }&#176;</span>
          <span class="forecast-data">${
            conditionsData.forecast.condition
          }</span>
        </span>
        `;
      current.appendChild(forecasts);

      const forecastInfo = document.createElement("div");
      forecastInfo.id = "forecast-info";
      forecastInfo.innerHTML = `
      <span class="upcoming">
          <span class="symbol">${weatherCondition(
            forecastData.forecast[0].condition
          )}</span>
          <span class="forecast-data">${forecastData.forecast[0].low}&#176;/${
        forecastData.forecast[0].high
      }&#176;</span>
          <span class="forecast-data">${
            forecastData.forecast[0].condition
          }</span>
      </span>
      <span class="upcoming">
          <span class="symbol">${weatherCondition(
            forecastData.forecast[1].condition
          )}</span>
          <span class="forecast-data">${forecastData.forecast[1].low}&#176;/${
        forecastData.forecast[1].high
      }&#176;</span>
          <span class="forecast-data">${
            forecastData.forecast[1].condition
          }</span>
      </span>
      <span class="upcoming">
          <span class="symbol">${weatherCondition(
            forecastData.forecast[2].condition
          )}</span>
          <span class="forecast-data">${forecastData.forecast[2].low}&#176;/${
        forecastData.forecast[2].high
      }&#176;</span>
          <span class="forecast-data">${
            forecastData.forecast[2].condition
          }</span>
      </span>
      `;
      upcoming.appendChild(forecastInfo);
    } catch (error) {
      error();
    }
  }
}

attachEvents();
