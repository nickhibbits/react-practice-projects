import { useEffect, useState } from "react";
import "./App.css";
import CreateUserForm from "./CreateUserForm";
import LoginForm from "./LoginForm";
import Success from "./Success";
import { loginUser, createUser } from "./utils/UserAPI";

function App() {
  const [submitLogin, setSubmitLogin] = useState(false);
  const [submitCreateUser, setSubmitCreateUser] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [newUser, setNewUser] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  function handleSubmit(e, data, createUser) {
    e.preventDefault();

    setUsername(data.username);
    setPassword(data.password);
    data.fullName && setFullName(data.fullName);

    createUser ? setSubmitCreateUser(true) : setSubmitLogin(true);
  }

  async function handleResponse(callType) {
    let response;
    if (callType === "login") {
      response = await loginUser(username, password).then((data) => {
        checkStatus(data);
      });
    }
    if (callType === "create") {
      response = await createUser(username, password, fullName).then((data) => {
        checkStatus(data);
      });
    }

    function checkStatus(response) {
      if (response.status !== 200) {
        alert(response.message);
        throw new Error(response.message);
      }

      if (response.status === 200) {
        setStatusMessage(response.message);
        setLoggedIn(true);
      }
    }
  }

  useEffect(() => {
    if (submitLogin) {
      handleResponse("login");
    }

    return () => setSubmitLogin(false);
  });

  useEffect(() => {
    if (submitCreateUser) {
      handleResponse("create");
    }

    return () => setSubmitCreateUser(false);
  });

  if (loggedIn) {
    return <Success statusMessage={statusMessage} />;
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
