$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        var header_height = $("#header").height();
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - header_height
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});
