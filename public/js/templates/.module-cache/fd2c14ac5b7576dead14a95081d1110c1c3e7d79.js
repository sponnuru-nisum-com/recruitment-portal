var React=require('react');
var RecruitActions=require('../Actions/recruitActions');
var Login=React.createClass({displayName: "Login",
	render:function(){
		return(
			React.createElement("section", {id: "content-sections container"}, 
					"test"
			)
		)
	},
	_register:function(){
		RecruitActions.register();
	}
});
module.exports=Login;