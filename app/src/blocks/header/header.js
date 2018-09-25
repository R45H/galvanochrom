var
	classBlock = 'header',
	$toggle = $('.' + classBlock + '__toggle'),
	$menu = $('.' + classBlock + '__menu'),
	classMenuHidden = classBlock + '__menu_mobile-hidden',
	delay = 300;

$toggle.on('click', function () {

	if ($menu.hasClass(classMenuHidden)) {
		$menu.slideDown(delay, function() {
			$menu
				.removeClass(classMenuHidden)
				.css('display', '');
		});
	} else {
		$menu.slideUp(delay, function() {
			$menu
				.addClass(classMenuHidden)
				.css('display', '');
		});
	}
});
