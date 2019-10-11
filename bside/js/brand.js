$(function(){

	 $(window).scroll(function (){
	 	 if ($(window).scrollTop()>=$(".top-header").height()) {
                   $(".img-box1").addClass("fixed");
                   $(".sidebar").addClass("sideba");
                   $(".w").css("left","32%");
                    $(".sidebar").css("display","block")
         
              }else{
              	$(".w").css({"left":"23%"});
                    $(".img-box1").removeClass("fixed");
                    $(".sidebar").removeClass("sideba");
                }
              
              
              if( $(window).scrollTop() > $(".text-img-5").offset().top){
        	 $(".img-box1").removeClass("fixed");
        	}
              
              
        if( $(window).scrollTop() > $("#a6").offset().top){
        	 $(".img-box1").removeClass("fixed");
        	 $(".img-box2").addClass("fixed");
        	 
        	 
        }else {
        	$(".img-box2").removeClass("fixed");
        }
        
        if($(window).scrollTop() > $(".container-box16").offset().top){
        	$(".img-box2").removeClass("fixed");
        	  $(".sidebar").css("display","none")
        }
    //  楼层效果  
     
    	
    	for(let i=0;i<$("div[id^=a]").length;i++){
    		if( Math.ceil($(window).scrollTop())>= Math.floor($("div[id^=a]").eq(i).offset().top) ){
				
				
    			$(".sideba ul li").eq(i).css("list-style","disc").siblings().css("list-style","none");
    			$(".sideba ul li").eq(i).children().css({'color':'#000000','font-weight':'bold'}).parent().siblings().children()
		 		.css({'color':' #9D9D9D','font-weight':'100'})
    		}
    	}
    	
    	
	
    	
    	
    	
    })
		 
	  /*   $(".sideba ul li").click(function(){
		 	$(this).css("list-style","disc").siblings().css("list-style","none")
		 	$(this).children().css({'color':'#000000','font-weight':'bold'}).parent().siblings().children().css({'color':' #9D9D9D','font-weight':'100'})
	     })
	 */
	 
	 
	 
	 
	 
	 $(".bot-text2").click(function(){
	 	 $(".bot-text2").css("opacity","0.9")
	 })
	 
});
           