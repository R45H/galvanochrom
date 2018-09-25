$('.slider').each(function () {
	var
		$this = $(this),
		options = {
			prevArrow: '<div class="slider__arrow slider__arrow_prev"></div>',
			nextArrow: '<div class="slider__arrow slider__arrow_next"></div>'
		};

	if (!$this.hasClass('slider_dots_none')) {
		options.dots = true;
		options.dotsClass = 'slider__dots';
		options.customPaging = function() {
			return '<div class="slider__dot"></div>';
		}
	}

	if ($this.hasClass('slider_height_full')) {

		$this.on('init', function() {
			$this
				.find('.slider__dots')
				.wrap("<div class='container slider__dots-wrap'></div>");
		});
	}

	$this.slick(options);
});