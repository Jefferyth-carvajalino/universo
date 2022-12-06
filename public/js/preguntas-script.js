$('.pregunta').click(function () {
	if ($(this).parents(".pf-item").hasClass("active")) {
		$(this).parents(".pf-item").removeClass("active");
		$(this).find("svg[data-fa-i2svg]").removeClass("fa-rotate-180");
	} else {
		$('.pf-item.active').removeClass("active");
		$("svg[data-fa-i2svg].fa-rotate-180").removeClass("fa-rotate-180");
		$(this).parents(".pf-item").addClass("active");
		$(this).find("svg[data-fa-i2svg]").addClass("fa-rotate-180");
	}
});