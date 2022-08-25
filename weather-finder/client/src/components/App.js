import { useEffect, useState } from "react";
import "../styles/App.css";
import InputForm from "./InputForm";
import WeatherDisplay from "./WeatherDisplay";

function App() {
  const [coordinates, setCoordinates] = useState();
  const [weather, setWeather] = useState();

  const getWeather = async (lat, lon) => {
    const body = {
      lat,
      lon,
    };

    const response = await fetch("/getWeather", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((data) => data);

    setWeather(response);
  };

  useEffect(() => {
    if (coordinates) {
      const { lat, lon } = coordinates[0];
      console.log(lat, lon);
      getWeather(lat, lon);
    }
  }, [coordinates]);

  const getCoordinates = async (city, state) => {
    const body = {
      city,
      state,
    };

    const response = await fetch("/getCoordinates", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((data) => data);

    setCoordinates(response);
  };

  if (weather) {
    return (
      <div className="App">
        <WeatherDisplay weather={weather} />
      </div>
    );
  }
  return (
    <div className="App">
      <InputForm alert={getCoordinates} />
    </div>
  );
}

export default App;
