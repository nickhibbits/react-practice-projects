import React, { useState } from "react";
import "./App.css";

export default function LoginForm({ handleSubmit, alertNewUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="login__form__component">
      <div className="form__wrapper">
        <form onSubmit={(e) => handleSubmit(e, { username, password })}>
          <div className="input-wrapper">
            <p className="input-title">Username</p>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input-wrapper">
            <p className="input-title">Password</p>
            <input
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="button-wrapper">
            <input className="form__submit" type="submit" value="Login" />
            <input
              className="form__submit"
              type="button"
              value="New user"
              onClick={() => alertNewUser()}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
