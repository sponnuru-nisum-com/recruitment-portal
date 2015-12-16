var LocalStrategy=require('passport-local').Strategy;
var Users=require('./model.js');
module.exports=function(passport){
	Users.find(function(err,test){
		console.log(test);
	});
	passport.use('local-signin',new LocalStrategy({
			usernameField : 'email',
	        passwordField : 'password',
	        passReqToCallback : true
		},function(req,email,password,done){
			if(!req.user){
				Users.find({'_id':email},function(err,user){
					if(err){
						return done(err);
					}
					if(user.length){
						Users.find({'pwd':password},function(err,user){
							if(user.length){
								return done(null,user);	
							}
							else{
								return done(null,false);
							}
						});
					}
					else{
						return done(null,false);
					}
				});
			}
	    }
	));
}
