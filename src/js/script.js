"use strict";

//LOADER/SPINNER
$(window).bind("load", function () {
    $(".spn_hol").fadeOut(1000);
});

// MENU SECTION ACTIVE
$(document).ready(function () {
    $(".navbar-nav li a").click(function () {
        $(".navbar-nav li a").parent().removeClass("active");
        $(this).parent().addClass("active");
    });
});

//OWL CAROSEL
$(document).ready(function () {
    $("#owl-demo").owlCarousel({
        loop:true,
        margin:10,
        autoplay: true,
        autoWidth:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:3,
                nav:false
            },
            1000:{
                items:5,
                nav:true,
                loop:false
            }
        }
    });
});