console.log("Hello World from main.js!");

$(function () {
	$('.bull-paragraph, .girl-paragraph, .bull-content-module, .girl-content-module').hide();

	$('.bull-img').on("click", function () {
		if ($('.bull-paragraph:visible').length > 0) {
			$(".bull-paragraph").hide();
			$(".bull-content-module").hide();
		} else {
			$(".bull-paragraph").show();
			$(".bull-content-module").show();
		}
	});

	$('.girl-img').on("click", function () {
		if ($('.girl-paragraph:visible').length > 0) {
			$(".girl-paragraph").hide();
			$(".girl-content-module").hide();

		} else {
			$(".girl-paragraph").show();
			$(".girl-content-module").show();
		}
	});

	$(".fact").on("click", function () {
		$(this).toggleClass("flipped");
	});

});





