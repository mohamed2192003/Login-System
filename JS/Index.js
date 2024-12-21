// Email validation ==> /^[a-z0-9]+@gmail.com/gm
// Password validation ==> /^[0-9]{8,}/gm

const loginPage = document.getElementById("login");
const signupPage = document.getElementById("signup");
const homePage = document.getElementById("home");
const loginForm = document.getElementById("form");
const signupForm = signupPage.querySelector("form");
const loginEmail = document.getElementById("loginEmail");
const loginPassword = document.getElementById("loginPassword");
const signupName = document.getElementById("signupName");
const signupEmail = document.getElementById("signupEmail");
const signupPassword = document.getElementById("signupPassword");
const welcomeMessage = homePage.querySelector(".display-3");

let users = [];

function validateEmail(email) {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
}

function validatePassword(password) {
  const regex = /^[0-9]{8,}$/; 
  return regex.test(password);
}

function validateName(name) {
  return name.trim().length > 0; 
}

function showPage(pageToShow) {
  loginPage.classList.add("d-none");
  signupPage.classList.add("d-none");
  homePage.classList.add("d-none");

  pageToShow.classList.remove("d-none");
}

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = loginEmail.value;
  const password = loginPassword.value;

  const user = users.find(
    (user) => user.email === email && user.password === password
  );

  if (user) {
    welcomeMessage.textContent = `Welcome, ${user.name}!`;
    showPage(homePage);
  } else {
    alert("Invalid email or password");
  }
});

signupForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = signupName.value;
  const email = signupEmail.value;
  const password = signupPassword.value;

  if (!validateName(name)) {
    alert("Name is required");
    return;
  }

  if (!validateEmail(email)) {
    alert("Invalid email format");
    return;
  }

  if (!validatePassword(password)) {
    alert("Password must be at least 8 digits long and contain only numbers");
    return;
  }

  users.push({ name, email, password });

  alert("Account created successfully! Please log in.");
  showPage(loginPage);
});

signupPage.querySelector("a").addEventListener("click", (event) => {
  event.preventDefault();
  showPage(loginPage);
});

loginPage.querySelector("a").addEventListener("click", (event) => {
  event.preventDefault();
  showPage(signupPage);
});

showPage(loginPage);

logoutButton.addEventListener("click", () => {
    showPage(loginPage);
  });
  
  showPage(loginPage);