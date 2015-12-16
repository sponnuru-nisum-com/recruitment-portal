var mongoose = require('mongoose');
var userSchema=mongoose.Schema({
	_id:String,
	password:String
});
module.exports=mongoose.model('User',userSchema);
