//Business Logic

function add(number1, number2) {
  result = number1 + number2;
}

function subtract(number1, number2) {
  result = number1 - number2;
}

function multiply(number1, number2) {
  result = number1 * number2;
}

function divide(number1, number2) {
  result = number1 / number2;
}


//User Logic
function operator(event) {
  event.preventDefault();
  const op = document.querySelector("input[name='operator']:checked").value;

if (op === "add") {
  answer = add(number1, number2);
  } else if (op === "subtract") {
    answer = subtract(number1, number2);
  } else if (op === "multiply") {
    answer = multiply(number1, number2);
  } else if (op === "divide") {
    answer = divide(number1, number2);
  }

window.addEventListener("submit", function() {
  document.getElementById("p").innerText.value = "answer";
});

window.addEventListener("load", function() {
  document.getElementById("calculator").addEventListener("submit", operator);
});
}