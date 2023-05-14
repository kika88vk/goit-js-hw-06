const colorBtn = document.querySelector(".change-color");
let colorValue = document.querySelector(".color");
let bgBody = document.querySelector("body");
colorBtn.addEventListener("click", colorChange);

function colorChange(event) {

  bgBody.style.backgroundColor = getRandomHexColor();
  colorValue.textContent = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
