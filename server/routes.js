module.exports=function(app,path,passport){	
	app.use(passport.initialize());
	app.use(passport.session());
	passport.serializeUser(function(user, done) {
		 done(null, user);
	});

	passport.deserializeUser(function(user, done) {
		 done(null, user);
	});
	app.post("/loginSubmit",
		passport.authenticate('local-signin',{
			successRedirect:'/success',
			failureRedirect:'/fail'
		})
		);
	app.get('/success',function(req,res){
		res.send("success");
	});
	app.get('/fail',function(req,res){
		res.send("fail");
	});
}