import { useEffect, useState } from "react";
import "../styles/App.css";
import InputForm from "./InputForm";
import CurrentWeatherDisplay from "./CurrentWeatherDisplay";
import { getCoordinates, getWeather } from "../utils/WeatherAPI";
import ForecastDisplay from "./ForecastDisplay";

function App() {
  const [city, setCity] = useState();
  const [state, setState] = useState();
  const [coordinates, setCoordinates] = useState();
  const [currentWeather, setCurrentWeather] = useState();
  const [forecast, setForecast] = useState();
  const [callType, setCallType] = useState();

  const updateValues = (city, state, id) => {
    setCity(city);
    setState(state);
    setCallType(id);
  };

  const _getWeather = async (lat, lon) => {
    const data = await getWeather(lat, lon);
    if (callType === "current") {
      return setCurrentWeather(data);
    }

    setForecast("yoooo");
  };

  const _getCoordinates = async (city, state) => {
    const data = await getCoordinates(city, state);
    setCoordinates(data);
  };

  useEffect(() => {
    if (city && state) {
      _getCoordinates(city, state);
    }
  }, [city, state]);

  useEffect(() => {
    if (coordinates) {
      console.log("coordinates", coordinates);
      const { lat, lon } = coordinates[0];

      if (callType === "current") {
        _getWeather(lat, lon);
      }
      console.log("forecast call boi");
    }
  }, [coordinates, callType]);

  if (currentWeather) {
    return (
      <div className="App">
        <CurrentWeatherDisplay currentWeather={currentWeather} />
      </div>
    );
  }

  if (forecast) {
    return (
      <div className="App">
        <ForecastDisplay forecast={forecast} />
      </div>
    );
  }

  return (
    <div className="App">
      <InputForm alert={(city, state, id) => updateValues(city, state, id)} />
    </div>
  );
}

export default App;
