async function loginUser(username, password) {
  const userInfo = {
    username,
    password,
  };

  let response = async () => {
    try {
      await fetch("/login", {
        method: "POST",
        // headers: {
        //   "Content-Type": "application/json",
        // },
        body: JSON.stringify(userInfo),
      }).then((res) => res);
    } catch (error) {
      console.log("ERROR 🟢", error);
      return error;
    }
  };

  console.log("response", response());

  return response();
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
    .then((response) => response)
    .catch((error) => {
      // error doesn't register here without an explicitly thrown error in database.js
      console.log("ERROR", error);
      return error;
    });

  return response;
}

module.exports = { loginUser, createUser };
