// JavaScript Document
// 非常道CSS框架

function init_w()
{
	//主容器
	var main = document.getElementById("main");
	//获取body的宽度
	var now_body_w = document.body.offsetWidth;
	//块集
	var item_num = main.childNodes;
	//列款
	var item_w = item_num[1].offsetWidth + 20;
	//瀑布函数
	all_width(main,item_w,now_body_w,item_num);
	
	main.style.display = "block";
	
	//导航宽度控制
}
//定义瀑布函数
function all_width(a,b,c,d)
{
	var cs = 0;
	var val_w = b;
	var arr_num = 0;
	var arr_root = [];
	var arr_item = [];
	var null_b = 20;
	var more_h = 0;
	var more_s = [0 , 0];
	var most_arr = [];
	var most_s_arr = [];
	
	if(c >= b){
		arr_num = (c - c % b) / b;
		val_w *= arr_num;
	}
	else val_w = b;
	a.style.width = val_w - null_b + "px";
	
	for(var i = 0 ; i < arr_num ; i ++){
		arr_root[i] = [];
	}
	for(var j = 0 ; j < d.length ; j ++){
		if(d[j].nodeName != "#text"){
			arr_item.push(d[j]);
		}
	}
	for(var m = 0 ; m < arr_item.length ; m ++){
		if(m < arr_num){
			arr_root[m].push(arr_item[m]);
		}
		else{
			var tb = false;
			for(var x = 0 ; x < arr_num ; x ++){
				most_s_arr[x] = 0;
				for(var y = 0 ; y < arr_root[x].length ; y ++){
					most_s_arr[x] += arr_root[x][y].offsetHeight + null_b;
				}
				if(x > 0){
					var now_s = most_s_arr[x] <= most_s_arr[x - 1] ? [most_s_arr[x] , x] : [most_s_arr[x - 1] , x - 1];
					if(!tb){
						more_s = now_s;
						tb = true;
					}else{
						more_s = now_s[0] <= more_s[0] ? now_s : more_s;
					}
				}
			}
			arr_root[more_s[1]].push(arr_item[m]);
		}
	}
	for(var t = 0 ; t < arr_num ; t ++){
		most_arr[t] = 0;
		for(var d = 0 ; d < arr_root[t].length ; d ++){
			var prve_h = 0;
			var z = d;
			while(z > 0){
				z --;
				prve_h +=  arr_root[t][z].offsetHeight + null_b;
			}
			arr_root[t][d].style.top = prve_h + "px";
			arr_root[t][d].style.left = b * t + "px";
			most_arr[t] += arr_root[t][d].offsetHeight + null_b;
		}
		if(t == 0)
		{
			more_h = most_arr[t];
		}else if(t > 0){
			more_h = most_arr[t] >= more_h ? most_arr[t] : more_h;
		}
	}
	a.style.height = more_h + "px";
	a.style.zIndex = 1;
	//alert("??");
	a.style.marginLeft = "auto";
	a.style.marginRight = "auto";
}

$(function($){
	init_w();
	$(window).resize(function(){init_w()});
});