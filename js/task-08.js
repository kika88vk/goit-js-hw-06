const form = document.querySelector(".login-form");
form.addEventListener("submit", submit);
function submit(event) {
    event.preventDefault();
    const {
        elements: { email, password }
    } = event.currentTarget;
    if (email.value === "" || password.value === "") {
        return alert("Не заповнені поля!!!");
    }
    console.log({ email: email.value, password: password.value });
    
    event.currentTarget.reset();
}

