$(document).ready(function() {
	$('.codemirror').each(function() {
		var source = CodeMirror.fromTextArea(
			$(this).get(0),
			{
				theme: 'hopscotch',
				readOnly: true,
				mode: 'htmlmixed',
				scrollbarStyle: "simple"
			});
	});
});