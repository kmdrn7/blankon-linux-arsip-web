/*!
 * script.js
 * ---------
 * ---------
 */
"use strict";

//LOADER/SPINNER
$(window).bind("load", function () {
    $(".spn_hol").fadeOut(1000);

    var domNode = anime({
        targets: '#boni-pic',
        translateX: -500,            
        direction: 'reverse',
        delay: 5000,
        duration: 1500,
        easing: 'easeInCubic'
    });
    
    var domNode2 = anime({
        targets: '#boni-text',
        translateX: 600,
        direction: 'reverse',            
        delay: 5000,
        duration: 1500,
        easing: 'easeInCubic'
    });
    
    var domNode_nav = anime({
        targets: '.navbar',
        translateY: -400,
        direction: 'reverse',
        delay: 5000,
        duration: 1500,
        easing: 'easeInCubic'
    });
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

    $('.nav-menu-list').click(function(e){
        e.preventDefault();
        var section = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(section).offset().top-200
        }, 800);
    });

    Prism.plugins.NormalizeWhitespace.setDefaults({
        'remove-trailing': true,
        'remove-indent': true,
        'left-trim': true,
        'right-trim': true,
        /*'break-lines': 80,
        'indent': 2,
        'remove-initial-line-feed': false,
        'tabs-to-spaces': 4,
        'spaces-to-tabs': 4*/
    });    
});
