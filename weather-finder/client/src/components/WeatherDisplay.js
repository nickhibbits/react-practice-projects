import React from "react";
import "../styles/WeatherDisplay.css";

function WeatherDisplay({ currentWeather }) {
  console.log("weather", currentWeather);
  const { main, name } = currentWeather;
  const { temp, temp_max, temp_min, feels_like } = main;

  console.log("temp", temp);
  console.log("temp_max", temp_max);
  console.log("temp_min", temp_min);
  console.log("feels_like", feels_like);

  return (
    <main className="weather-display-component">
      <div className="current-weather-container">
        <div className="city-name">{name}</div>
        <div className="info-item-wrapper">
          <div className="info-item-key">Temperature</div>
          <div className="info-item-value">{temp.toFixed(0)}</div>
        </div>
        <div className="info-item-wrapper">
          <div className="info-item-key">High</div>
          <div className="info-item-value">{temp_max.toFixed(0)}</div>
        </div>
        <div className="info-item-wrapper">
          <div className="info-item-key">Low</div>
          <div className="info-item-value">{temp_max.toFixed(0)}</div>
        </div>
        <div className="info-item-wrapper">
          <div className="info-item-key">Feels like</div>
          <div className="info-item-value">{feels_like.toFixed(0)}</div>
        </div>
      </div>
    </main>
  );
}

export default WeatherDisplay;
