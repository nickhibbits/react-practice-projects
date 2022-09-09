import React from "react";

function CreateUserForm() {
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div className="create__user__form__component">
      <div className="form-wrapper">
        <form action="">
          <div className="input-wrapper">
            <p className="input-title"></p>
            <input
              type="text"
              value={fullName}
              onChange={() => setFullName(e.target.value)}
            />
          </div>
          <div className="input-wrapper">
            <p className="input-title"></p>
            <input
              type="text"
              value={username}
              onChange={() => setUsername(e.target.value)}
            />
          </div>
          <div className="input-wrapper">
            <p className="input-title"></p>
            <input
              type="text"
              value={password}
              onChange={() => setPassword(e.target.value)}
            />
          </div>
          <div className="input-wrapper">
            <p className="input-title"></p>
            <input
              type="text"
              value={confirmPassword}
              onChange={() => setConfirmPassword(e.target.value)}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateUserForm;
