$('.btn-menu').on('click', function (argument) {
	if (document.querySelector('.menu').style.display == 'none') {
		$('.menu').show(250);
	} else {
		$('.menu').hide();
	}
});
