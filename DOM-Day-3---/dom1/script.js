const form = document.querySelector("#form");
const tableBody = document.querySelector("#tableBody");

function clearForm() {
  form.reset();
}

function appendRow(firstName, lastName, address, pincode, gender, food, state, country) {
  const row = document.createElement("tr");
  const firstNameCell = document.createElement("td");
  const lastNameCell = document.createElement("td");
  const addressCell = document.createElement("td");
  const pincodeCell = document.createElement("td");
  const genderCell = document.createElement("td");
  const foodCell = document.createElement("td");
  const stateCell = document.createElement("td");
  const countryCell = document.createElement("td");

  firstNameCell.innerText = firstName;
  lastNameCell.innerText = lastName;
  addressCell.innerText = address;
  pincodeCell.innerText = pincode;
  genderCell.innerText = gender;
  foodCell.innerText = food;
  stateCell.innerText = state;
  countryCell.innerText = country;

  row.appendChild(firstNameCell);
  row.appendChild(lastNameCell);
  row.appendChild(addressCell);
  row.appendChild(pincodeCell);
  row.appendChild(genderCell);
  row.appendChild(foodCell);
  row.appendChild(stateCell);
  row.appendChild(countryCell);

  tableBody.appendChild(row);
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const firstName = form.elements["firstName"].value;
  const lastName = form.elements["lastName"].value;
  const address = form.elements["address"].value;
  const pincode = form.elements["pincode"].value;
  const gender = form.elements["gender"].value;
  const foods = form.querySelectorAll('input[name="food"]:checked');
  const foodValues = Array.from(foods).map((food) => food.value);
  const state = form.elements["state"].value;
  const country = form.elements["country"].value;

  appendRow(firstName, lastName, address, pincode, gender, foodValues.join(", "), state, country);

  clearForm();
});
