const form = document.getElementById("alumni-form");
const nameInput = document.getElementById("name");
const pictureInput = document.getElementById("picture");
const yearInput = document.getElementById("year");
const codeInput = document.getElementById("code");
const submitButton = document.getElementById("submit-button");

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

    if (pictureInput.value.trim() === "") {
        pictureInput.classList.add("is-invalid");
        document.getElementById("picture-error").innerHTML = "Please Upload your picture.";
        hasError = true;
    } else {
        pictureInput.classList.remove("is-invalid");
        document.getElementById("picture-error").innerHTML = "";
    }

    if (yearInput.value.trim() === "") {
        yearInput.classList.add("is-invalid");
        document.getElementById("year-error").innerHTML = "Please enter your class year.";
        hasError = true;
    } else if (yearInput.value.trim() > 2023) {
        yearInput.classList.add("is-invalid");
        document.getElementById("year-error").innerHTML = "Invalid Class Year";
        hasError = true;
    }
    else {
        yearInput.classList.remove("is-invalid");
        document.getElementById("year-error").innerHTML = "";
    }

    if (codeInput.value.trim() === "") {
        codeInput.classList.add("is-invalid");
        document.getElementById("code-error").innerHTML = "Please enter your alumni code.";
        hasError = true;
    } else {
        codeInput.classList.remove("is-invalid");
        document.getElementById("code-error").innerHTML = "";
    }

    if (!/^ALU\d{4}$/.test(codeInput.value.trim())) {
        codeInput.classList.add("is-invalid");
        document.getElementById("code-error").innerHTML = "Enter a Valid Alumni Code (ex: ALU2343)";
        hasError = true;
    } else {
        codeInput.classList.remove("is-invalid");
        document.getElementById("code-error").innerHTML = "";
    }

    if (!hasError) {
        // form submission code
        form.submit();

        alert("Successfully added " + nameInput.value);

        window.location.href = "alumni.html";
    }
});