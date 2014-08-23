$("#paypal").hide();
$("#moreinfo").hide();
$("#customer-eval").hide();
$("#faq").hide();

$(document).ready(function(){
	$(".btn").click(function(){
		$("#paypal").slideToggle(80);
	});

});

$(".btn-small").click(function(event){
	 event.preventDefault();
	$("#moreinfo").slideToggle(500);

});

$(".customer-btn-small").click(function(event){
	 event.preventDefault();
	$("#customer-eval").slideToggle(500);
});


$(".faq-btn-small").click(function(event){
	 event.preventDefault();
	$("#faq").slideToggle(500);
});