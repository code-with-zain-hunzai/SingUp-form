// dark-mode section
let mode = document.querySelector("#checkbox");
let body = document.querySelector("body");
let currMode = localStorage.getItem("darkMode") || "light";


function applyDarkMode() {
    if (currMode === "light") {
        body.classList.add("light");
        body.classList.remove("dark");
    } else {
        body.classList.add("dark");
        body.classList.remove("light");
    }
}

mode.addEventListener('click', () => {
    if (currMode === "light") {
        currMode = "dark";
    } else {
        currMode = "light";
    }
    localStorage.setItem("darkMode", currMode);
    applyDarkMode();
    console.log(currMode);
});


applyDarkMode();


// login part

const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const passwordAgain = document.getElementById('password-again')

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs()

    if (username.parentElement.classList.contains('success') &&
        email.parentElement.classList.contains('success') &&
        password.parentElement.classList.contains('success') &&
        passwordAgain.parentElement.classList.contains('success')) {

        window.location.href = 'login.html';
    }
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error')

    errorDisplay.innerText = message;
    inputControl.classList.add('error')
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error')

    errorDisplay.innerText = '';
    inputControl.classList.add('success')
    inputControl.classList.remove('error')
}

const isValidEmail = email => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase())
}

const validateInputs = () => {
    const usernameValue = username.value.trim()
    const emailValue = email.value.trim()
    const passwordValue = password.value.trim()
    const passwordAgainValue = passwordAgain.value.trim()

    if (usernameValue === '') {
        setError(username, 'username is required')
    } else {
        setSuccess(username)
    }
    if (emailValue === '') {
        setError(email, 'Email is requried');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'provide a valid email address');
    } else {
        setSuccess(email)
    }

    if (passwordValue === '') {
        setError(password, 'password is requried')
    } else if (passwordValue.length < 8) {
        setError(password, 'Password must be at least 8 character')
    } else {
        setSuccess(password)
    }

    if (passwordAgainValue === '') {
        setError(passwordAgain, 'please confrim your password');
    } else if (passwordAgainValue !== passwordValue) {
        setError(passwordAgain, "Passwords doesn't match");
    } else {
        setSuccess(passwordAgain)
    }
}