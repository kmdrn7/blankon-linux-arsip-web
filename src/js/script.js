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

// MENU SECTION ACTIVE
$(document).ready(function () {
    $(".navbar-nav li a").click(function () {
        $(".navbar-nav li a").parent().removeClass("active");
        $(this).parent().addClass("active");
    });

    $('#tahun-sekarang').text(new Date().getFullYear());
});