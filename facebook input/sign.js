const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const mobile = document.getElementById("mobile");
const password = document.getElementById("password");

const birthMonth = document.getElementById("birthMonth");
const birthDate = document.getElementById("birthDate");
const birthYear = document.getElementById("birthYear");

const female = document.getElementById("female");

const btn = document.getElementById("createBtn");

for (let i = 1800; i <= 2023; i++) {
  const year = document.createElement("option");
  year.innerHTML = i;
  year.value = i;
  birthYear.appendChild(year);
}

const infoArray = [];
const infoObj = {};

firstName.addEventListener("change", (event) => {
  infoObj.firstName = firstName.value;
});

lastName.addEventListener("change", (event) => {
  infoObj.lastName = lastName.value;
});

mobile.addEventListener("change", (event) => {
  infoObj.mobile = mobile.value;
});

password.addEventListener("change", (event) => {
  infoObj.password = password.value;
});

btn.addEventListener("click", () => {
  infoObj.bmonth = birthMonth.value;
  infoObj.bday = birthDate.value;
  infoObj.byear = birthYear.value;
  if (female.checked) {
    infoObj.gender = "female";
  } else {
    infoObj.gender = "male";
  }
  infoArray.push({ ...infoObj });
  let savedArray = JSON.stringify(infoArray);
  localStorage.setItem("myArrayKey", savedArray);
});

let retrievedArray = localStorage.getItem("myArrayKey");

let retArray = JSON.parse(retrievedArray);

console.log(retArray);
