$(document).ready(function(){
	$(".rng-quantity-wrapper .plus").click(function(){
		var value = parseInt($(this).next(".rng-quantity").val());
		$(this).next(".rng-quantity").val(parseInt(value+1));
	});
	$(".rng-quantity-wrapper .minus").click(function(){
		var value = parseInt($(this).prev(".rng-quantity").val());
		console.log(value);
		$(this).next(".rng-quantity").val(parseInt(value-1));
	});
});