const users = {
  nickhibbits: {
    username: "nickhibbits",
    password: "appleseed",
    fullName: "Nick Hibbits",
  },
};

function _getUser(username, password) {
  return new Promise((resolve, reject) => {
    if (users[username] && users[username].password === password) {
      setTimeout(() => resolve({ status: 200, message: "Logged In" }), 2000);
    } else {
      reject("Incorrect username or password");
    }
  }).catch((error) => {
    console.log("error", error);
    // throwing error is the only way it's logged in the catch blocks in both the UserAPI and server files
    // gives strange JSON related errors that prevented error throwing

    // way to pass up a thrown error as JSON?
    // best practices on how to properly pass errors using JS Promises?

    // throw new Error(error);

    const errorObject = {
      message: error,
      status: 401,
    };
    return JSON.stringify(errorObject);
  });
}

function _createUser(fullName, username, password) {
  return new Promise((resolve, reject) => {
    if (!users[username]) {
      users[username] = {
        username,
        password,
        fullName,
      };

      setTimeout(
        () => resolve({ status: 200, message: "You Exist", users }),
        2000
      );
    } else {
      reject("User already exists");
    }
  }).catch((error) => {
    const errorObject = {
      message: error,
      status: 500,
    };
    return JSON.stringify(errorObject);
  });
}

module.exports = { _getUser, _createUser, users };
