$(function() {
    $('.jcarousel').jcarousel({
        // Configuration goes here
    });
    var instance = $('.jcarousel').data('jcarousel');
	instance.scroll('+=2');

	$('.jcarousel-prev').jcarouselControl({
        target: '-=1'
    });

    $('.jcarousel-next').jcarouselControl({
        target: '+=1'
    });

    //PAGINATION
    $('.jcarousel-pagination').jcarouselPagination({
        item: function(page) {
            return '<a href="#' + page + '">' + page + '</a>';
        }
    });


	$('.jcarousel-prev').click(function() {
    	$('.jcarousel').jcarousel('scroll', '-=1');
	});
	$('.jcarousel-next').click(function() {
    	$('.jcarousel').jcarousel('scroll', '+=1');
	});
});