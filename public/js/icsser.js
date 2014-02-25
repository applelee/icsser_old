// JavaScript Document

$(function () {

	$(".slide-butt-01,.slide-butt-02").on("click",function () {
		moveTab.tabMove(setting, $(this).attr("rel") );
	})
	
	$(".list-login-01-lj input[type=text],.list-login-01-lj input[type=password],.article-reply .reply-input textarea").on("focus",function(){
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
			if($('#login_pop_box') != null){
				$('#login_pop_box').css({display:'block'}).height($(window).height());
				$('.btn-close','#login_pop_box').bind('click',function(){
					$('#login_pop_box').css({display:'none'});
				});
				$('input[type=text]','#login_pop_box').bind('focus',function(){
					$(this).val('');
				}).bind('blur',function(){
					console.log($(this).val());
					if($(this).val() == '')
						$(this).val($(this).attr('tempval'));
				});
				$(window).bind('resize',function(){
					$('#login_pop_box').height($(window).height());
				});
			}
		});
	}
	
})