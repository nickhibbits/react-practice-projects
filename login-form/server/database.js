const users = {
  nickhibbits: {
    password: "appleseed",
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

module.exports = { _getUser };
