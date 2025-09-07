// Part 1: Variables and Conditionals
function checkAge() {
  let age = parseInt(document.getElementById("ageInput").value);
  let result = "";
  if (isNaN(age)) {
    result = "Please enter a valid age.";
  } else if (age < 18) {
    result = "You are underage.";
  } else {
    result = "You are an adult.";
  }
  document.getElementById("ageResult").innerText = result;
}

// Part 2: Functions
function sayHello() {
  let name = document.getElementById("nameInput").value;
  document.getElementById("greetResult").innerText = "Hello, " + name + "!";
}

function addNumbers() {
  let n1 = parseFloat(document.getElementById("num1").value);
  let n2 = parseFloat(document.getElementById("num2").value);
  let sum = n1 + n2;
  if (isNaN(sum)) {
    document.getElementById("sumResult").innerText = "Enter valid numbers.";
  } else {
    document.getElementById("sumResult").innerText = "Sum: " + sum;
  }
}

// Part 3: Loops
function showNumbers() {
  let numbers = "";
  for (let i = 1; i <= 10; i++) {
    numbers += i + " ";
  }
  document.getElementById("numbersList").innerText = numbers;
}

function showFruits() {
  let fruits = ["Apple", "Banana", "Orange", "Mango"];
  let result = "";
  for (let fruit of fruits) {
    result += fruit + " ";
  }
  document.getElementById("fruitsList").innerText = result;
}

function whileLoopExample() {
  let i = 0;
  let result = "";
  while (i < 5) {
    result += "Count " + i + " ";
    i++;
  }
  document.getElementById("whileResult").innerText = result;
}

// Part 4: DOM interactions
function addTodo() {
  let input = document.getElementById("todoInput").value;
  if (input === "") return;

  let li = document.createElement("li");
  li.textContent = input;

  let btn = document.createElement("button");
  btn.textContent = "❌";
  btn.style.marginLeft = "10px";
  btn.onclick = () => li.remove();

  li.appendChild(btn);
  document.getElementById("todoList").appendChild(li);

  document.getElementById("todoInput").value = "";
}

function toggleTheme() {
  document.body.classList.toggle("dark");
}

function changeColor() {
  let box = document.getElementById("colorBox");
  let colors = ["red", "blue", "green", "yellow", "purple", "orange"];
  box.style.background = colors[Math.floor(Math.random() * colors.length)];
}

document.getElementById("liveInput").addEventListener("input", function () {
  document.getElementById("livePreview").innerText = this.value;
});