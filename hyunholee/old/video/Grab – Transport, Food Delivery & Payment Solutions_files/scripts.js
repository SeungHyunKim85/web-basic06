/** JS **/
// Three post slider 
var swiper = new Swiper('.three-post-slider', {
  slidesPerView: 'auto',
  spaceBetween: 50,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  centeredSlides: false,
});
/*
// box-carousel
var swiper = new Swiper('.box-carousel', {
  slidesPerView: 'auto',
  spaceBetween: 50,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  loop: true,
  centeredSlides: false,
});

var slides = $(".box-carousel .swiper-slide").length/3;
$('#fraction').html('1/'+slides);

var count = 1;

$('.next').click(function(){
		console.log('next');
		count++;
		if(count > slides){
			count = 1;
		}
		$('#fraction').html(count+'/'+slides);
		swiper.slideNext();
	});

	$('.prev').click(function(){
		console.log('Prev');
		count--;
		if(count == 0){
			count = slides;
		}
		$('#fraction').html(count+'/'+slides);
		swiper.slidePrev();
	});
  */
