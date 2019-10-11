			var header = document.querySelector("header");
			var nav = document.querySelector("#nav");
			console.log(nav)
			
			var bottom1 = document.querySelector("section");
			//判断 nav 到顶部的距离 
			var navTop = nav.offsetTop;
			// 判断吸顶 
			document.onscroll = function(){
				if( document.documentElement.scrollTop >= navTop){
					nav.style.position="fixed";
					nav.style.top="0px";
					nav.style.left ="0px";
					bottom1.style.marginTop="100px"
				}else{
					nav.style.position=null;
					bottom1.style.marginTop="0px"
				}
			}