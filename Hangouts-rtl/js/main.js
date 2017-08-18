$(document).ready(function () {
	if (window !== top) {
		var newStyle;
		newStyle = document.createElement('style');
		newStyle.innerHTML = '.tk.TmwRj *{direction:rtl}';
		newStyle.type = 'text/css';
		$('body').append(newStyle);
	}
});
