	$(function(){
		
		  //回到顶部
		var  btn=document.querySelector('.huidao');
			 var screenTop=null, te=null; 
			 window.onscroll = function(){
			 	screenTop = document.documentElement.scrollTop;
			 	if(screenTop>0 ){
			 		btn.style.display="block";
			 	}else{
			 		
			 		btn.style.display="none";
			 		
			 	}
			 	   btn.onclick=function(){
			 	   	 clearInterval(te);
			 	   	 te=setInterval(function( ){
			 	   	 screenTop=screenTop-50;
			 	   	 window.scrollTo(0,screenTop);
			 	   	 if(screenTop<=0 ){
			 	   	 	clearInterval(te);
			 	   	 }
			 	   	 	
			 	   	 },20);
			 	   	
			 	   }}
		
		$(".navbar-nav li").click(function(){
	  	$(this).eq(0).addClass("nav-add").siblings().removeClass("nav-add")
	  	$("#nav-1 >li>a").eq($(this).index()).addClass("nav-a").parent().siblings("#nav-1 >li").children().removeClass("nav-a")
	  })
		
		
		
		
		
		
//	var obj= [{image:"url(img/img3/img9.jpg)",title:"Pronovias -3"},{image:"url(img/img3/img10.jpg)",title:"Maram"},{image:"url(img/img3/img11.jpg)",title:"Fiona"},{image:"url(img/img3/img12.jpg)",title:"Pronovias -4"}]
//		
				 var  i=0;
		$("#met-page-btn").click(function(){
			
		  var cdd=$("<p class='add'> </p>")
		
			

        var htmlreq = new XMLHttpRequest();
        htmlreq.open("get","js/01-testJSON.json")
        htmlreq.send();
        htmlreq.onreadystatechange = function () {
            if(htmlreq.readyState ==4 && htmlreq.status == 200){
           
                var jsonText = htmlreq.responseText;
                var jsonObj = JSON.parse(jsonText);
               

				
//	for (let i =0;i<jsonObj.length;i++) {	
       
            
            
			var add=$(
				"<div class='box-1 col-xs-12'>"
				+' <ul class="box-1-ul col-xs-12 ">'
				+' <li class="col-sm-6" >'
					+'<div class="tu-1 "  style="background-image:'+ jsonObj[i+1].image+ ';"> </div>'
					+'<div class="tu-2">'
				      +'<span class="tu-span">'+jsonObj[i+1].title +'</span> '
				    +'</div>'
				 + '</li>'
				 +' <li class="col-sm-6" >'
					+'<div class="tu-1 "  style="background-image:'+ jsonObj[i+2].image+ ';"> </div>'
					+'<div class="tu-2">'
				       +'<span class="tu-span">'+jsonObj[i+2].title +'</span> '
				    +'</div>'
				 + '</li>'
				 +' <li class="col-sm-6" >'
					+'<div class="tu-1 "  style="background-image:'+ jsonObj[i+3].image+ ';"> </div>'
					+'<div class="tu-2">'
				      +'<span class="tu-span">'+jsonObj[i+3].title+'</span> '
				    +'</div>'
				 + '</li>'
				 +' <li class="col-sm-6" >'
					+'<div class="tu-1 "  style="background-image:'+ jsonObj[i+4].image+ ';"> </div>'
					+'<div class="tu-2">'
				      +'<span class="tu-span">'+jsonObj[i+4].title +'</span> '
				    +'</div>'
				 + '</li>'
				 
				+' </ul>'
				+"</div>")
				
	         	 i+=4;
	         	
			    $("#box1-1").append(add);
		

//           } 
            }
        }

			
		})
		
		
	})		
	

	
				