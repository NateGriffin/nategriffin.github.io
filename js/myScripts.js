$('#scrollTopButton').click(function(e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 140);
    });


    $(document).ready(function() {

        $('.portfolio-items').magnificPopup({
            delegate: '.portfolio-item', // child items selector, by clicking on it popup will open
            type: 'image',
            gallery: {
                enabled: true
            }
        });


    });

    $(document).ready(function() {
        $('a[href*=#]:not([href=#])').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {

                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 800);
                    return false;
                }
            }
        });
    });