$(document).ready(
	function(){
		var tags=["web design","web development","software","application"];
		$("input[type=search]").autocomplete({
			source:tags,
		});
	}
	);
$(document).ready(function(){
	$(".btn").button({
		icon: "ui-icon-extlink",
	});
});