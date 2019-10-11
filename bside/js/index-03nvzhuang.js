$(function(){

//$("#box3-1-3").on("mouseenter",".img-shang",function(){
//		$(".img-shang img").css({"display":"none"})
//		
//	})
$(".img-shang").mouseenter(function(){
		$(this).children().css({"display":"none"})

	})
$(".img-shang").mouseleave(function(){
		$(this).children().css({"display":"block"})

	})

	
})
//$(window).ready(function(){
//	$(".img-bao").on("click",".btn",function(){
//		alert(666)
//		ajx=$.ajax({
//			url:"test/index-03shuju.html",
//			async:false,
//			success:function(data){
//				var data = data;
//				var bodyText1 = data.indexOf("<body>")
//				var bodyText2 = data.lastIndexOf("</body>")
//				data = data.substring(bodyText1+6,bodyText2).trim();
//				$(".jiazai").html(data);
//			}
//		})
//})
//	
//$(.btn).click(f)
	
	
