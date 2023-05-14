let inputName = document.querySelector("#name-input");
let outputName = document.querySelector("#name-output");
inputName.addEventListener("input", (event) => {
    if (event.currentTarget.value === "") {
        outputName.textContent = "Anonymous";
    } else {
        outputName.textContent = event.currentTarget.value;
    }

});
