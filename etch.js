
$(document).ready (function () {
	var e = $(' <div class = "fluff"> </div>');
	for (i = 0; i< 198; i++){
		$('#container').append(e.clone());
	}

	$('.fluff').hover (function () {
		$(this).css('background-color', 'red');
	});
	
	$('#reset').click (function () {
		$('.fluff').css('background-color', 'blue');
	});
});