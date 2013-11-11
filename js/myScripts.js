

  $(".about-header-link").click(function() {
    $('html, body').animate({
        scrollTop: $("#me,#resume,#location").offset().top
    }, 2000);
});