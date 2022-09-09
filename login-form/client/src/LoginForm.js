import React, { useState } from "react";
import "./App.css";

export default function LoginForm({ handleSubmit }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="login__form__component">
      <div className="form__wrapper">
        <form onSubmit={(e) => handleSubmit(e, username, password)}>
          <div className="input-wrapper">
            <p className="input-title">Username</p>
            <input
              type="text"
              className="login__form__username__input"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input-wrapper">
            <p className="input-title">Password</p>
            <input
              type="text"
              value={password}
              className="login__form__password__input"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <input className="login__form__submit" type="submit" value="Login" />
        </form>
      </div>
    </div>
  );
}
