var cup_cakes = [
  { name: "Chocolate", calories: "high", weight: "200gm" },
  { name: "Carrot", calories: "medium", weight: "150gm" },
  { name: "Banana", calories: "high", weight: "200gm" },
  { name: "Strawberry", calories: "low", weight: "160gm" },
  { name: "Peanut", calories: "medium", weight: "200gm" },
];
let btn = document.querySelector(".button");
let customerName = document.querySelector(".name");
let count = document.querySelector(".count");
let type = document.querySelector(".type");
const error = document.querySelectorAll(".error");
const time = document.getElementById("time");
const welcome = document.querySelector("#welcome");
const allergies = document.querySelector(".allergies");
const table = document.querySelector(".table");

btn.addEventListener("click", (e) => {
  console.log(customerName.value);
  console.log(type.value);
  console.log(allergies.value);
  console.log(time.value);

  if (customerName.value.length == 0) {
    error[0].innerHTML = "*Please Enter your name";
  } else if (customerName.value.length < 5 || customerName.value.length > 17) {
    error[0].innerHTML = "*The name must be between 5 and 16 characters long";
  } else {
    localStorage.setItem("customerName", customerName.value);
    error[0].innerHTML = "";
  }
  if (count.value < 1 || count.value > 15) {
    error[1].innerHTML = "*The count must be between 1 and 15";
  } else {
    error[1].innerHTML = "";
  }
  if (type.value === "None") {
    console.log(type.value);
    error[2].style.color = "red";
    error[2].innerHTML = "*None is not accepted";
  } else {
    if (type.value == "Chocolate" && allergies.value == "Dairy Free") {
      error[2].innerHTML = "*this type of cake is not dairy free";
    } else if (type.value == "Pecan" && allergies.value == "Nut Free") {
      error[2].innerHTML = "*the pecan cake is not nut free.";
    } else if (type.value == "Chocolate" && time.value == "4:00 PM") {
      error[2].style.color = "red";
      error[2].innerHTML = "*this type of cake cannot be delivered at 4 PM";
    } else {
      error[2].style.color = "green";
      error[2].innerHTML = "*Okay";
    }
  }
  if (time.value == "None") {
    error[3].innerHTML = "*None is not accepted";
  } else {
    error[3].style.color = "green";
    error[3].innerHTML = "*Okay";
    e.preventDefault;
  }
  e.preventDefault;
});

show_cupcakes(cup_cakes);
console.log(cup_cakes[0].name);
function show_cupcakes() {
  for (i = 0; i < cup_cakes.length; i++) {
    let tableText = ` <tr>
      <td>${cup_cakes[i].name}</td>
      <td class="${cup_cakes[i].calories}">${cup_cakes[i].calories}</td>
      <td>${cup_cakes[i].weight}</td>
    </tr>`;
    table.insertAdjacentHTML("beforeend", tableText);
  }
}

function validate() {
  //write code that validates the form
}

function show_storage() {
  fname = localStorage.getItem("customerName");
  welcome.innerHTML = `Welcome ${fname}`;
}
