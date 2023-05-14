let counetrValue = document.querySelector("#value");
const buttonDecr = document.querySelector('button[data-action="decrement"]');
const buttonIncr = document.querySelector('button[data-action="increment"]');
let counter = 0;
buttonDecr.addEventListener("click", decrValue);
buttonIncr.addEventListener("click", incrValue);

function decrValue() {

    counter -= 1;
    return counetrValue.textContent = counter;
}

function incrValue() {

    counter += 1;
    return counetrValue.innerHTML = counter;
};
console.log(buttonDecr.value);