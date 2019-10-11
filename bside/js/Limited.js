$(document).ready(function(){
	//图片切换
	setInterval(function(){
      if($("headers img").attr("src")=="img/5b97dd7aac361.jpg"){
      	$("headers img").attr("src","img/5ac049eb42c27.jpg")
      }else{
      		$("headers img").attr("src","img/1_files/5ac049eb42c27.jpg")
      }
         
	},5000)
	//切换图片
	
	$(".container-2").on("click",".cut",function(){
		if($(this).find(".bilok").css("display") =="block"){
			$(this).find(".bilok").hide();
			$(this).find('.hiide').show();
//	        $(this).find(".hiide").css("display","block")
		}else if($(this).find(".bilok").css("display")=="none"){
			$(this).find(".bilok").show();
			$(this).find('.hiide').hide();
		}
//		if(a%2==1){
//			$(this).find(".bilok").show()
//	         $(this).find(".hiide").css("display","none")
//		}
		
		
		
	
	})
	
	})