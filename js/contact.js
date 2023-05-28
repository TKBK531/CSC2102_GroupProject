// const message = document.querySelector('#message');
const letterCount = document.querySelector('#letter-count');
const maxLetters = 500;
const form = document.getElementById("contact-form");
const nameInput = document.getElementById("full-name");
const emailInput = document.getElementById("email");
const facultyInput = document.getElementById("faculty");
const statusInput = document.getElementById("status");
const regNoInput = document.getElementById("reg-number");
const messageInput = document.getElementById("message");
const submitButton = document.getElementById("submit-button");

message.addEventListener('input', () => {
    const remainingLetters = maxLetters - message.value.length;
    letterCount.textContent = `${remainingLetters} characters remaining`;
});

function showRegistrationNumber() {
    const status = document.getElementById('status');
    const regNumber = document.getElementById('registration-number');

    if (status.value === 'student') {
        regNumber.style.display = 'block';
    } else {
        regNumber.style.display = 'none';
    }
}

form.addEventListener("submit", (event) => {
    event.preventDefault();

    let hasError = false;

    if (nameInput.value.trim() === "") {
        nameInput.classList.add("is-invalid");
        document.getElementById("name-error").innerHTML = "Please enter your name.";
        hasError = true;
    } else {
        nameInput.classList.remove("is-invalid");
        document.getElementById("name-error").innerHTML = "";
    }

    if (emailInput.value.trim() === "") {
        emailInput.classList.add("is-invalid");
        document.getElementById("email-error").innerHTML = "Please enter your email address.";
        hasError = true;
    } else if (!/\S+@\S+\.\S+/.test(emailInput.value.trim())) {
        emailInput.classList.add("is-invalid");
        document.getElementById("email-error").innerHTML = "Please enter a valid email address.";
        hasError = true;
    } else {
        emailInput.classList.remove("is-invalid");
        document.getElementById("email-error").innerHTML = "";
    }

    if (statusInput.value === "Student" && regNoInput.value.trim() === "") {
        regNoInput.classList.add("is-invalid");
        document.getElementById("regNo-error").innerHTML = "Please enter your registration number.";
        hasError = true;
    } else if (statusInput.value === "Student" && !/^STD\/\d{2}\/\d{3}$/.test(regNoInput.value.trim())) {
        regNoInput.classList.add("is-invalid");
        document.getElementById("regNo-error").innerHTML = "Invalid registration number (ex: STD/20/342)";
        hasError = true;
    } else {
        regNoInput.classList.remove("is-invalid");
        document.getElementById("regNo-error").innerHTML = "";
    }

    if (regNoInput.value.trim() === "") {
        regNoInput.classList.add("is-invalid");
        document.getElementById("regNo-error").innerHTML = "Please enter your Registration Number.";
        hasError = true;
    } else {
        regNoInput.classList.remove("is-invalid");
        document.getElementById("regNo-error").innerHTML = "";
    }

    if (messageInput.value.trim() === "") {
        messageInput.classList.add("is-invalid");
        document.getElementById("message-error").innerHTML = "Please enter your message.";
        hasError = true;
    } else if (messageInput.value.length > 500) {
        messageInput.classList.add("is-invalid");
        document.getElementById("message-error").innerHTML = "Message should not exceed 500 characters.";
        hasError = true;
    } else {
        messageInput.classList.remove("is-invalid");
        document.getElementById("message-error").innerHTML = "";
    }

    if (!hasError) {
        form.submit();
        alert("Successfully submitted the form.");
    }
});
