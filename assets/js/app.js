// navbar
const menu = document.querySelector('.menu');
const close = document.querySelector('.close');
const nav = document.querySelector('.nav');

menu.addEventListener('click', () => {
    nav.classList.add('open-nav');
})
close.addEventListener('click', () => {
    nav.classList.remove('open-nav');
})

// sticky navbar
window.addEventListener("scroll", function() {
    const navbar = document.getElementById('navbar');
    if (window.pageYOffset > 0) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
});

// chatbox
const chatbox = document.querySelector('.chatbox');
const chatbutton = document.querySelector('.chatbutton');
const chatClose = document.querySelector('.chat-close');

chatbutton.addEventListener('click', () => {
    chatbox.classList.remove('open-chatbox');
})

chatClose.addEventListener('click', () => {
    chatbox.classList.add('open-chatbox');
})

// accordion
$('.accordion-collapse').each(function() {
    var $this = $(this);
    $this.on('click', function(e) {
        var has = $this.hasClass('active');
        $('.accordion-collapse').removeClass('active');
        if (has) {
            $this.removeClass('active');
        } else {
            $this.addClass('active');
        }
    });
});

//   testimonial slider
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    autoplay: {
        delay: 3000,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

// client logo slider
var swiper = new Swiper(".mySwiperClientLogo", {
    autoplay: {
        delay: 3000,
    },
    slidesPerView: 5,
    spaceBetween: 30,
    loop: true,
    loopFillGroupWithBlank: true,
});

// wow ja
new WOW().init();