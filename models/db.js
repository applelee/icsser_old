var settings = require('../settings');
var Db = require('mongodb').Db;
var Server = require('mongodb').Server;

module.exports = new Db(settings.db_name,new Server(settings.db_host,settings.db_port,{}),{safe:false});