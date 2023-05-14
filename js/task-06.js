let inputText = document.querySelector("#validation-input");

inputText.addEventListener("blur", (event) => {
    event.preventDefault();
    if (event.currentTarget.value.length !== Number(inputText.dataset.length)) {
        inputText.classList.add("invalid");
    } else {
        inputText.classList.replace("invalid", "valid");
    }

});

