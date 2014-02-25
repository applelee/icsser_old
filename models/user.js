var mongodb = require('./db');

function User(user){
	this.name = user.name;
	this.password = this.password;
}
module.exports = User;

User.prototype.save = function save(callback){
	//存入 mongodb 的文档
	var user = {
		name:this.name,
		password:this.password
	}
	mongodb.open(function(err,db){
		if(err)
			return callback(err);
	});
	//读取users集合
	db.collection('users',function(err,collection){
		if(err){
			mongodb.close();
			return callback(err);
		}
		//为name属性添加索引
		collection.enssureIndex('name',{unique:true});
		//写入user文档
		collection.insert(user,{safe:true},function(err,user){
			mongodb.close();
			callback(err,user);
		});
	});
	
	User.get = function get(username,callback){
		mongodb.open(function(err,db){
			if(err){
				return callback(err);
			}
			//读取users集合
			db.collection('users',function(err,collection){
				if(err){
					mongodb.close();
					return callback(err);
				}
				//查找name属性为username的文档
				collection.fundOne({name:username},function(){
					mongodb.close();
					if(doc){
						//封装文档为User对象
						var user = newUser(doc);
						callback(err,user);
					}else{
						callback(err,null);
					}
				});
			});
		});
	}
}