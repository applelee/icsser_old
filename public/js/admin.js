// JavaScript Document

$(function () {
	
	//admin窗口大小
	var $content_admin = $('#content_admin');
	if($content_admin != null){
		$content_admin.height($(window).height() - 65);
		$('.content-01',$content_admin).width()
		$(window).bind('resize',function(){
			$content_admin.height($(window).height() - 65);
		});
	}
	
	if($('#admin_nav')){
		var $admin_nav = $('#admin_nav'),
			$content_admin = $('#content_admin');
		
		$('a',$admin_nav).bind('click',function(){
			var index = $(this).index() + 1;
			
			$('a',$admin_nav).removeClass('current');
			$(this).addClass('current');
			$('.content-01 div',$content_admin).css({display:'none'}).each(function(i,e){
				if(i == index){
					e = this;
					$(e).css({display:'block'});
				}
            }).first().css({display:'block'});
		});
	}
	
})