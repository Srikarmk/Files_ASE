const numbbtns = document.querySelectorAll(".numb-btn");
const oprbtns = document.querySelectorAll(".opr-btn");
const equals = document.querySelector(".equal");
const clear = document.querySelector(".clearbtn");
let output = document.querySelector(".output");
let currNum = "";
let value = "";
function clearbox() {
  output.innerHTML = "";
}

clearbox();
function appendNumber(num) {
  if (num === "." && currNum.includes(".")) return;
  currNum = currNum.toString() + num.toString();
  console.log(currNum);
}

function Operation(op) {
  if (currNum === "") return;
  if (op == "÷") {
    op = "/";
  }
  currNum = currNum.toString() + op.toString();
}

function calculate(currNum) {
  if (currNum === "") return;
  value = eval(currNum);
  console.log(value);
}

function updateOutput(currNum) {
  output.innerHTML = currNum;
}

numbbtns.forEach((num) => {
  num.addEventListener("click", () => {
    appendNumber(num.innerText);
    updateOutput(currNum);
  });
});

oprbtns.forEach((op) => {
  op.addEventListener("click", () => {
    Operation(op.innerText);
    updateOutput(currNum);
  });
});

clear.addEventListener("click", () => {
  currNum = "";
  clearbox();
});

equals.addEventListener("click", () => {
  calculate(currNum);
  updateOutput(value);
  currNum = "";
});
