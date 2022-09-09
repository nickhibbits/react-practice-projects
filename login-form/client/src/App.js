import { useEffect, useState } from "react";
import "./App.css";
import CreateUserForm from "./CreateUserForm";
import LoginForm from "./LoginForm";

function App() {
  const [submitted, setSubmitted] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [newUser, setNewUser] = useState(false);

  console.log("newUser", newUser);

  function handleSubmit(e, data, createUser) {
    e.preventDefault();

    if (createUser) {
      console.log("create user", data);
    } else {
      console.log("login user", data);
      setUsername(username);
      setPassword(password);
    }

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

  if (newUser) {
  }

  return (
    <div className="app-component">
      {newUser ? (
        <CreateUserForm handleSubmit={handleSubmit} />
      ) : (
        <LoginForm
          handleSubmit={handleSubmit}
          alertNewUser={() => setNewUser(true)}
        />
      )}
    </div>
  );
}

export default App;
