//关闭翻页
$(function(){
	$(".guanbi-span").click(function(){
		$(".lunbobox").css({"display":"none"})
	})
})
//图片集图片半透明
$(function(){
	$(".box-img>div>img").mouseenter(function(){
		
		$(this).css({"opacity": "0.5","cursor": "pointer"})
	})
	$(".box-img>div>img").mouseleave(function(){
		$(this).css({"opacity": "1"})
	})
})
//轮播图片放大
$(function(){
	$(".img1").mouseenter(function(){
		$(this).css({"transform": "scale(1.3)","transition":"all 1s","cursor": "pointer"})
	})
	$(".img1").mouseleave(function(){
		$(this).css({"transform": "scale(1)","transition":"all 1s"})
	})
})
//点击图片事件
$(function(){
	$(".box-img>div>img").click(function(){
	$(".lunbobox").css({"display":"block"})
	$(".tupian").css({"display":"none"})
	$(this).attr('src');
		console.log($(this).attr("src"));
	$(".img1").attr("src",$(this).attr('src'));
	})
})
//点击小图片事件
$(function(){
	$(".tupian").click(function(){
		$(".lunbobox").css({"display":"block"})
		$(".tupian").css({"display":"none"})
	})
})
//上一张，下一张
 
 
//滑动滚动条隐藏div
			window.onscroll=function(){
			var high1=document.querySelector(".tupian");
			var h=high1.offsetTop;
			var gundong1=document.documentElement.scrollTop;
			
			
			if(gundong1>=200){
				high1.style.display="none";
				high1.style.transition="all 1s";
			}else{
				high1.style.display="block";
				high1.style.transition="all 1s";
			}
			}
//定时器页面自动滚动
//
//window.onload=function(){
//			var timer=null;
//				var i=0;
//			timer=setInterval(function(){
//					i+=0.1;
//					window.scrollTo(0,i);
//					
//				},5)
////			console.log(window.scrollTo(0,i))
//			if(i>=1172){
//				
//				clearInterval(timer);
//				window.scrollTo(0,0);
//			}
//				
//			}
//				var timer=null;
//				var merr=null;
//				var i=0;
//			window.onload=function(){
//			timer=setInterval(function(){
//						i+=0.1;
//				 window.scrollTo(0,i);
//					},5)
//			}
//		 document.body.onmousewheel = function(event){
//				  clearInterval(timer);
//                 event = event || window.event;
//                 var longs=document.documentElement.scrollTop;
//                  window.scrollTo(0,longs);
//              timer=setInterval(function(){
//						longs+=50;
//				  window.scrollTo(0,longs);
//					},1000)
//				}
	$(function(){
				$(window).ready(function(){
					var num = $(window).scrollTop();
					$("html,body").stop().animate({scrollTop:$("html,body").height()-$(window).height()},15000,function(){
						$("html,body").stop()
					});
				$(window).on("mousewheel",function(){
					$("html,body").stop().animate({scrollTop:$("html,body").height()-$(window).height()},15000,function(){
						$(window).off("mousewheel")
					});
					
					})
				})
				
			})


			

