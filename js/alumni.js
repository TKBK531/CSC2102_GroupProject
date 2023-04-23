function validateForm(event) {
    var nameField = document.getElementById("name");
    var pictureField = document.getElementById("picture");
    var classYearField = document.getElementById("class_year");
    var alumniCodeField = document.getElementById("alumni_code");

    var nameError = document.getElementById("name-error");
    var pictureError = document.getElementById("picture-error");
    var classYearError = document.getElementById("class-year-error");
    var alumniCodeError = document.getElementById("alumni-code-error");

    if (nameField.value.trim() === "") {
        nameField.classList.add("is-invalid");
        nameError.innerHTML = "Name is required.";
        event.preventDefault();
    } else {
        nameField.classList.remove("is-invalid");
        nameError.innerHTML = "";
    }

    if (pictureField.value.trim() === "") {
        pictureField.classList.add("is-invalid");
        pictureError.innerHTML = "Picture is required.";
        event.preventDefault();
    } else {
        pictureField.classList.remove("is-invalid");
        pictureError.innerHTML = "";
    }

    if (classYearField.value.trim() === "") {
        classYearField.classList.add("is-invalid");
        classYearError.innerHTML = "Class year is required.";
        event.preventDefault();
    } else {
        classYearField.classList.remove("is-invalid");
        classYearError.innerHTML = "";
    }

    if (alumniCodeField.value.trim() === "") {
        alumniCodeField.classList.add("is-invalid");
        alumniCodeError.innerHTML = "Alumni code is required.";
        event.preventDefault();
    } else {
        alumniCodeField.classList.remove("is-invalid");
        alumniCodeError.innerHTML = "";
    }
}

document.getElementById("notable-alumni-form").addEventListener("submit", validateForm);
