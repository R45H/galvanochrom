var
	classBlock = 'slider-list',
	$blocks = $('.' + classBlock);

$blocks.each(function () {
	var
		$this = $(this),
		$slider = $this.find('.' + classBlock + '__slider'),
		$list = $this.find('.' + classBlock + '__list');

	$slider.slick({
		arrows: false,
		dots: true,
		customPaging : function(slider, i) {
			var text = $(slider.$slides[i])
				.find('.' + classBlock + '__item')
				.attr('data-title');

			return '<div class="list__item"><a class="list__link" href="#">' + text + '</a></div>';
		},
		appendDots: $list
	});
});