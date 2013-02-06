$(document).ready(function() {
	$('.select select').change(function() {
		$(this).prev('span').html($(this).val());
	});
});