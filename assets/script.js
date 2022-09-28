jQuery(function($){
    "use strict";


    const isMobile = {
        Android:function () {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry:function () {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS:function () {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera:function () {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows:function () {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function () {
            return (
                isMobile.Android() ||
                isMobile.BlackBerry() ||
                isMobile.iOS() ||
                isMobile.Opera() ||
                isMobile.Windows());
        }
    };
    
    
    if (isMobile.any()) {
        document.body.classList.add('_mobile_added');
        let menuArrows = document.querySelectorAll('.submenu_arrow_span');
        if (menuArrows.length > 0) {
            for (let index = 0; index < menuArrows.length; index++) {
                const menuArrow = menuArrows[index];
                menuArrow.addEventListener("click", function (e) {
                    menuArrow.parentElement.classList.toggle('_active');
                });
            }
        }
    } else {
        
        document.body.classList.add('_pc_added');
    }
    
   ///////////////////////////////////////////////////////////////////////////////// 
    const menuLinks = document.querySelectorAll('.menulink_li-a[data-goto], .menulink_sub_li-a[data-goto]');
    if (menuLinks.length > 0) {
        menuLinks.forEach(menuLink => {
            menuLink.addEventListener("click", onMenuLinkClick);
        });
    
        function onMenuLinkClick(e) {
            const menuLink = e.target;
            if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
                const gotoBlock = document.querySelector(menuLink.dataset.goto);
                const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - document.querySelector('header').offsetHeight;
    
                if (iconMenux.classList.contains('_active')) {
                    document.body.classList.remove('_lock');
                    iconMenux.classList.remove('_active');
                    navMenu.classList.remove('_active');
    
                }
    
                window.scrollTo({
                    top: gotoBlockValue,
                    behavior: "smooth"
                });
                e.preventDefault();
            }
        }
    }
 ///////////////////////////////////////////////////////////
 const iconMenux = document.querySelector('.menu_icon_div');
const navMenu = document.querySelector('.nav_menu_nav');
if (iconMenux) {
    
    iconMenux.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock');
        iconMenux.classList.toggle('_active');
        navMenu.classList.toggle('_active');
    });
}






















































//////////////////////////////////////////////////////////////////////////////Mobile navigation


//tweet slider
if($('.content_slider_tweeter').length){
        $('.content_slider_tweeter').slick({
           vertical: true,
           appendArrows: $('.tweet_slider .arrows'),
           prevArrow: '<span class="upto"><i class="fa-solid fa-arrow-up"></i></span>',
           nextArrow: '<span class="downto"><i class="fa-solid fa-arrow-down"></i></span>',
        });
}
    
  
if($('.home_slider').length){
    $('.home_slider').slick({
       vertical: true,
       arrows: false,
       dots: true
    });
}

    if($('.shop_carusel').length){
        $('.shop_carusel').slick({
            Infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            appendArrows: $('.shop_slider_navigation'),
            prevArrow: '<div class="left"><i class="fa-solid fa-arrow-left"></i></div>',
            nextArrow: '<div class="right"><i class="fa-solid fa-arrow-right"></i></div>',
            responsive: [
                {
                    breakpoint: 430,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    }
    
    if($('.testimonial_carousel').length){
        $('.testimonial_carousel').slick({
            Infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            appendArrows: $('.testimonial_slider_box'),
            prevArrow: '<div class="left_arrow"><div class="left"><i class="fa-solid fa-arrow-left"></i></div></div>',
            nextArrow: '<div class="right_arrow"><div class="right"><i class="fa-solid fa-arrow-right"></i></div></div>',
            responsive: [
                {
                  breakpoint: 430,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                   }
                }
            ]
        });
    
    
    $('.testimonial_carousel').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        var tabs_container = $('.testimonial_tab_container');

        tabs_container.find($('.tab-item')).hide();
        tabs_container.find($('.tab-' +nextSlide)).show();
        });
    }




    if($('.open_video').length){
        $('.open_video').magnificPopup({
          disableOn: 700,
          type: 'iframe',
          mainClass: 'mfp-fade',
          removalDelay: 160,
          preloader: false,
          fixedContentPos: false
        });
    } 

    if($('.testy_gallery').length){
        $('.testy_gallery').magnificPopup({
          type: 'image',
          closeOnContentClick: true,
          mainClass: 'mfp-img-mobile',
          image: {
            verticalFit: true
        }
        });
    }
});

