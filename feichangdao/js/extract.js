$(function($){
	
	var style = $("style")[0].innerHTML,
		tempexp,templen,tempobj,overexp,expobj,tempstyle,styletext,
		exparr,stylearr_1,
		regExp = {
			selectclass : /[\w-]+(FCD-app|FCD-bird)/g,
			lastclass : /[^\s]+$/g,
			cssmatch : ".+",
			classorid : "([\\.|#]"
		};
		
	$(".get-code-btn").each(function(i){
		$(this).click(function(){
			tempexp = "(" + this.className.match(regExp.lastclass)[0] + ")" + "[\\w-]+";
			tempobj = this.parentNode.parentNode.childNodes;
			templen = this.parentNode.parentNode.childNodes.length;
			$(".pop-box,.mask-box").css({display:"block"});
			styletext = "";
			stylearr_1 = [];
			$(".pop-box p")[0].innerHTML = "";
			$(".pop-box textarea")[0].value = "";
			for(var n = 0 ; n < templen ; n ++){
				if(tempobj[n].nodeName != "#text"){
					if(tempobj[n].className.match(tempexp)){
						exparr = tempobj[n].className.match(regExp.selectclass);
						for(var m = 0 ; m < exparr.length ; m ++){
							overexp = regExp.classorid + exparr[m] + ")" + regExp.cssmatch;
							expobj = new RegExp(overexp,"g");
							stylearr = style.match(expobj);
							for(var k= 0 ; k < stylearr.length ; k ++){
								stylearr_1.push(stylearr[k]);
								//alert(stylearr_1.join("\n"));
							}
						}
						$(".pop-box textarea")[0].value += tempobj[n].outerHTML + "\n";
					}
				}
			}
			stylearr_1 = stylearr_1.del();
			for(var j= 0 ; j < stylearr_1.length ; j ++){
				styletext = styletext + stylearr_1[j] + "<br>";
			}
			$(".pop-box p")[0].innerHTML = styletext;
		});
	});
	$(".pop-box a").click(function(){
		$(".pop-box,.mask-box").css({display:"none"});
	});
	$(".mask-box")[0].style.height = document.body.offsetHeight + "px";
	
	Array.prototype.del = function() { 
		var a = {}, c = [], l = this.length; 
		for (var i = 0; i < l; i++) { 
			var b = this[i]; 
			var d = (typeof b) + b;
			if (a[d] === undefined) { 
				c.push(b); 
				a[d] = 1; 
			} 
		} 
		return c; 
	} 
	
});