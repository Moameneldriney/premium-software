(function($) {

  // Toggle Button Menu
    $('#sidebarCollapse').on('click',function(){
        $('#sidebar').toggleClass('active');
    });

    // Wow Animation
    new WOW().init();

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

  /* ---------------------------------------------
        scroll body to 0px on click
  //    --------------------------------------------- */
  $(window).scroll(function(){

    });
    $('#back-top').on('click', function() {
        $('html , body').animate({
            scrollTop : 0
        }, 'slow');
    });
    
    
    
    
    });

})(jQuery);

