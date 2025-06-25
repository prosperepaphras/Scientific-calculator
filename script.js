let display = document.querySelector("#display");

function appendValue(val) {
  display.value += val;
}

function clearDisplay() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (e) {
    alert("Invalid Expression");
  }
}
document.addEventListener("keydown", function (event) {
  const key = event.key;
  if (!isNaN(key) || "+-*/().".includes(key)) {
    appendValue(key);
  } else if (key === "Enter") {
    calculate();
  } else if (key === "Backspace") {
    deleteLast();
  } else if (key.toLowerCase() === "c") {
    clearDisplay();
  }
});
