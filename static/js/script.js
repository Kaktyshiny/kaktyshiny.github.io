new Vue({
    el: "header",
    data: {
        sitename: "SiteName",
        menuitems: [
            {
                name: "First",
                link: "#part1"
            },
            {
                name: "Second",
                link: "#part2"
            },
            {
                name: "Third",
                link: "#part3"
            },
            {
                name: "Fourth",
                link: "#footer"
            }
        ]
    }
});

$(".hamburger").click(function() {
    $(".navigation").toggleClass("open");
    $(".bg-overlay").toggleClass("open1");
});

$(document).mouseup(function (e){ // событие клика по веб-документу
    var div = $(".navigation"); // тут указываем ID элемента
    if (!div.is(e.target) // если клик был не по нашему блоку
        && div.has(e.target).length === 0) { // и не по его дочерним элементам
        // скрываем его
        $('.navigation').removeClass('open');
        $(".bg-overlay").removeClass("open1");
    }
});

$(document).ready(function() {
  $("a.scrollto").click(function() {
    var elementClick = $(this).attr("href");
    var destination = $(elementClick).offset().top - $("nav").height();
    console.log(destination);
    jQuery("html:not(:animated),body:not(:animated)").animate({
      scrollTop: destination
    }, 800);
    return false;
  });
});

new WOW().init();

$("a[href='#part2']").click(function () {
    new WOW().init();
});

$(function() {
    var blockTop1 = $('#part1').offset().top;
    var blockTop2 = $('#part2').offset().top;
    var blockTop3 = $('#part3').offset().top;
    var blockTop4 = $('#footer').offset().top;
    var $window = $(window);
    $window.on('load scroll', function() {
        var top = $window.scrollTop();
        var height = $window.height();
        if (top + height >= blockTop1) {
            $("a[href='#part1']").addClass("active");
            $("a[href='#part2']").removeClass("active");
            $("a[href='#part3']").removeClass("active");
            $("a[href='#footer']").removeClass("active");
        }
        if (top + height >= blockTop2) {
            $("a[href='#part1']").removeClass("active");
            $("a[href='#part2']").addClass("active");
            $("a[href='#part3']").removeClass("active");
            $("a[href='#footer']").removeClass("active");
        }
        if (top + height >= blockTop3) {
            $("a[href='#part1']").removeClass("active");
            $("a[href='#part2']").removeClass("active");
            $("a[href='#part3']").addClass("active");
            $("a[href='#footer']").removeClass("active");
        }
        if (top + height >= blockTop4) {
            $("a[href='#part1']").removeClass("active");
            $("a[href='#part2']").removeClass("active");
            $("a[href='#part3']").removeClass("active");
            $("a[href='#footer']").addClass("active");
        }
    });
});