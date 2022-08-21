import React, { useState } from "react";

function InputForm({ handleSubmit }) {
  const [city, setCity] = useState();
  const [state, setState] = useState();

  return (
    <div className="input-form-component">
      <form className="input-form">
        <div className="location-info-wrapper">
          <label>City</label>
          <input type="text" onChange={(e) => setCity(e.target.value)}></input>
        </div>
        <div className="location-info-wrapper">
          <label>State</label>
          <input type="text" onChange={(e) => setState(e.target.value)}></input>
        </div>
        <button onClick={() => handleSubmit(city, state)}>Submit</button>
      </form>
    </div>
  );
}

export default InputForm;
