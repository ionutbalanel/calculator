let input = document.getElementById("input");
let finish = false;

function add(symbol) {
  if (finish) {
    reset();
    finish = false;
  }
  input.value += symbol;
}

function reset() {
  input.value = "";
}

function del() {
  input.value = input.value.slice(0, -1);
}

function calc() {
  input.value = eval(input.value);
  finish = true;
}
function enter(event) {
  if (event.key == "Enter") {
    event.preventDefault();
    calc();
  }
}

document.body.addEventListener("keydown", enter);
