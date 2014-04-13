pageCreate(function(){
	
	var win_w = $(document).width();
	
	//幻灯片图片尺寸比例
	if($('#slide').length == 1){
		var $slide = $('#slide'),
			index = 0,
			slide = setInterval(slideAnimate,6000);
		
		$slide.find('li').width(win_w);
		
		//滑动鼠标效果
		$('.slide-view',$slide).height(win_w*2/3);
		$('.pic-list',$slide).bind('swipeleft',function(){
			if($ul.position().left >= (2 - $ul.find('li').length)*win_w){
				index ++;
				swipeAnimate(-win_w,$(this),$('.fucos-ico',$slide).find('em'));
			}
			clearInterval(slide);
			slide = setInterval(slideAnimate,6000);
		}).bind('swiperight',function(){
			var $ul = $(this).find('.pic-list');
			
			if($ul.position().left < 0){
				index --;
				swipeAnimate(win_w,$(this),$('.fucos-ico',$slide).find('em'));
			}
			clearInterval(slide);
			slide = setInterval(slideAnimate,6000);
		});
		
		//触摸滑动画
		function swipeAnimate(w,$ul,tag){
			tag.removeAttr('class').eq(index).addClass('current');
			$ul.animate({
				left:$ul.position().left + w
			});
		}
		
		//幻灯动画
		function slideAnimate(){
			var $ul = $('.pic-list',$slide);
			
			if(index < $ul.find('li').length - 1){
				index ++;
				swipeAnimate(-win_w,$ul,$('.fucos-ico',$slide).find('em'));
			}else{
				index = 0;
				swipeAnimate(-$ul.position().left,$ul,$('.fucos-ico',$slide).find('em'));
			}
		}
		
		//幻灯列表宽度
		$('.pic-list',$slide).width(function(){
			return $(this).find('li').length*win_w;
		});
	}
	
	//新闻列表 图片新闻尺寸比例
	if($('#news_list').length = 1){
		var $news_list = $('#news_list');
		
		$('.article-img',$news_list).find('img').height(function(){return $(this).width()*7/10;});
	}
	
	//详情回复交互
	if($('#list_reply').length = 1){
		var $list_reply = $('#list_reply');
		
		$list_reply.find('em').on('tap',function(){
			$list_reply.find('em').removeAttr('class');
			$(this).addClass('current');
			
			$('.func',$list_reply).animate({opacity:0},150);
			$(this).parent().children('.func').animate({opacity:1},150);
		});
		
		$('.func',$list_reply).find('span').on('tap',function(){
			$(this).parent().find('span').removeAttr('class');
			$(this).addClass('current');
		});
	}
	
});