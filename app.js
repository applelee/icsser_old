
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');
var MongoStore = require('connect-mongo')(express);
var settings = require('./settings');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser());
/*app.use(express.session({
	secret: settings.cookieSecret,
	store: new MongoStore({
		db: settings.db
	})
}));*/

app.use(app.router);
routes(app);
app.use(express.static(path.join(__dirname, 'public')));

/*
app.dynamicHelpers({
	user:function(req,res){
		return req.session.user;
	},
	error:function(req,res){
		var err = req.flash('error');
		if(err.length)
			return err;
		else
			return null;
	},
	success:function(req,res){
		var succ = req.flash('success');
		if(succ.length)
			return succ;
		else
			return null;
	}
});
*/

if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
