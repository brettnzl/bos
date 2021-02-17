# bos
Brett's Animate on Scroll, Simple fade up CSS and JS using Jquery.

This is a simple an effective way to make a scrolling animation on your website that resembles a fadeup without needing a huge javascript addon.

Simply add CSS:

<code>
  .bos {
            position: relative;
            top : 15px;
            opacity : 0;
        } 
 </code>
 
 Add class to HTML elements
 
<code>
  <div class="bos"></div>
</code>

Then through a Jquery Script in
<code>
<script type="text/javascript">
 
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
    
 </script>
 
 </code>
 
 
