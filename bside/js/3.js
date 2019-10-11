$(window).ready(function(){
	$(".box-text").animate({left:'15%',opacity:'0.9'},"slow")
	$(".container-two1").animate({left:'57%',opacity:'0.9'},"slow")
	
	
	
	 $(window).scroll(function (){
	 	 if ($(window).scrollTop()>=$(".container-two2").height()) {
	 	 	
	 	 	$(".container-two2").animate({left:'25%',opacity:'0.9'},"slow")
}
	 	 })
})