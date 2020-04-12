window.onload = function () {
    var lang = window.localStorage.getItem('lang');
    if(lang != null){
            changeLang(lang);
    }
}
function changeLang(lang) {
    window.localStorage.setItem("lang", lang);
    if(lang == 'ar'){
            document.getElementById('lnagLink').setAttribute('href', 'css/style.css');
    }else if(lang == 'en'){
            document.getElementById('lnagLink').setAttribute('href', 'css/style2.css');
    }
}
;(function($){
    "use strict"


    var nav_offset_top = $('header').height() + 50; 
    /*-------------------------------------------------------------------------------
	  Navbar 
     -------------------------------------------------------------------------------*/

	//* Navbar Fixed  
    function navbarFixed(){
        if ( $('.header_area').length ){ 
            $(window).scroll(function() {
                var scroll = $(window).scrollTop();   
                if (scroll >= nav_offset_top ) {
                    $(".header_area").addClass("navbar_fixed");
                } else {
                    $(".header_area").removeClass("navbar_fixed");
                }
            });
        };
    };
    navbarFixed();





      //------- Owl Carusel  js --------//




      $(document).ready(function() {

 $('.owl-carousel').owlCarousel({
            items:5,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
});



      });




 //------- mailchimp --------//  
    function mailChimp() {
        $('#mc_embed_signup').find('form').ajaxChimp();
    }
  mailChimp();

   //-------- Counter js --------//
   $(window).on("load", function() {


    $('.portfolio-filter ul li').on('click', function () {
        $('.portfolio-filter ul li').removeClass('active');
        $(this).addClass('active');

        var data = $(this).attr('data-filter');
        $workGrid.isotope({
            filter: data
        });
    });

    if (document.getElementById('portfolio')) {
        var $workGrid = $('.portfolio-grid').isotope({
            itemSelector: '.all',
            percentPosition: true,
            masonry: {
                columnWidth: '.grid-sizer'
            }
        });
    }
});


})(jQuery)

$(function(){
    
       
    /* Arrow*/
    var myButton = document.getElementById('goup');
window.onscroll = function () {
    
    'use strict';
    
    if (window.pageYOffset >= 150)
        {
            
            myButton.style.display = 'block';
            
        
        } else {
            
            myButton.style.display = 'none';
        }
};

$('.up').click(function(){
    $('html, body').animate({scrollTop:0}, 'slow');
}); 
    
    
    
    
    });