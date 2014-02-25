//var crypto = require('crypto');
//var User = require('../models/user.js');

module.exports = function(app){
	app.get('/', function (req, res) {
		res.render('index', {
			title: "非常道 - 首页"
		});
	});
	
	/*
	app.post('/', function (req, res) {
		//检测用户两次密码是否一样
		if(req.body['password-repeat'] != req.body['password']){
			req.flash('error','两次输入密码不一致');
			return res.redirect();
		}
		
		//生成口令的散列值
		var md5 = crypto.createHash('md5');
		var password = md5.update(req.body.password).degest('base64');
		
		var newUser = new User({
			name:req.body.username,
			password:password
		});
		
		//检查用户名是否存在
		User.get(newUser.name,function(err,user){
			if(user)
				err = 'Username already exists.';
			if(err){
				req.flash('error',err);
				return res.redirect('/reg');
			}
			//如果不存在则新增用户
			newUser.save(function(){
				if(err){
					req.flash('error',err);
					return res.redirect('/reg');
				}
				req.sessin.user = newUser;
				req.flash('success','注册成功');
				res.redirect('/');
			});
		});
	});
	
	*/
	app.get('/article', function (req, res) {
		res.render('article', {
			title: "非常道 - 文章列表"
		});
	});
	
	app.get('/detail', function (req, res) {
		res.render('detail', {
			title: "非常道 - 文章详情"
		});
	});
	
	/*
	app.post('/post',checkLogin);
	app.post('/post',function(req,res){
		var currentUser = req.session.user;
		var post = new Post(currentUser.name,req.body.post);
		post.save(function(err){
			if(err){
				req.flash('error',err);
				return res.redirect('/');
			}
			req.flash('success','发表成功');
			res.redirect('/u/' + currentUser.name);
		});
	});
	
	app.get('/u/:user',function(req,res){
		User.get(req.params.user,function(err,user){
			if(!user){
				req.flash('error','用户不存在');
				return res.redirect('/');
			}
			Post.get(user.name,function(err,posts){
				if(err){
					req.flash('error',err);
					return res.redirect('/');
				}
				res.render('user',{
					title:user.name,
					posts:posts
				});
			});
		});
	})
	*/
	
	function checkLogin(req, res, next) {
		if (!req.session.user) {
			req.flash('error', '未登入');
			return res.redirect('/login');
		}
		next();
	}
}