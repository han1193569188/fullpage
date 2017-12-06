$(function () {
    function fn() {
        $(".newslide").eq(0).removeClass("now");
        $(".newslide").eq(1).addClass("now");
        $(".pbox").eq(0).addClass("active1");
        $(".pbox").eq(1).removeClass("active1");
        $(".p3").removeClass("active1");
        $(".p4").addClass("active1");
    }
    function fn1() {
        $(".newslide").eq(1).removeClass("now");
        $(".newslide").eq(0).addClass("now");
        $(".pbox").eq(1).addClass("active1");
        $(".pbox").eq(0).removeClass("active1");
        $(".p4").removeClass("active1");
        $(".p3").addClass("active1");
    }
    $(".pbox").eq(1).click(function () {
        fn();
    });
    $(".pbox").eq(0).click(function () {
        fn1();
    });
    $(".p4").click(function () {
        fn();
    });
    $(".p3").click(function () {
        fn1();
    });
    $(".lefttitle2").click(function () {
        $(".content").removeClass("show");
        $(".newcontent").addClass("show");
        $(".lefttitle1").removeClass("white");
        $(".lefttitle2").addClass("white");
    })
    $(".lefttitle1").click(function () {
        $(".newcontent").removeClass("show");
        $(".content").addClass("show");
        $(".lefttitle2").removeClass("white");
        $(".lefttitle1").addClass("white");
    })
});