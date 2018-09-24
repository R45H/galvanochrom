$('.slider').each(function () {
	var
		$this = $(this),
		options = {};

	if (!$this.hasClass('slider_dots_none')) {
		options.dots = true;
	}

	$this.slick(options);
});

$(".slick-dots").wrap("<div class='container'><div class='row'><div class='col-12'></div></div></div>");
