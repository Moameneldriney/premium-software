
// jQuery(document).ready(function($){
//   var path = window.location.pathname.split("/").pop();
//   if (path == " "){
//     path ='index.html';
//   }
//   var target =  $('nav li a[href="'+ path +'"]');
//   target.addClass('active');
// });


$(document).ready(function () {
  $('.animated').each(function (index) {
    $(this).delay($(this).data('delay')).queue(function () {
      $(this).addClass('animate-in');
    });
  });
      // Porfolio isotope and filter
      $(window).on('load', function () {
        var portfolioIsotope = $('.portfolio-container').isotope({
          itemSelector: '.portfolio-item',
          isOriginLeft: false
        });
        $('#portfolio-flters li').on( 'click', function() {
          $("#portfolio-flters li").removeClass('filter-active');
          $(this).addClass('filter-active');
      
          portfolioIsotope.isotope({ filter: $(this).data('filter') });
        });
      });
});

(function($) {
  "use strict";


  $(function() {  
    $("body").niceScroll({
      cursorcolor: "#1c93c5",
      cursorborder: "0px",
      zindex: "9999",
      horizrailenabled:false
    });
});

  /*--------------------------
  preloader
  ---------------------------- */
  $(window).on('load', function() {
    var pre_loader = $('#preloader');
    pre_loader.fadeOut('slow', function() {
      $(this).remove();
    });
  });

  
  /*---------------------
   TOP Menu Stick
  --------------------- */
  var s = $("#sticker");
  var pos = s.position();
  $(window).on('scroll', function() {
    var windowpos = $(window).scrollTop() > 300;
    if (windowpos > pos.top) {
      s.addClass("stick");
    } else {
      s.removeClass("stick");
    }
  });

  /*----------------------------
   Navbar nav
  ------------------------------ */
  var main_menu = $(".main-menu ul.navbar-nav li ");
  main_menu.on('click', function() {
    main_menu.removeClass("active");
    $(this).addClass("active");
  });


  /*----------------------------
   wow js active
  ------------------------------ */
  new WOW().init();
  

  $(".navbar-collapse a:not(.dropdown-toggle)").on('click', function() {
    $(".navbar-collapse.collapse").removeClass('in');
  });

  /*----------------------------
   Scrollspy js
  ------------------------------ */
  var Body = $('body');
  Body.scrollspy({
    target: '.navbar-collapse',
    offset: 80
  });

  /*---------------------
    Venobox
  --------------------- */
  var veno_box = $('.venobox');
  veno_box.venobox();

  /*----------------------------
  Page Scroll
  ------------------------------ */
  var page_scroll = $('a.page-scroll');
  page_scroll.on('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $($anchor.attr('href')).offset().top - 55
    }, 1500, 'easeInOutExpo');
    event.preventDefault();
  });

  /*--------------------------
    Back to top button
  ---------------------------- */
  $(document).ready(function(){
    $('.header-bg').animatedbg();
  });
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });

  $('.back-to-top').click(function(){
    $('html, body').animate({scrollTop : 0},1500, 'easeInOutExpo');
    return false;
  });

  /*----------------------------
   Parallax
  ------------------------------ */
  var well_lax = $('.wellcome-area');
  well_lax.parallax("50%", 0.4);
  var well_text = $('.wellcome-text');
  well_text.parallax("50%", 0.6);

  /*--------------------------
   collapse
  ---------------------------- */
  var panel_test = $('.panel-heading a');
  panel_test.on('click', function() {
    panel_test.removeClass('active');
    $(this).addClass('active');
  });

  /*---------------------
   Testimonial carousel
  ---------------------*/
  var test_carousel = $('.testimonial-carousel');
  test_carousel.owlCarousel({
    loop: true,
    rtl:true,
    nav: false,
    dots: true,
    autoplay: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  });

  /*---------------------
   Circular Bars - Knob
--------------------- */
  if (typeof($.fn.knob) != 'undefined') {
    var knob_tex = $('.knob');
    knob_tex.each(function() {
      var $this = $(this),
        knobVal = $this.attr('data-rel');

      $this.knob({
        'draw': function() {
          $(this.i).val(this.cv + '%')
        }
      });

      $this.appear(function() {
        $({
          value: 0
        }).animate({
          value: knobVal
        }, {
          duration: 2000,
          easing: 'swing',
          step: function() {
            $this.val(Math.ceil(this.value)).trigger('change');
          }
        });
      }, {
        accX: 0,
        accY: -150
      });
    });
  }
  var owl = $("#owl-demo");
 
  owl.owlCarousel({
      autoplay:true,
      autoplayTimeout:2000,
      autoplayHoverPause:true,
      items : 3, //10 items above 1000px browser width
      loop  : true,
      rtl:true,
      itemsDesktop : [1000,5], //5 items between 1000px and 901px
      itemsDesktopSmall : [900,3], // betweem 900px and 601px
      itemsTablet: [600,2], //2 items between 600 and 0
      itemsMobile : false, // itemsMobile disabled - inherit from itemsTablet option
      navigationText : true,
      margin : 30,
      nav    : true,
      smartSpeed :600,
      responsiveClass:true,
      responsive:{
          0:{
              items:1,
              nav:true
          },
          600:{
              items:2,
              nav:false
          },
          1000:{
              items:3,
              nav:true,
              loop:true
          }
      }

  });

  $( ".owl-prev").html('<i class="fa fa-chevron-right"></i>');
  $( ".owl-next").html('<i class="fa fa-chevron-left"></i>');
  
})(jQuery);
