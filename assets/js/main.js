/////////////////////////////////////////////////////
// Mobile menu
const openBtn = document.querySelector(".open-btn")
const nav_list = document.querySelector(".navigation__list")
const overlay = document.querySelector(".overlay")
const navContact = document.querySelector(".nav-contact")

function mobileMenu() {
    openBtn.classList.toggle("active");
    nav_list.classList.toggle("active")
    overlay.classList.toggle("hidden")
    navContact.classList.toggle("hidden")
}

openBtn.addEventListener("click", mobileMenu)
overlay.addEventListener("click", mobileMenu)

//// faq

$(document).ready(function () {
    $('.accordion .accordion__link').click(function () {
        $(this).toggleClass('active');
        $(this).next('.content').slideToggle(400);
    });
});

// //////////////////
//GALLERY
$('.single-gallery-item .popup-btn').magnificPopup({
    type: 'image',
    gallery: {
        enabled: true
    }
})


///////////////////////////////////////
// Navbar scroll

$(window).on('scroll', function () {
    if ($(window).scrollTop() > 200) {
        $('#navbar').addClass('sticky')
    } else {
        $('#navbar').removeClass('sticky')

    }

});

///////////////////////////////////////


// $(window).scroll(function () {
//     var windscroll = $(window).scrollTop();
//     if (windscroll >= 100) {
//         $('section').each(function (i) {
//             // The number at the end of the next line is how pany pixels you from the top you want it to activate.
//             if ($(this).position().top <= windscroll - -1000) {
//                 $('.navigation__link.active').removeClass('active');
//                 $('.navigation__link').eq(i).addClass('active');
//             }
//         });

//     } else {

//         $('.navigation__link.active').removeClass('active');
//         $('.navigation__link:first').addClass('active');
//     }

// }).scroll();


let sections = document.querySelectorAll("section")
let navLi = document.querySelectorAll(".navigation__link")

console.log(navLi[0]);

window.onscroll = () => {
    var current = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;


        if (window.pageYOffset >= sectionTop + -100) {
            current = section.getAttribute("id");
        }
    });

    console.log(current);

    navLi.forEach((li) => {
        li.classList.remove("active");
        if (current != "") {
            if (li.href.includes(current)) {
                li.classList.add('active');
            }
        }
    });
};


//////
AOS.init({ once: true, delay: 150 });

//////////////////////////////////////////
// Navbar-scroll

$('a[href^="#"]').on('click', function (e) {
    var target = this.hash,
        $target = $(target);

    $('html, body').stop().animate({
        'scrollTop': $target.offset().top - 70
    }, 200, 'swing', function () {
        window.location.hash = target;
    });
});

