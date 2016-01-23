$(document).ready(function() {
	if ($('.template_texteditor .summernote').length) {
		$('.summernote').summernote(
			{
				height: '300',
				codemirror: {
					theme: 'hopscotch',
					mode: 'htmlmixed',
					lineWrapping: true,
					scrollbarStyle: "simple"
				}
			}
		);
	}
});