const form = document.querySelector("form");

const inputName = document.querySelector("#name");
const inputEmail = document.querySelector("#email");
const inputAdress = document.querySelector("#adress");
const inputSubject = document.querySelector("#subject");

const inputNameError = document.querySelector(".name_error");
const inputEmailError = document.querySelector(".email_error");
const inputAdressError = document.querySelector(".adress_error");
const inputSubjectError = document.querySelector(".subject_error");

const loader = document.querySelector(".loader");
const messageSent = document.querySelector(".contact_success");

function validateForm(event) {
    event.preventDefault();

    if (checkLength(inputName.value, 0) === true) {
        inputNameError.style.display = "none";
    } else {
        inputNameError.style.display = "block";
    }

    if (checkLength(inputAdress.value, 24) === true) {
        inputAdressError.style.display = "none";
    } else {
        inputAdressError.style.display = "block";
    }

    if (checkLength(inputSubject.value, 9) === true) {
        inputSubjectError.style.display = "none";
    } else {
        inputSubjectError.style.display = "block";
    }

    if (validateEmail(email.value) === true) {
        inputEmailError.style.display = "none";
    } else {
        inputEmailError.style.display = "block";
    }

    if (checkLength(inputName.value, 0) && checkLength(inputAdress.value, 24) && checkLength(inputSubject.value, 9) && validateEmail(inputEmail.value)) {
        loader.style.display="block";
        setTimeout(() => {
            loader.style.display="none";
            messageSent.style.display="block";
        }, 1000);
        form.reset();
        setTimeout(() => {
            messageSent.style.display="none";
        }, 3000);
    } else {
    }
}


form.addEventListener("submit", validateForm);

function checkLength(value, len) {
    if (value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}

