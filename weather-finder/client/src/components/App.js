import { useEffect, useState } from "react";
import "../styles/App.css";
import InputForm from "./InputForm";
import WeatherDisplay from "./WeatherDisplay";
import { getCoordinates, getWeather } from "../utils/WeatherAPI";

function App() {
  const [coordinates, setCoordinates] = useState();
  const [weather, setWeather] = useState();

  const _getWeather = async (lat, lon) => {
    const data = await getWeather(lat, lon);
    setWeather(data);
  };

  const _getCoordinates = async (city, state) => {
    const data = await getCoordinates(city, state);
    setCoordinates(data);
  };

  useEffect(() => {
    if (coordinates) {
      const { lat, lon } = coordinates[0];
      _getWeather(lat, lon);
    }
  }, [coordinates]);

  if (weather) {
    return (
      <div className="App">
        <WeatherDisplay weather={weather} />
      </div>
    );
  }

  return (
    <div className="App">
      <InputForm alert={(city, state) => _getCoordinates(city, state)} />
    </div>
  );
}

export default App;
