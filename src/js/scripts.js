$(document).ready(function () {
    $('.header__nav--menu__point').hover(
        function () {
            $(this).children('ul').stop(false, false).fadeIn(300).css("display", "flex").addClass("active");
            $(this).children('a').addClass("active");
        },
        function () {
            $(this).children('ul').stop(false, false).fadeOut(300).css("position", "absolute").removeClass("active");
            $(this).children('a').removeClass("active");
        }
    );

    $(".request__phone").mask("+7 (999) 999-99-99");

    $('.main__slider--box').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        variableWidth: true,
        adaptiveHeight: true,
        arrows: true,
        autoplay: false,
        speed: 1500,
        infinite: true,
    });
});