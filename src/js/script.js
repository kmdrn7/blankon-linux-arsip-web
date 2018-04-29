/*!
 * script.js
 * ---------
 * ---------
 */
"use strict";

//LOADER/SPINNER
$(window).bind("load", function () {
    $(".spn_hol").fadeOut(1000);
});

window.onload = function () {

    var boniBootAnimation = anime({
        targets: '#boni-pic',
        translateX: -500,
        direction: 'reverse',
        delay: 3000,
        duration: 1500,
        easing: 'easeInOutExpo'
    });

    var welcomeTextBootAnimation = anime({
        targets: '#boni-text',
        translateX: 600,
        direction: 'reverse',
        delay: 3000,
        duration: 1500,
        easing: 'easeInOutExpo'
    });

    var navbarBootAnimation = anime({
        targets: '.navbar',
        translateY: -400,
        direction: 'reverse',
        delay: 3000,
        duration: 1500,
        easing: 'easeInOutExpo'
    });
}

// MENU SECTION ACTIVE
$(document).ready(function () {
    $(".navbar-nav li a").click(function () {
        $(".navbar-nav li a").parent().removeClass("active");
        $(this).parent().addClass("active");
    });

    $('#tahun-sekarang').text(new Date().getFullYear());
});