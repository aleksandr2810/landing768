import $ from 'jquery';
window.$ = window.jQuery = $;
import '@fortawesome/fontawesome-free/js/all.js';
import 'slick-carousel';

import  "@scss/main.scss" ;


$('.menu-btn').on('click',function (e){
    console.log(123);
e.preventDefault;
$(this).toggleClass('menu-btn_active');
});

$(document).ready(function () {
    $('.slider').slick({
        slidesToShow:3,
        asNavFor:'.sliderbig',
    });
    $('.sliderbig').slick({
        arrows:false,
        fade:true,
        asNavFor: '.slider',
    });
});
