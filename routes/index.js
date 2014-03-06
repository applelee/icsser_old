//var crypto = require('crypto');
var Article = require('../models/article.js');

module.exports = function(app){
	app.get('/', function (req, res) {
		Article.get(null,function(err,doc){
			res.render('home/index', {
				length: 3,
				article: doc,
				title: '非常道 - 首页'
			});
		});
	});
	
	app.get('/article', function (req, res) {
		Article.get(null,function(err,doc){
			res.render('home/article', {
				length: doc.length,
				article: doc,
				title: '非常道 - 列表页'
			});
		});
	});
	
	app.get('/home/detail/:_id', function (req, res) {
		Article.get(req.params._id, function(err,doc) {
			if (err) {
				return res.redirect('/');
			}
			res.render('home/detail', {
				article: doc,
				title: '非常道 - '+ doc[0].article.title
			});
		});
	});
	
	app.get('/admin123456', function (req, res) {
		res.render('admin/index', {
			title: '非常道 - 后台管理'
		});
	});
	
	app.get('/admin123456', function (req, res) {
		res.render('admin/index', {
			title: '非常道 - 后台管理'
		});
	});
	
	app.get('/ceshi', function (req, res) {
		res.render('home/ceshi', {
			title: '非常道 - 后台管理'
		});
	});
	
	app.post('/admin', function (req, res) {
		var article = new Article(req.body['title'],req.body['author'],req.body['source'],req.body['lable'],req.body['intr'],req.body['content']);
		article.save(function(err){
			if(err){
				req.flash('error',err);
				return res.redirect('/');
			}
			return res.redirect('/admin123456');
		});
	});
	
}