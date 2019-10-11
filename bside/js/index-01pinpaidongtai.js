$(function(){
$(".btn").hover(function(){
	$(this).css({"box-shadow":"0px 6px 12px grey",'background-color': 'gray','color': 'white'});
},function(){
	$(this).css({"box-shadow":"0px 0px 0px white",'background-color': '','color': ''});
})
})
$(function(){
$("#box2-big-left,#box2-big-right,.box4,#box5-big>ul>li").hover(function(){
	$(this).css({"box-shadow":"0px 6px 12px #cccccc"});
},function(){
	$(this).css({"box-shadow":"0px 0px 0px white","transition":"all 0.5s"});
})
})
//$(function(){
//	$("#box2-big-righ").mouseenter(function(){
//		$("#box2-big-right>p,#box2-big-right>h3").animate("")
//	})
//	
//})
