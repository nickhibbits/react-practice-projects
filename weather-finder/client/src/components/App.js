import { useEffect, useRef, useState } from "react";
import "../styles/App.css";
import InputForm from "./InputForm";

function App() {
  // const [data, setData] = useState();

  const alert = async (city, state) => {
    const body = {
      city,
      state,
    };

    await fetch("/getCurrentWeather", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("data", data);
      });
  };

  return (
    <div className="App">
      <InputForm alert={alert} />
    </div>
  );
}

export default App;
