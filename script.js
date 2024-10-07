// Get elements
const password = document.getElementById("user-password");
const passwordConfirm = document.getElementById("user-password-confirm");
const submitBtn = document.querySelector("button");

// Set event handlers
submitBtn.addEventListener("click", checkPwd(password, passwordConfirm));

// Functions
function checkPwd(password, passwordConfirm) {
  if (password.value !== passwordConfirm.value)
    alert("Passwords do not match!");
}
