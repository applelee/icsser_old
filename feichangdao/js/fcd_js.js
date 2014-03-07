// JavaScript Document

$(function($){
	$(".navigate-pop-db").hover(
		function(){
			$(this).addClass('over-pop-db');
			$(".over-pop-db ul").animate({height:$(".over-pop-db ul li").length*$(".over-pop-db ul li").height(),padding:'10px',opacity:"1"}, 200 );
		},
		function(){
			$(".over-pop-db ul").animate({height:"0",padding:'0',opacity:"0"}, 200 );
			$(this).attr('class','navigate-pop-db');
		}
	);
	$(".navigate-pop-db-01").hover(
		function(){
			$(this).addClass('over-pop-db-01');
			$(".over-pop-db-01 ul").animate({width:$(".over-pop-db-01 ul li").length*$(".over-pop-db-01 ul li").width(),height:'26',padding:'10px',opacity:"1"}, 200 );
		},
		function(){
			$(".over-pop-db-01 ul").animate({padding:'0',opacity:"0"}, 200 );
			$(this).attr('class','navigate-pop-db');
		}
	);
	$(".sel-with-db a").hover(
		function(){
			$(".sel-with-db a").removeClass("butt-purple-current-FCD-app");
			var index = $(this).index();
			var model_db = $(".model-db");
			model_db.css({display:"none"});
			$(model_db[index]).css({display:"block"});
			$(this).each(
				function(index,domEle){
					this.className += " butt-purple-current-FCD-app";
				}
			);
		}
	);
	$(".inp_bg input").on("focus",function(){
		$(this).parent().toggleClass("down");
	}).on("blur",function(){
		$(this).parent().toggleClass("down");
	});
	$(".txt-input,textarea").on("focus",function(){
		$(this).toggleClass("current");
	}).on("blur",function(){
		$(this).toggleClass("current");
	});
});
