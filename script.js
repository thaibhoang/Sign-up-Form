const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirmpassword");
const error = document.querySelectorAll(".error");

password.addEventListener("focusout", () => {
    if (password.value.length < 8 || password.value.length > 24) {
        error[0].classList.add("show");
    }
})

password.addEventListener("focus", () => {
    error[0].classList.remove("show");
})

confirmPassword.addEventListener("focusout", () => {
    if (confirmPassword.value !== password.value) {
        error[1].classList.add("show");
    }
})

confirmPassword.addEventListener("focus", () => {
    error[1].classList.remove("show");
})