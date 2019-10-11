//获取id
function my$(id){
				return typeof id==="string"?document.getElementById(id):null;
			}
//求字符串长度
function len(str){
				var len=0;
				for(var i=0;i<str.length;i++){
					if(str.charCodeAt(i)>=0 &&str.charCodeAt(i)<=127){
						len +=1
					}else{
						len +=2
					}
				}
				return len
			}
//将网址？后的内容变为数组
function getJson(url){
			var index=url.indexOf("?");
			var str=url.slice(index+1);
			var arr=str.split("&")
			var obj={};
			for(var i=0;i<arr.length;i++){
				obj[arr[i].slice(0,arr[i].indexOf("="))]=arr[i].slice(arr[i].indexOf("=")+1);
				
			}
			return obj;
}
//匀速动画（轮播图有用，匀速动画）
function myAnimation(ele,target,step){
				var begin=ele.offsetLeft;
				clearInterval(ele.timer)
				var dir=target-ele.offsetLeft>=0?step:-step;
				ele.timer=setInterval(function(){
						begin +=dir;
						ele.style.left=begin+"px";
					if(Math.abs(target-ele.offsetLeft)<=Math.abs(dir)){
						ele.style.left=target+"px";
						clearInterval(ele.timer)
					}
				},100)
			}
			function Lvl(value){
				var lvl=0;
				if(/\d/.test(value)){
					lvl++;
				}
				if(/[a-zA-Z]/.test(value)){
					lvl++;
				}
				if(/\W/.test(value)){
					lvl++;
				}
				return lvl;
			}