new Vue({
    el: "header",
    data: {
        sitename: "SiteName",
        menuitems: [
            {
                name: "First",
                link: ""
            },
            {
                name: "Second",
                link: ""
            },
            {
                name: "Third",
                link: ""
            },
            {
                name: "Fourth",
                link: ""
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

