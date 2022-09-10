import { useEffect, useState } from "react";
import "./App.css";
import CreateUserForm from "./CreateUserForm";
import LoginForm from "./LoginForm";

function App() {
  const [submitLogin, setSubmitLogin] = useState(false);
  const [submitCreateUser, setSubmitCreateUser] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [newUser, setNewUser] = useState(false);

  console.log("newUser", newUser);

  function handleSubmit(e, data, createUser) {
    e.preventDefault();

    console.log(data);

    setUsername(data.username);
    setPassword(data.password);
    data.fullName && setFullName(data.fullName);

    createUser ? setSubmitCreateUser(true) : setSubmitLogin(true);
  }

  async function loginUser() {
    const userInfo = {
      username,
      password,
    };

    let response = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.response === "success") {
          setLoggedIn(true);
        }
      });

    return response;
  }

  async function createUser() {
    const newUserInfo = {
      username,
      password,
      fullName,
    };

    let response = await fetch("/create-user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUserInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("users", data);
        setLoggedIn(true);
      });

    return response;
  }

  useEffect(() => {
    if (submitLogin) {
      loginUser();
    }
  });

  useEffect(() => {
    if (submitCreateUser) {
      createUser();
    }
  });

  if (loggedIn) {
    return <div className="succes">Success</div>;
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
