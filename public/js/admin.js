// JavaScript Document

$(function () {
	
	//admin窗口大小
	var $content_admin = $('#content_admin');
	if($content_admin != null){
		$content_admin.height($(window).height() - 65);
		$('.tab-02',$content_admin).width(function(){
			return $(window).width()-245;
		});
		$(window).bind('resize',function(){
			$content_admin.height($(window).height() - 65);
			$('.tab-02',$content_admin).width(function(){
				return $(window).width()-245;
			});
		});
	}
	
	//导航选项
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
		
		//得到准备删除的数据
		var //data_arr = [],
			$inp = $('.article-delete',$content_admin).find('input[type=checkbox]');
			//$('.article-delete',$content_admin).creat('input');
		/*
		$inp.each(function(i,e){
			e = this;
			if($(e).attr('checked')){
				data_arr.push($(this).parent().attr('article_id'));
				$(e).parent().attr('checked-data','true');
			}
		});
		$inp.bind('click',function(){
			if($(this).attr('checked')){
				if($(this).parent().attr('checked-data') != 'true')
					data_arr.push($(this).parent().attr('article_id'));
				$(this).parent().attr('checked-data','true');
			}else{
				$(this).parent().removeAttr('checked-data');
				data_arr.del($(this).parent().attr('article_id'))
			}
			console.log(data_arr);
		});
		*/
		$inp.each(function(i,e){
			e = this;
			if($(e).attr('checked')){
				$(e).next().attr('name','arr_data['+$(e).next().val()+']');
			}
		});
		$inp.bind('click',function(){
			if($(this).attr('checked')){
				$(this).next().attr('name','arr_data['+$(this).next().val()+']');
			}else{
				$(this).next().removeAttr('name');
			}
		});
		
	}
	
	//删除数组元素
	Array.prototype.del = function(el){
		if(typeof el == 'number'){
			for(i=0,n=0;i<this.length;i++){
				if(this[i] != this[el])
					this[n++] = this[i];	
			}
		}
		else if(typeof el == 'string'){
			for(i=0,n=0;i<this.length;i++){
				if(this[i] != el)
					this[n++] = this[i];	
			}
		}
		else return false;
		this.length -= 1;
	}
	
})