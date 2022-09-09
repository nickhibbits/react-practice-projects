import React, { useState } from "react";

function CreateUserForm() {
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div className="create__user__form__component">
      <div className="form__wrapper">
        <form action="">
          <div className="input-wrapper">
            <p className="input-title">Full Name</p>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
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
          <div className="input-wrapper">
            <p className="input-title">Confirm Password</p>
            <input
              type="text"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateUserForm;
