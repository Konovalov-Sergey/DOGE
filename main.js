(function() {
	
	$("#openMod").on('click', function(){
		$("#myModal").css("display", "block"),
		$(this).addClass("active")
	})
	
	$(".close").on('click', function() {
		$("#myModal").css("display", "none"),
		$("#openMod").removeClass("active")
	})
	
})()