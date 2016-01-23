$(document).ready(function() {
	if ($('.template__table_data .datatable').length) {
		var table = $('.datatable').DataTable(
			{
				ordering: true
			}
		);
	}
});