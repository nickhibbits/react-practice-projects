import { useEffect, useState } from "react";
import "./App.css";
import LoginForm from "./LoginForm";

function App() {
  const [submitted, setSubmitted] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  function handleSubmit(e, username, password) {
    e.preventDefault();
    setUsername(username);
    setPassword(password);
    setSubmitted(true);
  }

  async function loginUser() {
    const body = {
      username,
      password,
    };

    let response = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.response === "success") {
          setLoggedIn(true);
        }
      });

    return response;
  }

  useEffect(() => {
    if (submitted) {
      loginUser();
    }
  });

  if (loggedIn) {
    return <div className="succes">Success</div>;
  }
  return (
    <div className="app-component">
      <LoginForm handleSubmit={handleSubmit} />
    </div>
  );
}

export default App;
