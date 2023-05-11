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
        $(".zoom-img video").remove();
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
    if (videoSo) {
        currentvidIndex = videos.index(element);
        $(".zoom-img").append("<iframe src='" + videoStr + videoSo + "?autoplay=1&loop=1&playlist=" + videoSo + "' allowfullscreen></iframe>");
    } else if (imgSrc && imgSrc.startsWith("./img")) {
        $(".zoom-img").append("<img src='" + imgSrc + "'>");
    } else if (imgSrc && imgSrc.startsWith("./video")) {
        $(".zoom-img").append("<video src='" + imgSrc + "'controls loop autoplay>");
    }
    copyElement();
}

function copyElement() {
    $(".img-overlay").css("display", "flex");
    $("body").addClass("overlay-open");
}