$('.slider').each(function () {
	var
		$this = $(this),
		options = {};

	if (!$this.hasClass('slider_dots_none')) {
		options.dots = true;
	}

	$this.slick(options);
});