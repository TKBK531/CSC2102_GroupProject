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


    

    $('.item:first').addClass('active');


    setInterval(function () {

        var active = $('.item.active');


        active.removeClass('active');

        if (active.is(':last-child')) {

            $('.item:first').addClass('active');
        } else {

            active.next().addClass('active');
        }
    }, 5000);
});