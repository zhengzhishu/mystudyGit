$(function(){
	$(".box3-1-1").click(function(){
		$(".dis").eq($(this).index()).css({"display":"block"}).siblings(".dis").css({"display":"none"});
		$(this).css({"background-color":"rgb(204,204,204)"}).siblings(".box3-1-1").css({"background-color":"#C0A776"});
		
	})
//	$("#box3-1-you").click(function(){
//		$(".dis").css({"display":"none"});
//		$(".non").css({"display":"block"});
//	})
})
//$(function(){
//	$(".box3-1-1").mouseenter(function(){
//		$(this).css({"background-color":"rgb(217,189,132)","transition":"all 1s"})
//	});
//	$(".box3-1-1").mouseleave(function(){
//		$(this).css({"background-color":"rgb(204,204,204))","transition":"all 1s"})
//		
//		
//	})
//})
$(function(){
	$(".box3-2-wai").hover(function(){
		$(this).css({"box-shadow":"none","transition":"all 1s"})
	},function(){
		$(this).css({"box-shadow":"0px 6px 18px gray","transition":"all 1s"})
	})
})
$(function(){
	$(".box3-2-nei-xia img").mouseenter(function(){
		$(this).css({"transform":"scale(1.2)","transition":"all 1s"})
	});
	$(".box3-2-nei-xia img").mouseleave(function(){
		$(this).css({"transform":"scale(1)","transition":"all 1s"})
	})
})
$(function(){
	$(".right").mouseenter(function(){
		$(this).children("img").css({"transform":"scale(1.2)","transition":"all 1s"})
	});
	$(".right").mouseleave(function(){
		$(this).children("img").css({"transform":"scale(1)","transition":"all 1s"})
	})
})
$(function(){
	$("tr:even td").css({"background-color":"rgb(250,250,248)"})
})
$(function(){
	$("td").mouseenter(function(){
		$(this).css({"background-color":"rgb(217,189,132)"})
	})
	$("td").mouseleave(function(){
		$(this).css({"background-color":""})
		$("tr:even td").css({"background-color":"rgb(250,250,248)"})
	})
})
