'use strict';

jQuery(document).ready(function(){
    jQuery('.custom_link li.sub-link').append('<div class="tringle"></div>');
   
    jQuery('.tringle').on('click',function(){
    // jQuery('.tringle').click(function(){
        jQuery(this).prev('ul.sub-menu').slideToggle();
    });




// jQuery('#home_one').owlCarousel({


   var  home_slide_two = jQuery("#home_one");
    home_slide_two.owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    navText : ["<img  src='images/darkleft_arrow.png'/>","<img  src='images/dark_right_arrow.png'/>"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});



    //jQuery('.owl-carousel').owlCarousel({
    // jQuery('#light_view').owlCarousel({


    var  light_view_page = jQuery("#light_view");
    light_view_page.owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    navText : ["<img  src='images/darkleft_arrow.png'/>","<img  src='images/dark_right_arrow.png'/>"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});

//jQuery('#about_page_one').owlCarousel({

    var  about_page = jQuery("#about_page_one");
    about_page.owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    navText : ["<img  src='images/darkleft_arrow.png'/>","<img  src='images/dark_right_arrow.png'/>"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
});



// jQuery('#services_2').owlCarousel({

    var  services_page_slider = jQuery("#services_2");
    services_page_slider.owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    navText : ["<img  src='images/darkleft_arrow.png'/>","<img  src='images/dark_right_arrow.png'/>"],
    responsive:{
        0:{
            items:3
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
});   

//jQuery('.scroll_top a').click(function () {
 jQuery('.scroll_top a').on('click',function(){
    jQuery('html, body').animate({scrollTop:0}, 'slow');
});

/*Owl carousel with range */
var owl1 = $(".range_owl"),
          // rangeArr = [],
          inputType =$("input[type=range]");
          owl1.owlCarousel({
             //'loop': true,
             'mouseDrag': false,
             'autoplay': true,
             'nav':false,
             'dots':false,
            'responsive':{
                0:{
                    items:1
                },
                600:{
                    items:2
                },            
                960:{
                    items:3
                },
                1200:{
                    items:3
                }
            }
          });

          owl1.on('changed.owl.carousel', function(event) {
          console.log(event.item.index);
          inputType.val(event.item.index);
           $(".fake_range").css("background-image", 'linear-gradient(90deg, #f66639 '+event.item.index * 6.66667+'%, #ccc 0.01%)' );
        });
  
      $(".go-me").click(function() {
        owl1.trigger("next.owl.carousel");
      });
      $(".back-me").on("click", function() {
        owl1.trigger("prev.owl.carousel");
      });

      $(".range-slider").on("change", function(e) {
    
        e.preventDefault();
        console.log(inputType.val());
       
        $('.owl-carousel').trigger('to.owl.carousel', [inputType.val(),1,true]);
        
      });


        owl1.on('mousewheel', '.owl-stage', function (e) {
            if (e.deltaY>0) {
                owl1.trigger('prev.owl');
            } else {
                owl1.trigger('next.owl');
            }
            e.preventDefault();
        });

/*End Owl carousel with range */

/*Owl carousel with range 2*/

      var owl = $(".range_owl-2"),
          // rangeArr = [],
          inputType =$("input[type=range]");
          owl.owlCarousel({
             //'loop': true,
             'mouseDrag': true,
             'autoplay': true,
             'nav':false,
             'dots':false,
            'responsive':{
                0:{
                    items:1
                },
                600:{
                    items:1
                },            
                960:{
                    items:1
                },
                1200:{
                    items:1
                }
            }
          });

          owl.on('changed.owl.carousel', function(event) {
          console.log(event.item.index);
          inputType.val(event.item.index);
           $(".fake_range").css("background-image", 'linear-gradient(90deg, #f66639 '+event.item.index * 50+'%, #ccc 0.01%)' );
        });
  
      $(".custom_range_next").click(function() {
        owl.trigger("next.owl.carousel");
      });

      $(".custom_range_prev").on("click", function() {
        owl.trigger("prev.owl.carousel");
      });

      $(".range-slider").on("change", function(e) {
    
        e.preventDefault();
        console.log(inputType.val());
       
        $('.owl-carousel').trigger('to.owl.carousel', [inputType.val(),1,true]);
        
      });

/*End Owl carousel with range 2*/


});/*End Documetnt.ready*/


$('.range_owl-2').on('initialized.owl.carousel changed.owl.carousel', function(e) {
    if (!e.namespace)  {
      return;
    }
    var carousel = e.relatedTarget;
    $('.num').text(carousel.relative(carousel.current()) + 1 + '.' + carousel.items().length);
  });





    