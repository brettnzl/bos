  // BOS animation 
    checkviewportvisible();
    
    // Checks if items are in viewport
    function checkviewportvisible() {
        viewport = jQuery(window).height();
        jQuery('.bos').each(function(){

            scrollwindow = viewport + jQuery(window).scrollTop()
            element = jQuery(this);
            
            if (element.offset().top <= scrollwindow ) {
                element.animate({
                    'top': '0',
                    'opacity': 1
                }, 1000);
            }   
        });
    }

    jQuery(window).scroll(function(){
        checkviewportvisible();
    })
