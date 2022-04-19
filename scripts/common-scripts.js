
;(function($){
	$(function(){

		// Begin input common focus and blur for value.
		$('input:text, input:password,input[type="email"],input[type="tel"],input[type="number"],input[type="search"], textarea').focus(function () {
		        if (this.value == this.defaultValue) {
		            this.value = ''
		        }
		    }).blur(function () {
		        if (!this.value) {
		            this.value = this.defaultValue;
		        }
		    })
		// Ends input common focus and blur for value.
        
        if ($("#carousel").length) {
            
            $('#carousel').on('init', function (event, slick, currentSlide, nextSlide) {
                $(this).find('.slick-center').find('.carousel-thumb').css({
                    "-webkit-transform": 'scale(1.3)',
                    "-moz-transform": 'scale(1.3)',
                    "transform": 'scale(1.3)',
                })
                
                /*$(this).find('.slick-center').find('.carousel-item').css({
                    "-webkit-transform": 'translateY(50px)',
                    "-moz-transform": 'translateY(50px)',
                    "transform": 'translateY(50px)',
                })*/
                $(this).find('.slick-center').prev().find(".carousel-thumb").css({
                    marginRight: 15,
                });
                $(this).find('.slick-center').next().find(".carousel-thumb").css({
                    marginLeft: 15,
                });
                
                var sliderContentHeight = $(".figure-info").outerHeight() + 20,
                    contentHeightHalf = sliderContentHeight / 2;
                $(".carousel-item-wrap").css({
                    paddingBottom: sliderContentHeight
                })
                
                
                $(".arrow-wrap").css({
                    marginTop: - contentHeightHalf
                })
                
            });
            
            $('#carousel').slick({
                centerMode: true,
                adaptiveHeight: true,
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 8000,
                centerPadding: 0,
                initialSlide: 1,
                responsive: [
                    {
                      breakpoint: 767,
                      settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                      }
                    }
                ]
                
            }).on('beforeChange', function (event, slick, currentSlide, nextSlide) {
                $('.carousel-thumb').css({
                    '-webkit-transform' : 'scale(0.67)',
                    '-moz-transform' : 'scale(0.67)', 
                    'transform': 'scale(0.67)'
                });
                
                $('.slick-center').find('.carousel-item').css({
                    "-webkit-transform": 'translateY(0px)',
                    "-moz-transform": 'translateY(0px)',
                    "transform": 'translateY(0px)',
                });
                
                $(".carousel-thumb").css({
                    marginLeft: 0,
                    marginRight: 0
                });
                                
                
            }).on('afterChange', function (event, slick, currentSlide, nextSlide) {
                //$('.slick-slide').removeClass('zoom prevSlide nextSlide');
                $(this).find('.slick-center').find('.carousel-thumb').css({
                    "-webkit-transform": 'scale(1.3)',
                    "-moz-transform": 'scale(1.3)',
                    "transform": 'scale(1.3)',
                });
                /*$(this).find('.slick-center').find('.carousel-item').css({
                    "-webkit-transform": 'translateY(50px)',
                    "-moz-transform": 'translateY(50px)',
                    "transform": 'translateY(50px)',
                });  */            
                $(this).find('.slick-center').prev().find(".carousel-thumb").css({
                    marginRight: 15,
                });
                $(this).find('.slick-center').next().find(".carousel-thumb").css({
                    marginLeft: 15,
                });
                
                var sliderContentHeight = $(".figure-info").outerHeight() + 20,
                    contentHeightHalf = sliderContentHeight / 2;
                $(".carousel-item-wrap").css({
                    paddingBottom: sliderContentHeight
                })
                
                
                $(".arrow-wrap").css({
                    marginTop: - contentHeightHalf
                })


            });
        }
        
        
        
        
        
        $(".prev").click(function(){
            $('.slick-prev').trigger('click');
            
        })
         $(".next").click(function(){
            $('.slick-next').trigger('click');
            
        })
        
        $('.phone-nav').click(function(){
            $(".nav-wrap").slideToggle()
        })
        
     if ($(window).width() > 767) {
            var $header = $("header"),
                $clone = $header.before($header.clone().addClass("fixedTop")),
                $fixedHeader = $('.fixedTop'),
                $headerHeight = $fixedHeader.outerHeight(),
                lastPos = 0;
            $(window).resize(function () {
                $headerHeight = $fixedHeader.outerHeight();
            });

            $(window).on("scroll", function () {
                $fixedHeader.removeClass('onSizing');
                var fromTop = $(window).scrollTop();
                if (fromTop > $headerHeight) {

                    $fixedHeader.css('top', '-' + $headerHeight + 'px');

                    if (fromTop < lastPos) {
                        $fixedHeader.css({
                            top: 0
                        });
                    }
                    lastPos = fromTop;


                } else {
                    $fixedHeader.css('top', '-' + $headerHeight + 'px');
                }
            });

        }
        
        
		
		
	})// End ready function.
	

})(jQuery)
