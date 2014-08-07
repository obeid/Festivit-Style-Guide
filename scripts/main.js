$(document).ready(function() {
    var bodyheight = $(window).height();
    $("header").height(bodyheight);
});

// for the window resize
$(window).resize(function() {
    var bodyheight = $(window).height();
    $("header").height(bodyheight);
});


// screen.availHeight
