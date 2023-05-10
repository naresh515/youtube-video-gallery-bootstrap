$(document).ready(function () {
    $('.video-gallery').magnificPopup({
        delegate: 'a',
        type: 'iframe',
        gallery: {
            enabled: true
        },
        src: $('<video controls>\
                      <source src="'+ $(this).attr('href') + '" type="video/mp4">\
                      Désolé, votre navigateur ne supporte pas les vidéos.\
                    </video>')
    });
})