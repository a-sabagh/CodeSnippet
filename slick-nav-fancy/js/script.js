$(document).ready(function () {
	$('[data-fancybox]').fancybox({
		protect: true,
		buttons: [
			'slideShow',
			'fullScreen',
			'download',
			'zoom',
			'close'
		],
	});
	/*
	https://github.com/kenwheeler/slick#settings
	*/
	$('.slider').slick({
		adaptiveHeight: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: false,
		asNavFor: '.slider-nav-thumbnails',
		draggable: false,
		swipe: false,
		touchMove: false,
		swipeToSlide: false

	});

	$('.slider-nav-thumbnails').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		asNavFor: '.slider',
		arrows: false,
		focusOnSelect: true,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			}
		]
	});


});
