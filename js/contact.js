$(document).ready(function () {
    $("#registration-number").hide();

    $("#status").change(function () {
        if ($(this).val() == "student") {
            $("#registration-number").show();
        } else {
            $("#registration-number").hide();
        }
    });
});

const form = document.getElementById('contact-form');
const fullName = document.getElementById('full-name');
const email = document.getElementById('email');
const faculty = document.getElementById('faculty');
const status = document.getElementById('status');
const regNumber = document.getElementById('reg-number');

form.addEventListener('submit', (event) => {

    event.preventDefault();

    let hasError = false;

    // if (fullName.value.trim() === "") {
    //     fullName.classList.add("is-invalid");
    //     document.getElementById("name-error").innerHTML = "Please enter your name.";
    //     hasError = true;
    // } else {
    //     fullName.classList.remove("is-invalid");
    //     document.getElementById("name-error").innerHTML = "";
    // }


    if (!fullName.value.trim()) {
        fullName.style.outline = '2px solid red';
    } else {
        fullName.style.outline = 'none';
    }

    if (!email.value.trim()) {
        email.style.outline = '2px solid red';
    } else {
        email.style.outline = 'none';
    }

    if (status.value === 'student' || status.value === 'lecturer') {
        if (!regNumber.value.trim()) {
            regNumber.style.outline = '2px solid red';
        } else {
            regNumber.style.outline = 'none';
        }
    }

    if (fullName.value.trim() && email.value.trim() && faculty.value && status.value && ((status.value === 'student' || status.value === 'lecturer') ? regNumber.value.trim() : true)) {
        form.submit();
    }
});
