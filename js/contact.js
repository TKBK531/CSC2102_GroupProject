$(document).ready(function () {
    $("#registration-number").hide();

    $("#status").change(function () {
        if ($(this).val() == "student") {
            $("#registration-number").show();
        } else {
            $("#registration-number").hide();
        }
    });

    $('#contact-form').submit(function (event) {
        var name = $('#fullName').val();
        var email = $('#email').val();
        var status = $('#status').val();
        var regNum = $('#regNum').val();

        if (name === "" || email === "" || status === "") {
            alert("Please fill in all required fields.");
            event.preventDefault();
        }

        if (status === "Student" && regNum === "") {
            alert("Please enter your registration number.");
            event.preventDefault();
        }
    });

    $("#message").on("input", function () {
        var maxLength = 500;
        var currentLength = $(this).val().length;
        var remainingLength = maxLength - currentLength;
        $("#letter-count").text(remainingLength + " characters remaining");

        if (currentLength >= maxLength) {
            $(this).val($(this).val().substr(0, maxLength));
            $(this).attr("disabled", true);
        } else {
            $(this).attr("disabled", false);
        }
    });
});