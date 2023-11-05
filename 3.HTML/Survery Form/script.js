const fname = document.getElementById("first-name");
const lname = document.getElementById("last-name");
const dob = document.getElementById("dob");
const country = document.getElementById("country");
const profession = document.getElementById("profession");
const email = document.getElementById("email");
const number = document.getElementById("number");
document.getElementById("submit-button").addEventListener("click", function () {
  if (
    fname.value !== "" &&
    lname.value !== "" &&
    dob.value !== "" &&
    country.value !== "" &&
    email.value !== "" &&
    number.value !== ""
  ) {
    displayPopup();
  }
});

document.getElementById("reset-button").addEventListener("click", function () {
  document.getElementById("survey-form").reset();
});

function displayPopup() {
  console.log(fname.value);
  document.getElementById("popup-first-name").textContent = fname.value;
  document.getElementById("popup-last-name").textContent = lname.value;
  document.getElementById("popup-dob").textContent = dob.value;
  document.getElementById("popup-country").textContent = country.value;

  const genderInputs = document.querySelectorAll(
    'input[name="gender"]:checked'
  );
  const genderArray = Array.from(genderInputs).map((input) => input.value);
  document.getElementById("popup-gender").textContent = genderArray.join(", ");

  document.getElementById("popup-profession").textContent = profession.value;
  document.getElementById("popup-email").textContent = email.value;
  document.getElementById("popup-mobile-number").textContent = number.value;

  document.getElementById("popup").style.display = "block";
}

document.getElementById("close-popup").addEventListener("click", function () {
  document.getElementById("popup").style.display = "none";
  document.getElementById("survey-form").reset();
});
