import React, { useRef, useState } from "react";

function InputForm({ alert }) {
  const [city, setCity] = useState();
  const [state, setState] = useState();

  const current = useRef("current");
  const forecast = useRef("forecast");

  const handleSubmit = (e, element) => {
    e.preventDefault();
    alert(city, state, element.current.id);
  };

  return (
    <div className="input-form-component">
      <form className="input-form" onSubmit={(e) => handleSubmit(e)}>
        <div className="location-info-wrapper">
          <label>City</label>
          <input type="text" onChange={(e) => setCity(e.target.value)}></input>
        </div>
        <div className="location-info-wrapper">
          <label>State</label>
          <input type="text" onChange={(e) => setState(e.target.value)}></input>
        </div>

        <input
          ref={current}
          value="Get Current Weather"
          type="submit"
          id="current"
          onClick={(e) => handleSubmit(e, current)}
        />
        <input
          ref={forecast}
          value="4 day forecast"
          type="submit"
          id="forecast"
          onClick={(e) => handleSubmit(e, forecast)}
        />
      </form>
    </div>
  );
}

export default InputForm;
