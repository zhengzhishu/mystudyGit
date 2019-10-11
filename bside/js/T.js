$(window).ready(function(){
	setInterval(function(){
      if($(".het img").attr("src")=="img/5ac04e20de1f3.jpg"){
      	$(".het img").attr("src","img/1_files/5ac049eb42c27.jpg")
      }else{
      		$(".het img").attr("src","img/5ac04e20de1f3.jpg")
      }
         
	},3000)
	
	if ($("text h1").attr("text")=="童装") {
		
	} else{
		
	}
	
	$(".row1").on("click",".top-p",function(){
		
		ajx=$.ajax({
			url:"JT.html",
			async:false,
			success:function(data){
				var data = data;
				var bodyText1 = data.indexOf("<body>")
				var bodyText2 = data.lastIndexOf("</body>")
				data = data.substring(bodyText1+6,bodyText2).trim();
				$(".GB").html(data);
			}
		});
		
//		console.log(ajx.data)
		
		
		$(".top-p").children().html("加载完成")
	})
	$(".top-boximg1").click(function(){
		if($(".pe1").css("display")=="block"){
			$(".pe1").css("display","none")
		}else{
			$(".pe1").css("display","block")
		}
		
	})
	$(".top-boximg2").click(function(){
		if($(".pe2").css("display")=="block"){
			$(".pe2").css("display","none")
		}else{
			$(".pe2").css("display","block")
		}
		
		
	})
	
})







$(document).ready(function(){
	//图片切换
	
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