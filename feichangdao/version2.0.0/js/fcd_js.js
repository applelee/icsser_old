//绝不会写注释的

$(function($){
	$(".nav-pop-db").hover(
		function(){
			$(this).addClass('over-pop-db');
			$(".over-pop-db ul").animate({height:$(".over-pop-db ul li").length*$(".over-pop-db ul li").height(),padding:'10px',opacity:"1"}, 200 );
		},
		function(){
			$(".over-pop-db ul").animate({height:"0",padding:'0',opacity:"0"}, 200 );
			$(this).attr('class','nav-pop-db');
		}
	);
	$(".nav-pop-db-01").hover(
		function(){
			$(this).addClass('over-pop-db-01');
			$(".over-pop-db-01 ul").animate({width:$(".over-pop-db-01 ul li").length*$(".over-pop-db-01 ul li").width(),height:'26',padding:'10px',opacity:"1"}, 200 );
		},
		function(){
			$(".over-pop-db-01 ul").animate({padding:'0',opacity:"0"}, 200 );
			$(this).attr('class','nav-pop-db');
		}
	);
	$(".sel-with-db a").bind('click',
		function(){
			$(".sel-with-db a").removeClass("btn-purple-01-cur-FCD");
			var index = $(this).index();
			var $model_db = $(".model-db");
			$model_db.css({display:"none"});
			$($model_db[index]).css({display:"block"});
			$(this).each(
				function(index,domEle){
					$(this).addClass("btn-purple-01-cur-FCD");
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
	
	if($('#slide_box').length == 1){
		var win_w = $(window).width();
		
		var $slide_box = $('#slide_box'),
			$slide_el= $('.slide-el',$slide_box),
			$slide = $('.slide',$slide_box),
			h_arr = [];
			
		$('.main',$slide_box).each(function(index, element) {
			element = this;
			
			init_w(element);
			$(element).children('div').width();
			$slide_box.height($(element).height()+30);
			h_arr.push($(element).height()+30);
		});
		$slide_box.height(getMax2(h_arr));
		$slide_el.width(win_w);
		$slide.width($slide_el.length*$slide_el.width());
		
		var $nav_a = $('.pop-down').find('li');
		var a_index = $nav_a.find('a.current').parent().index();
		$nav_a.bind('click',function(){
			var index = $(this).index();
			
			$nav_a.find('a').removeClass('current');
			$(this).find('a').addClass('current');
			$nav_a.parents('.nav-pop-db').children('a').html($(this).find('a').text() + '<i class="jt-up-01-11-FCD"></i>');
			$slide.animate({
				left:-win_w*index
			},500);
		});
		
		$(window).bind('resize',function(){
			$('.main').each(function(index, element) {
				element = this;
				
				init_w(element);
				$(element).children('div').width();
				$slide_box.height($slide_el.eq(index).find('.main').height()+30);
			});
			
			win_w = $(window).width();
			$slide_box.width(win_w);
			$slide_el.width(win_w);
			$slide.width($slide_el.length*$slide_el.width());
			$slide_box.height($('.slide-el',$slide_box).eq(a_index).find('.main').height()+30);
		});
	}
	
	function getMax2(arr){
		return Math.max.apply(null,arr);
	}
	
});
