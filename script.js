// Static user data
const usrName = "Bella";
const pswd = "qwe123";

// Locally stored user data
const storedUserName = localStorage.getItem("userName");
const storedPassword = localStorage.getItem("password");

// DOM elements
const logInBtn = document.getElementById("logInBtn");
const logOutBtn = document.getElementById("logOutBtn");
const reloadBtn = document.getElementById("reloadBtn");
const userStatusMessage = document.querySelector("#userStatus p");
const loginSection = document.querySelector(".loginSection");
const loginErrorSection = document.querySelector(".loginErrorSection");
let inputUserName = document.getElementById("userName");
let inputPassword = document.getElementById("password");

// If stored user = static user, login
if (storedUserName === usrName && storedPassword === pswd) {
  login();
}

// Login button listener
logInBtn.addEventListener("click", function () {
  if (inputUserName.value === usrName && inputPassword.value === pswd) {
    login();
  } else {
    loginErrorSection.classList.remove("hidden");
  }
});

// Try again button listener
reloadBtn.addEventListener("click", function () {
  location.reload();
});

// Logout button listener
logOutBtn.addEventListener("click", function () {
  logout();
});

// Execute login
function login() {
  // Change login status message in header
  userStatusMessage.textContent =
    "Välkommen " + storedUserName + ", du är nu inloggad";

  loginSection.classList.add("hidden"); // Hide login section
  logOutBtn.classList.remove("hidden"); // Show logout button

  // Check if user name and password sould be stored in local storage
  if (storedUserName === null) {
    localStorage.setItem("userName", inputUserName.value);
  }
  if (storedPassword === null) {
    localStorage.setItem("password", inputPassword.value);
  }
}

// Execute logout
function logout() {
  loginSection.classList.remove("hidden"); // Show login section
  logOutBtn.classList.add("hidden"); // Hide logout button

  // Re-set input values
  inputUserName.value = "";
  inputPassword.value = "";

  userStatusMessage.textContent = "Ej inloggad"; // Re-set status message in header
}
