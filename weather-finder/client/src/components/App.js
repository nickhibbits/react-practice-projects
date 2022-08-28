import { useEffect, useState } from "react";
import "../styles/App.css";
import InputForm from "./InputForm";
import WeatherDisplay from "./WeatherDisplay";
import { getCoordinates, getWeather } from "../utils/WeatherAPI";

function App() {
  const [city, setCity] = useState();
  const [state, setState] = useState();
  const [coordinates, setCoordinates] = useState();
  const [currentWeather, setCurrentWeather] = useState();

  const updateValues = (city, state) => {
    setCity(city);
    setState(state);
  };

  const _getWeather = async (lat, lon) => {
    const data = await getWeather(lat, lon);
    setCurrentWeather(data);
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
    if (mounted) {
      if (coordinates) {
        console.log("coordinates", coordinates);
        const { lat, lon } = coordinates[0];
        _getWeather(lat, lon);
      }
    }
  }, [coordinates]);

  if (currentWeather) {
    return (
      <div className="App">
        <WeatherDisplay currentWeather={currentWeather} />
      </div>
    );
  }

  return (
    <div className="App">
      <InputForm alert={(city, state) => updateValues(city, state)} />
    </div>
  );
}

export default App;
