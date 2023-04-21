$(document).ready(function () {

    var totalAmountNeeded = 500000;
    var totalAmountRaised = 175000;
    var progress = (totalAmountRaised / totalAmountNeeded) * 100;
    $('.progress-bar').animate({ width: progress + '%' }, 2500);
    $('.progress-bar').attr('aria-valuenow', progress);
    $('.progress-bar').text(progress.toFixed(0) + '%');

    // Counter animation
    $({ Counter: 0 }).animate({ Counter: totalAmountRaised }, {
        duration: 2500,
        easing: 'swing',
        step: function () {
            $('.counter').text(Math.ceil(this.Counter));
        }
    });


    

    // Set the first item to active
    $('.item:first').addClass('active');

    // Set the interval to rotate every 5 seconds
    setInterval(function () {
        // Get the active item
        var active = $('.item.active');

        // Remove the active class from the current item
        active.removeClass('active');

        // Check if this is the last item
        if (active.is(':last-child')) {
            // Set the first item to active
            $('.item:first').addClass('active');
        } else {
            // Set the next item to active
            active.next().addClass('active');
        }
    }, 5000);
});