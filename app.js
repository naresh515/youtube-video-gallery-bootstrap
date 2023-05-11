var videos = $("iframe.img-fluid");
const videoStr = 'https://www.youtube.com/embed/';

$(document).ready(function () {
    var currentvidIndex = 0;

    $(".img-fluid").click(function () {
        openModel();
    });

    $(".play-btn").click(function () {
        var $container = $(this).closest(".col-sm-4");
        var $video = $container.find(".img-fluid");
        openModel($video[0]);
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
        prevNextBtn();
    });

    $(".next-btn").click(function () {
        currentvidIndex++;
        if (currentvidIndex >= videos.length) {
            currentvidIndex = 0;
        }
        prevNextBtn();
    });

});

function openModel(element) {
    var videoSo = $(element).data('id');
    var imgSrc = $(element).attr('src');
    var dataType = $(element).data('type');

    if (dataType === "youtube") {
        currentvidIndex = videos.index(element);
        $(".zoom-img").append("<iframe src='" + videoStr + videoSo + "?autoplay=1&loop=1&playlist=" + videoSo + "' allowfullscreen></iframe>");
    } else if (dataType === "image") {
        $(".zoom-img").append("<img src='" + imgSrc + "'>");
    } else if (dataType === "video") {
        var videoSrc = $(element).attr('src');
        $(".zoom-img").append("<video src='" + videoSrc + "'controls loop autoplay>");
    }
    copyElement();
}

function copyElement() {
    $(".img-overlay").css("display", "flex");
    $("body").addClass("overlay-open");
}

function prevNextBtn() {
    videoSo = $(videos[currentvidIndex]).data('id');
    $(".zoom-img iframe").attr("src", videoStr + videoSo);
}