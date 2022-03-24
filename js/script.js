const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
});


$(document).ready(function() {
    $('.venobox').venobox();
});

$(function() {
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
});


$('.slick').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: '< i class = "fas fa-arrow-circle-left" > < /i>',
    prevArrow: '<i class="fas fa-arrow-circle-right"></i>',
});



           