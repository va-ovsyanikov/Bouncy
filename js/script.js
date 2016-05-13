$(document).ready(function(){

//инициализация wow.js
    new WOW().init();

//    плавающее меню
    $(window).scroll(function() {
        var top = $(document).scrollTop();
        if (top < 600) {$(".top_line").css({top: '0', position: 'static',backgroundColor: 'rgba(0, 0, 0, 0)', boxShadow: '0 1px 1px rgba(0, 0, 0, 0)',height:'auto', paddingTop: 35  });


                       }
        else {$(".top_line").css({top: '0', left: '0', position: 'fixed', width:'100%', zIndex:'99999', backgroundColor: 'rgba(0, 0, 0, 1)',boxShadow: '0 1px 1px rgba(0, 0, 0, 0.5)', height:'54', paddingTop: 12  });
              //            $('.header_menu').css({marginTop: '23'});
             }
    });



    //   анимация кнопки меню 
    $('.cmn-toggle-switch').click(function(){
        $(this).toggleClass('active');
    });



    //    адаптивное меню   
    $('.cmn-toggle-switch').click(function(){
        $('.header_menu').toggleClass('active_menu');
        if($('.header_menu').hasClass('active_menu')){
            $('body').addClass('active_body')
        }else{
            $('body').removeClass('active_body')
        }
    });



    //    easytabs
    $('#tab-container').easytabs({
        tabs:" ul > li"
    });


    $('#tab-container-2').easytabs({
        tabs:" ul > li"
    });

    //    imagesLoaded
    $('.works').imagesLoaded(function(){
        //imagefill        
        $('.item_works').imagefill();


    });

    //knob
    $(".dial-1, .dial-2,.dial-3").knob();


    $(".dial-1").knob();
    $({animatedVal: 0}).animate({animatedVal: 80}, {
        duration: 2000,
        easing: "swing",
        step: function() {
            $(".dial-1").val(Math.ceil(this.animatedVal)).trigger("change");
        }
    });

    $(".dial-2").knob();
    $({animatedVal: 0}).animate({animatedVal: 75}, {
        duration: 2000,
        easing: "swing",
        step: function() {
            $(".dial-2").val(Math.ceil(this.animatedVal)).trigger("change");
        }
    });

    $(".dial-3").knob();
    $({animatedVal: 0}).animate({animatedVal: 60}, {
        duration: 2000,
        easing: "swing",
        step: function() {
            $(".dial-3").val(Math.ceil(this.animatedVal)).trigger("change");
        }
    });




    //    imagesLoaded
    $('.grid-item img').imagesLoaded(function(){     

        //  fancybox
        $('.grid a').fancybox();

        // isotope
        $('.grid').isotope({
            itemSelector: '.grid-item',
            percentPosition: true

        });
        $('.source li').click(function(){
            $('.source li').removeClass('active_foto');
            $(this).addClass('active_foto');

            var selector = $(this).attr('data-filter');
            $(".grid").isotope({
                filter: selector,
                animationOptions: {
                    duration:500,
                    easing: 'linear',
                    queue: false,
                }

            });
            return false;

        });


    }); //end imagesLoaded


//    карусельки
    $('.owl-carousel').owlCarousel({
        items:1,
        nav:true,
        navText:'',
        loop:true,
        autoplay:true,
        smartSpeed:1500,
        autoplayTimeout:1500,
        autoplayHoverPause: true
    });

    $('.vertic_owl-carousel').owlCarousel({
        items:1,
        nav:true,
        navText:'',
        loop:true,
        autoplay:true,
        smartSpeed:1500,
        autoplayTimeout:1500,
        animateOut: 'slideOutUp',
        animateIn: 'slideInUp'
    });



         $('.item_price').mouseenter(function(){
             var t = $(this)
            if(t.find('.atop_price_button')){
                t.find('.atop_price_button').slideDown();
            };
        });

    
         $('.item_price').mouseleave(function(){
             var t = $(this)
            if(t.find('.atop_price_button')){
                t.find('.atop_price_button').slideUp();
            };
        });
  
    


//карта
    $('.bg_map span').click(function(){

        $('.bg_map').slideUp();
    });


//    кнопка для прокрутки вниз
    $('.button_scroll span').click(function(){
        $('html, body').animate({scrollTop:
          $('.header').height()+20}, "slow");
        return false;


    });


    
//    скролл
    $('.header_menu a, .top').mPageScroll2id();


	$("#form1,#form2").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
			
			setTimeout(function() {
				// Done Functions
				$("#form2, #form1").trigger("reset");

			}, 1000);
			
		});
		return false;
	});


});

