const colorBtn = document.querySelector(".change-color");
let colorValue = document.querySelector(".color");
colorBtn.addEventListener("click", colorChange);

function colorChange(event) {
  colorValue.textContent = getRandomHexColor();
  document.body.style.backgroundColor = colorValue.textContent;
  
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
