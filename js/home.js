$(function(){
	$('.carousel-home-top-wrapper .inner .item').each(function(){
		$(this).attr('data-id',$(this).index());
		$(this).clone().appendTo('.carousel-home-top-wrapper .miniatures');
	});

	$('.carousel-home-top-wrapper .miniatures .item:eq(0)').addClass('active');

	var owlCarouselHomeTop=$(".carousel-home-top-wrapper .inner");
		owlCarouselHomeTop.owlCarousel({
	    loop:true,
	    nav:false,
	    items: 1
	});

	$('.carousel-home-top-wrapper .right').click(function() {
	    owlCarouselHomeTop.trigger('next.owl.carousel');
	})

	$('.carousel-home-top-wrapper .left').click(function() {
	    owlCarouselHomeTop.trigger('prev.owl.carousel');
	})

	owlCarouselHomeTop.on('translated.owl.carousel',function(e){
		var newIndex=$(owlCarouselHomeTop).find('.owl-item.active .item').data('id');
		$('.carousel-home-top-wrapper .miniatures .item.active').removeClass('active');
		$('.carousel-home-top-wrapper .miniatures .item').eq(newIndex).addClass('active');
	});

	$('.carousel-home-top-wrapper .miniatures').on('click','.item',function(){
		var clickedIndex=$(this).data('id');
		owlCarouselHomeTop.trigger('to.owl.carousel',clickedIndex);
	});

	var owlCarouselIconiqTv=$(".carousel-iconiq-tv-wrapper .carousel");
		owlCarouselIconiqTv.owlCarousel({
	    loop:true,
	    nav:true,
	    navText: ['',''],
	    items: 3,
	    responsive:{
	        0:{
	            items:2
	        },
			960: {
	    		items: 3
	    	}
	    }
	});

});