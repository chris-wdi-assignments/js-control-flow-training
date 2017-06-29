console.log("login.js loaded");

const userLogin = {
  name: 'adam',
  password: 'apple'
};

let password,
  wasSuccessful = false;

for (let i = 0; i < 3 && wasSuccessful === false; i++) {
  password = window.prompt(`Enter password for user ${userLogin.name}`, '');

  if (password === userLogin.password) {
    console.log(`User ${userLogin.name} login successful.`);
    wasSuccessful = true;
  } else {
    alert('Password incorrect! Login failed.');
  }
}

if (wasSuccessful) {
  // do something interesting
}
