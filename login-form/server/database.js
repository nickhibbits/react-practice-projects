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
      setTimeout(() => resolve({ status: 200 }), 2000);
    } else {
      reject();
    }
  }).catch(() => {
    return JSON.stringify({ status: 401 });
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

      setTimeout(() => resolve({ status: 200, users }), 2000);
    } else {
      reject();
    }
  }).catch(() => {
    return JSON.stringify({ status: 401 });
  });
}

module.exports = { _getUser, _createUser, users };
