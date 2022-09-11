async function loginUser(username, password) {
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
    .then((response) => {
      console.log(response);
      return response.status;
    })
    .catch((error) => {
      console.log("ERROR", error);
      return error;
    });

  return response;
}

async function createUser(username, password, fullName) {
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
    .then((response) => {
      console.log("users", response.users);
      return response.status;
    })
    .catch((error) => {
      console.log("ERROR", error);
      return error;
    });

  return response;
}

module.exports = { loginUser, createUser };
