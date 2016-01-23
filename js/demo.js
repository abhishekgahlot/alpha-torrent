/*
 *
 *   Right - Responsive Admin Template
 *   v 0.1.0
 *   http://adminbootstrap.com
 *
 */

$(document).ready(function() {
	$('body').on('click', '.demo__ico', function() {
		$('.demo').toggleClass('demo_open');
	});

	$('body').on('click', '.demo__theme', function() {
		$('.demo__theme').removeClass('demo__theme_active');
		$(this).addClass('demo__theme_active');

		$('body').attr('class', $(this).data('theme'));
	})
});