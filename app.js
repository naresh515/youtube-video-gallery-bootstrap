var videos = $("iframe.img-fluid");
const videoStr = 'https://www.youtube.com/embed/';

$(document).ready(function () {
    var currentvidIndex = 0;
    var videoSo = '';

    $(".img-fluid").click(function () {
        openModel();
    });

    $(".close-btn").click(function () {
        $(".img-overlay").css("display", "none");
        $(".zoom-img iframe").remove();
        $(".zoom-img img").remove();
        $("body").removeClass("overlay-open");
    })

    $(".zoom-img").slick({
        arrows: true,
        prevArrow: $(".prev-btn"),
        nextArrow: $(".next-btn"),
        fade: true,
        speed: 500,
    });

    $(".prev-btn").click(function () {
        currentvidIndex--;
        if (currentvidIndex < 0) {
            currentvidIndex = videos.length - 1;
        }
        videoSo = $(videos[currentvidIndex]).data('id');
        $(".zoom-img iframe").attr("src", videoStr + videoSo);
    });

    $(".next-btn").click(function () {
        currentvidIndex++;
        if (currentvidIndex >= videos.length) {
            currentvidIndex = 0;
        }
        videoSo = $(videos[currentvidIndex]).data('id');
        $(".zoom-img iframe").attr("src", videoStr + videoSo);
    });

});

function openModel(element) {
    var videoSo = $(element).data('id');
    var imgSrc = $(element).attr('src');
    console.log(element);
    if (videoSo) {
        console.log(videoStr + videoSo)
        currentvidIndex = videos.index(element);
        $(".img-overlay").css("display", "flex");
        $(".zoom-img").append("<iframe src='" + videoStr + videoSo + "?autoplay=1&loop=1&playlist=" + videoSo + "' allowfullscreen></iframe>");
        $("body").addClass("overlay-open");
    } else if (imgSrc) {
        $(".img-overlay").css("display", "flex");
        $(".zoom-img").append("<img src='" + imgSrc + "'>");
        $("body").addClass("overlay-open");
    } else if (imgSrc) {
        $(".img-overlay").css("display", "flex");
        $(".zoom-img").append("<video src='" + imgSrc + "'controls loop autoplay>");
        $("body").addClass("overlay-open");
    }
}