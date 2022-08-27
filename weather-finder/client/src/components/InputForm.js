import React, { useState } from "react";

function InputForm({ alert }) {
  const [city, setCity] = useState();
  const [state, setState] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(city, state);
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
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default InputForm;
