//pagely test
function DropDown(el) {
	this.dd = el;
	this.initEvents();
}
DropDown.prototype = {
	initEvents : function() {
		var obj = this;

		obj.dd.on('click', function(event){
			$(this).toggleClass('active');
			event.stopPropagation();
		});	
	}
}

$(function(){
	$(".card").flip();

	$('.section-testimonial .slider').slick({
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 3,
        focusOnSelect: true,
        responsive: [{
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3
            }
        }, {
            breakpoint: 480,
            settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }]
    });
    
    
    $('.section-testimonial .slider').on('afterChange', function(event, slick, currentSlide) {

        $(".testimonyArea").html($(".slick-center .testimonyCnt").html());
    });
    $('.slick-slide , .slick-prev , .slick-next').on('click', function() {
        $(".testimonyArea").html($(".slick-center .testimonyCnt").html());
    });
    $(".section-testimonial .testimonyArea").html($(".slick-center .testimonyCnt").html());
    
    $(".carousel-description").html($(".carousel--mobileview .carousel-indicators li").html());
    $('.carousel--mobileview').on('slid.bs.carousel', function () {
	    $('.carousel-description').html($(".carousel--mobileview .carousel-indicators .active").html());
	});

	/* secondary indicators for carousel */
	$('.carousel').on('slid.bs.carousel', function() {
	  $(".carousel-indicators2 li").removeClass("active");
	  indicators = $(".carousel-indicators li.active").data("slide-to");
	  a = $(".carousel-indicators2").find("[data-slide-to='" + indicators + "']").addClass("active");
	  //console.log(indicators);
	})
	// on click on indicators2;
	$('.carousel-indicators2 li').on('click', function() {
		newindicator = $(this).data("slide-to");
		$(".carousel-indicators li").removeClass("active");
		$(".carousel-indicators2 li").removeClass("active");
		$(".carousel-indicators2").find("[data-slide-to='" + newindicator + "']").addClass("active");
		$(".carousel-indicators2").find("[data-slide-to='" + newindicator + "']").addClass("active");
		//console.log(newindicator);
	});
	/************************/
	
	var $lateral_menu_trigger = $('#cd-menu-trigger'),
		$content_wrapper = $('.wrapper'),
		$navigation = $('#top,#top2');

	//open-close lateral menu clicking on the menu icon
	$lateral_menu_trigger.on('click', function(event){
		event.preventDefault();
		
		$lateral_menu_trigger.toggleClass('is-clicked');
		$navigation.toggleClass('lateral-menu-is-open');
		$content_wrapper.toggleClass('lateral-menu-is-open').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
			// firefox transitions break when parent overflow is changed, so we need to wait for the end of the trasition to give the body an overflow hidden
			$('body').toggleClass('overflow-hidden');
			$('html').toggleClass('overflow-hidden');
		});
		$('#cd-lateral-nav').toggleClass('lateral-menu-is-open');
		
		//check if transitions are not supported - i.e. in IE9
		if($('html').hasClass('no-csstransitions')) {
			$('html').toggleClass('overflow-hidden');
			$('body').toggleClass('overflow-hidden');
		}
		
		$('.carousel').carousel('pause');
	});

	//close lateral menu clicking outside the menu itself
	$content_wrapper.on('click', function(event){
		if( !$(event.target).is('#cd-menu-trigger, #cd-menu-trigger span') ) {
			$lateral_menu_trigger.removeClass('is-clicked');
			$navigation.removeClass('lateral-menu-is-open');
			$content_wrapper.removeClass('lateral-menu-is-open').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
				$('body').removeClass('overflow-hidden');
			});
			$('#cd-lateral-nav').removeClass('lateral-menu-is-open');
			//check if transitions are not supported
			if($('html').hasClass('no-csstransitions')) {
				$('body').removeClass('overflow-hidden');
				$('html').removeClass('overflow-hidden');
			}

		}
	});

	//open (or close) submenu items in the lateral menu. Close all the other open submenu items.
	$('.menu-item-has-children').children('a').on('click', function(event){
		event.preventDefault();
		$(this).toggleClass('submenu-open').next('.sub-menu').slideToggle(200).end().parent('.menu-item-has-children').siblings('.menu-item-has-children').children('a').removeClass('submenu-open').next('.sub-menu').slideUp(200);
	});
	
	$('.carousel-tooltip').on('slide.bs.carousel', function () {
		$('.carousel-indicators li').tooltip('show');
	});
	
//	$('.toggle-menu').jPushMenu({closeOnClickLink: false});
    $('.dropdown-toggle').dropdown();
    
    $('[data-toggle="btns"] .btn').on('click', function(){
		var $this = $(this);
	  	$this.parent().find('.active').removeClass('active');
	    $this.addClass('active');
	});
	
	$(".loggedIn").click(function(){
		$(".profddl").slideToggle("down");
	});
	
	$(document).click(function() {
		$(".profddl").slideUp();
	});
	
	$(".custom-dropdown").change(function(){
		if($(this).val() != ""){
			window.location.href = $(this).val();
		}
	});
		
	var hash = document.location.hash;
	var prefix = "tab_";
	if (hash) {
	    $('.section-faq ul.non-stacked a[href="'+hash.replace(prefix,"")+'"]').tab('show');
	} 
	
	
	$(".mobile-wrap .dropdown .dropdown-toggle").on("click" , function(){
		
		//$(this).parents(".nav").toggleClass("toggled");
		if($(this).parents(".mobile-wrap").find(".dropdown.open").length > 0){
			$(this).parents(".mobile-wrap").addClass("toggled");
		}else{
			$(this).parents(".mobile-wrap").removeClass("toggled");
		}
	});
	$(".driverBanner").css("max-width" , $(window).width());
	
	$('a[href*="#"]:not([href="#"]):not(.toggleTab):not(.toggleCollapse)').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html, body').animate({
	          scrollTop: target.offset().top
	        }, 1000);
	        return false;
	      }
	    }
	});
	

//	  var masonryInit = true;	// set Masonry init flag
//	  $.fn.almComplete = function(alm){ // Ajax Load More callback function

//	      var $container = $('#masonry-grid .grid'); // our container
//	      if(masonryInit){
	        // initialize Masonry only once
//	        masonryInit = false;
//	        $container.masonry({
//	          itemSelector: '.grid-item',
//	          percentPosition: true,
//	          columnWidth: $container.find('.grid-sizer')[0],
//	        });		      
//	      }else{
//	          $container.masonry('reloadItems'); // Reload masonry items after callback
//	      }
//	      $container.imagesLoaded( function() { // When images are loaded, fire masonry again.
//	        $container.masonry();
//	      });

//	  };
	
	$(".pressCat .caretBx").click(function(){
		$(this).parents(".pressCat").toggleClass("open");
	});

	/*****dropdownlist********/
	var dd = new DropDown( $('#dd') );

	$(document).click(function() {
		// all dropdowns
		$('.wrapper-dropdown-5').removeClass('active');
	});
	/*****dropdownlist********/

	/*if($(window).width() > 767){
		var barPos = $(".navBlog").offset().top;
		$(window).scroll(function (event) {
			var scroll = $(window).scrollTop();
			if(scroll>=barPos){
				$(".navBlog").addClass("sticky");
				$(".blogBar").addClass("mTop");
			}else{
				$(".navBlog").removeClass("sticky");
				$(".blogBar").removeClass("mTop");
			}
		});
	}*/
	
	
	if($(window).width() <= 768){
		
		/********detect download link**********/
		
		/********detect download link**********/
		
		
		/****scroll nav up n down ****/
		var didScroll;
		var lastScrollTop = 0;
		var delta = 5;
		var navbarHeight = $('.flypanels-topbar').outerHeight();
		
		$(window).scroll(function(event){
			didScroll = true;
		});

		setInterval(function() {
			if (didScroll) {
				hasScrolled();
				didScroll = false;
			}
		}, 250);

		function hasScrolled() {
			var st = $(this).scrollTop();
			
			// Make sure they scroll more than delta
			if(Math.abs(lastScrollTop - st) <= delta)
				return;
			
			// If they scrolled down and are past the navbar, add class .nav-up.
			// This is necessary so you never see what is "behind" the navbar.
			if (st > lastScrollTop && st > navbarHeight){
				// Scroll Down
				$('.flypanels-topbar').removeClass('nav-down').addClass('nav-up');
			} else {
				// Scroll Up
				if(st + $(window).height() < $(document).height()) {
					$('.flypanels-topbar').removeClass('nav-up').addClass('nav-down');
				}
			}
			
			lastScrollTop = st;
		}
		
		/***********************************************************************/
		
	}
	
	
	

    
    
});
