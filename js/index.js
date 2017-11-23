$(function () {
    let slideIndex = 0;

    function autoSlide() {
        $('.slide-show ol li').eq(slideIndex).addClass("active").siblings().removeClass("active");
        $(".slide-show div img").eq(slideIndex).stop().fadeIn(1000).siblings().stop().fadeOut(1000);
    }

    $('.slide-show ol li').on('mouseenter', function () {
        slideIndex = $(this).index();
        autoSlide();
    });

    let slideTimer = setInterval(function () {
        autoSlide();
        slideIndex++;
        if (slideIndex > 4) {
            slideIndex = 0;
        }
    }, 2000);

    $(".slide-show").hover(function () {
        clearInterval(slideTimer);
    }, function () {
        slideTimer = setInterval(function () {
            autoSlide();
            slideIndex++;
            if (slideIndex > 4) {
                slideIndex = 0;
            }
        }, 2000);
    });
});