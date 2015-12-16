var fs = require('fs');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var mongoose=require("mongoose");
var passport=require("passport");
var flash=require('connect-flash');

app.use(flash());
app.set('port', (process.env.PORT || 3000));
app.use('/', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//routes
require('./server/routes')(app,path,passport);

//Establishing Connection with mongoose
var configDB=require('./server/database');
mongoose.connect(configDB.dbUrl);
mongoose.connection.once("open",function(){
	console.log("The Server Connected with database successfully...	");
});

//passport configuration
require('./server/passport')(passpor);


app.listen(app.get('port'), function() {
  console.log('Server started: http://localhost:' + app.get('port') + '/');
});

