$(document).ready(function(){
	
	//set variable
	var modal = $(".modal");
	var btn = $(".modal-button");

	if(modal.length){
		//open modal
		btn.on("click" , function(){
			var modal = $(this).data("modal");
			$("#" + modal).show( 0 , function(){
				$(this).addClass("open-modal");
			});
		});
		//close modal
		$(".modal-close").on("click" , function(){
			var modal = $(this).closest(".modal");
			modal.hide();
		});

		$(".modal").click(function(event) {
			var modal_content = $(".modal-content").find("*");
			var target = $( event.target );
		    if(!target.is(modal_content)){
		    	$(this).hide();
		    }
		});
	}
});