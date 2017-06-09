
$(document).ready (function () {
	newBoard (8);

	$('#size').click (function () {
		var temp = $('#new_size').val();
		newBoard(temp);

		$('#new_size').val("");
	});

	change ();
	
	$('#reset').click (function () {
		$('.fluff').css('background-color', 'grey');
	});

	
});

function newBoard (num) {
	$('#container').empty();
	var temp = (790 / num);
	var e = $(' <div class = "fluff"> </div>');
	$(e).css ('width', temp);
	$(e).css ('height', temp);
	for (i = 0; i< num*num; i++){
		$('#container').append(e.clone());
	}

	change ();
}

function change () {
	$('.fluff').hover (function () {
		$(this).css('background-color', 'brown');
	});
}