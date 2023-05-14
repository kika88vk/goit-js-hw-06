const lineRange = document.querySelector("#font-size-control");
let changingText = document.querySelector("#text");
lineRange.addEventListener("input", (event) => {

    changingText.style.fontSize = `${event.currentTarget.value}px`;
});