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
});