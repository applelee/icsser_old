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
		Article.get(null,function(err,docs){
			res.render('home/article', {
				length: docs.length,
				article: docs,
				title: '非常道 - 列表页'
			});
		});
	});
	
	app.get('/home/detail/:_id', function (req, res) {
		Article.get(null,function(err,docs){
			Article.get(req.params._id, function(err,doc) {
				if (err) {
					return res.redirect('/');
				}
				res.render('home/detail', {
					articles: docs,
					length: docs.length,
					article: doc,
					title: '非常道 - '+ doc[0].article.title
				});
			});
		});
	});
	
	//添加文章
	app.get('/admin_insert', function (req, res){
		Article.get(null,function(err,doc){
			res.render('admin/insert-article', {
				length: doc.length,
				article: doc,
				title: '非常道 - 添加'
			});
		});
	});
	app.post('/admin_insert', function (req, res) {
		var article = new Article(req.body['title'],req.body['author'],req.body['source'],req.body['lable'],req.body['intr'],req.body['content']);
		article.save(function(err){
			if(err){
				req.flash('error',err);
				return res.redirect('/');
			}
			return res.redirect('/admin_insert');
		});
	});
	
	//删除选中文章
	app.get('/admin_delete', function (req, res){
		Article.get(null,function(err,doc){
			res.render('admin/delete-article', {
				length: doc.length,
				article: doc,
				title: '非常道 - 删除'
			});
		});
	});
	app.post('/admin_delete', function (req, res){
		Article.remove_func(req.body.arr_data,function(err){
			Article.get(null,function(err,doc){
				res.render('admin/delete-article', {
					length: doc.length,
					article: doc,
					title: '非常道 - 删除'
				});
			});
		});
	});
	
	//修改文章
	app.get('/admin_updata/:_id', function (req, res){
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
	app.post('/admin_delete', function (req, res){
		Article.remove_func(req.body.arr_data,function(err){
			Article.get(null,function(err,doc){
				res.render('admin/delete-article/', {
					length: doc.length,
					article: doc,
					title: '非常道 - 删除'
				});
			});
		});
	});
	
}