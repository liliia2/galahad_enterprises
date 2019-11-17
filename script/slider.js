$(document).ready(function () {

    // let ua = navigator.userAgent.toLowerCase();
    // let isAndroid = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");
    // let iOS = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
    // let trigger = false;
    // let triggerForspecificationBtn = false;
    let currentSlideIndex = 0;

    // var fontSize = localStorage.getItem('font-size');
    // if (isAndroid || iOS === true) {
    //     $("body").addClass("mobile")
    // }

    $('.slider .all-slides').slick({
        speed: 600,
        fade: true,
        cssEase: 'linear',
        prevArrow: false,
        nextArrow: false,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 10000
    });

    $('.slider .all-slides').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        $('.all-slides').addClass("slick-before-change");
    });

    $('.slider .all-slides').on('afterChange', function(event, slick, currentSlide, nextSlide){
        currentSlideIndex = currentSlide;
    });

    $(".nav1").on("click", function () {
        $('.slider .all-slides')[0].slick.slickGoTo(0);
    });
    $(".nav2").on("click", function () {
        $('.slider .all-slides')[0].slick.slickGoTo(1);
    });
    $(".nav3").on("click", function () {
        $('.slider .all-slides')[0].slick.slickGoTo(2);
    });
    $(".nav4").on("click", function () {
        $('.slider .all-slides')[0].slick.slickGoTo(3);
    });

});