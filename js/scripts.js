//Business Logic

function add(number1, number2) {
  return number1 + number2;
}

function subtract(number1, number2) {
  return number1 - number2;
}

function multiply(number1, number2) {
  return number1 * number2;
}

function divide(number1, number2) {
  return number1 / number2;
}


//User Logic

function operator(event) {
  event.preventDefault();
  const number1 = parseInt(document.querySelector("input#number1").value);
  const number2 = parseInt(document.querySelector("input#number2").value);
  const op = document.querySelector("input[name='operator']:checked").value;

  let result;
  if (op === "add") {
    result = add(number1, number2);
  } else if (op === "subtract") {
    result = subtract(number1, number2);
  } else if (op === "multiply") {
    result = multiply(number1, number2);
  } else if (op === "divide") {
    result = divide(number1, number2);
  }

  document.getElementById("output").innerText = result;
}

  window.addEventListener("load" ,function() {
    const form= document.getElementById("calculator");
    form.addEventListener("submit", operator);
  });





// window.addEventListener("submit", function() {
//   document.getElementById("p").innerText = answer;
//   event.preventDefault();
// });

// window.addEventListener("load", function() {
//   document.getElementById("calculator").addEventListener("submit", operator());
// });