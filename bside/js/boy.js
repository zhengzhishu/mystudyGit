$(window).ready(function(){
	setInterval(function(){
      if($(".het img").attr("src")=="img/1_files/5ac049eb42c27.jpg"){
      	$(".het img").attr("src","img/5ac04e20de1f3.jpg")
      }else{
      		$(".het img").attr("src","img/1_files/5ac049eb42c27.jpg")
      }
         
	},3000)
	
	
	
	
	
	$(".row1").on("click",".top-p",function(){
		
		ajx=$.ajax({
			url:"JZ.html",
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