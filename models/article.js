var settings = require('../settings');
var BSON = require('mongodb').BSONPure;
var mongodb = require('./db');

function Article(title,author,source,lable,intr,content){
	var newDate = new Date();
	
	if(title)this.title = title;
	if(author)this.author = author;
	if(source)this.source = source;
	if(lable)this.lable = lable;
	if(intr)this.intr = intr;
	if(content)this.content = content;
	this.time = newDate.getFullYear() +'-'+ newDate.getMonth() +'-'+ newDate.getDate() + '  ' + newDate.getHours() +':'+ newDate.getMinutes() +':'+ newDate.getSeconds();
}

module.exports = Article;

Article.prototype.save = function save(callback){
	var post = {
		title:this.title,
		author:this.author,
		source:this.source,
		lable:this.lable,
		time:this.time,
		intr:this.intr,
		content:this.content
	}
	var posts = 
	{
		article:post
	}
	mongodb.open(function(err,db){
		db.authenticate(settings.username,settings.password,function(err,result){
			if(err){
				mongodb.close();
				return callback(err);
			}
			db.collection(settings.db_name,function(err,collection){
				if(err){
					mongodb.close();
					return callback(err);
				}
				collection.insert(posts,{safe:true},function(err,result){
					mongodb.close();
					//console.log(doc);
					return callback(err);
				});
			});
		});
	});
}

Article.get = function get(obj,callback){
	mongodb.open(function(err, db) {
		db.authenticate(settings.username,settings.password,function(err,result){
			if (err) {
				mongodb.close();
				res.end('Authenticate failed!');
				return;   
			}
			db.collection(settings.db_name,function(err, collection) {
				if (err) {
					mongodb.close();
					return callback(err);
				}
				if(!obj){
					collection.find({article:{$exists:true}}).sort({_id:-1}).toArray(function(err, doc) {
						mongodb.close();
						if (doc) {
							callback(err, doc);
							//console.log(doc);
						} else {
							callback(err, null);
						}
					});
				}else{
					var obj_id = BSON.ObjectID.createFromHexString(obj);
					collection.find({_id:{$in:[obj_id]}}).toArray(function(err, doc) {
						mongodb.close();
						if (doc) {
							callback(err, doc);
							//console.log(doc);
						} else {
							callback(err, null);
						}
					});
				}
			});
		});
	});
}

Article.remove = function(obj,callback){
	mongodb.open(function(err, db) {
		db.authenticate(settings.username,settings.password,function(err,result){
			if (err) {
				mongodb.close();
				res.end('Authenticate failed!');
				return;   
			}
			db.collection(settings.db_name,function(err, collection) {
				if (err) {
					mongodb.close();
					return callback(err);
				}
				collection.remove(function(err, doc) {
					mongodb.close();
				});
			});
		});
	});
}