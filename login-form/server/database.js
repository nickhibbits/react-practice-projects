const users = {
  nickhibbits: {
    username: "nickhibbits",
    password: "appleseed",
    fullName: "Nick Hibbits",
  },
};

function _getUser(username, password) {
  return new Promise((resolve, reject) => {
    let response = "denied";

    if (users[username] && users[username].password === password) {
      response = "success";
    }

    setTimeout(() => resolve({ response }), 2000);
  });
}

function _createUser(fullName, username, password) {
  return new Promise((resolve, reject) => {
    users[username] = {
      username,
      password,
      fullName,
    };

    setTimeout(() => resolve({ users }), 2000);
  });
}

module.exports = { _getUser };
