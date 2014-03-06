// JavaScript Document

$(function () {

	$(".slide-butt-01,.slide-butt-02").on("click",function () {
		moveTab.tabMove(setting, $(this).attr("rel") );
	})
	
	$(".list-login-01-lj input[type=text],.list-login-01-lj input[type=password],.article-reply .reply-textarea textarea").on("focus",function(){
		$(this).addClass("current");
	}).on("blur",function(){
		$(this).removeClass();
	})
	
	$(".main-am").height($(window).height()-($(".header").height()+$(".footer").height()+$(".prompt-mesg").height()+3));
	$(".main-am .lef-nav,.main-am .content").height($(".main-am").height());
	$(window).resize(function(){
		$(".main-am").height($(window).height()-($(".header").height()+$(".footer").height()+$(".prompt-mesg").height()+3));
		$(".main-am .lef-nav,.main-am .content").height($(".main-am").height());
	})
	
	//点击弹出注册窗口
	if($('#reg_btn') != null){
		$('#reg_btn').bind('click',function(){
			var $login_pop = $('#login_pop_box');
			
			if($login_pop != null){
				$login_pop.css({display:'block'}).height($(window).height());
				$('.btn-close',$login_pop).bind('click',function(){
					$login_pop.css({display:'none'});
				});
				$('input[type=text]',$login_pop).bind('focus',function(){
					$(this).val('');
				}).bind('blur',function(){
					console.log($(this).val());
					if($(this).val() == '')
						$(this).val($(this).attr('tempval'));
				});
				$(window).bind('resize',function(){
					$login_pop.height($(window).height());
				});
			}
		});
	}
	
	//admin窗口大小
	var $content_admin = $('#content_admin');
	if($content_admin != null){
		$content_admin.height($(window).height() - 65);
		$('.content-01',$content_admin).width()
		$(window).bind('resize',function(){
			$content_admin.height($(window).height() - 65);
		});
	}
	
	//文章列表
	var $article_list = $('#article_list');
	if($article_list != null){
		$('.unfold',$article_list).bind('click',function(){
			$(this).parent().css({display:'none'}).parent().nextAll().css({display:'block'}).parent().find('.point-line-01').removeClass('point-line-04');
		});
		$('.collapse',$article_list).bind('click',function(){
			$(this).parent().parent().css({display:'none'}).parents('li').children('.article-db').css({display:'none'}).parents('li').find('.white-db-01').css({display:'block'}).parents('li').find('.point-line-01').addClass('point-line-04');
		});
	}
	
	//文章回复列表
	var $reply_list = $('#reply_list');
	if($reply_list != null){
		$('.unfold',$reply_list).bind('click',function(){
			if($(this).attr('class') == 'unfold'){
				$(this).text('收起').attr('class','collapse').parents('li').find('.reply-db').css({display:'block'}).parents('li').find('.func-db-01').css({display:'block'}).parents('li').find('.func-db:eq(0) .point-line-01').removeClass('point-line-02').parents('li').find('.reply-textarea').css({display:'block'}).parents('li').find('.btn-reply').css({display:'none'});
			}else{
				$(this).text('展开').attr('class','unfold').parents('li').find('.reply-db').css({display:'none'}).parents('li').find('.func-db-01').css({display:'none'}).parents('li').find('.func-db:eq(0) .point-line-01').addClass('point-line-02').parents('li').find('.reply-textarea').css({display:'none'}).parents('li').find('.btn-reply').css({display:'block'});
			}
		});
		$('.btn-reply',$reply_list).bind('click',function(){
			$(this).css({display:'none'}).parents('li').find('.reply-textarea').css({display:'block'}).parents('li').find('.func-db:eq(0) .point-line-01').removeClass('point-line-02').parents('li').find('.func-db-01').css({display:'block'});
		});
	}
})