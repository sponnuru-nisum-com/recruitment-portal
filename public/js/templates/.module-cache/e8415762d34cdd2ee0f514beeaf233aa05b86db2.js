var React=require('react');
var RecruitActions=require('../Actions/recruitActions');
var Input=require('./Input');
var Login=React.createClass({displayName: "Login",
	render:function(){
		return(
			React.createElement("section", {className: "content-section container"}, 
				React.createElement("div", {className: "row"}, 
					React.createElement("div", {className: "col-lg-offset-6 col-lg-6"}, 
						React.createElement("form", {role: "form"}, 
							React.createElement("div", {className: "form-group row"}, 
								React.createElement("h1", {className: "col-lg-offset-2 col-lg-2"}, "Login")
							), 
							React.createElement(Input, {name: "email", label: "Email:"}), 
							React.createElement(Input, {name: "Password", label: "Password:"}), 
							React.createElement("div", {className: "form-group  row"}, 
								React.createElement("div", {className: "col-lg-12"}, 
									React.createElement("button", {className: "btn btn-primary"}, "Login")
								)
							), 
							React.createElement("div", {className: "form-group row"}, 
								React.createElement("div", {className: "col-lg-12"}, 
									"Not Registered yet??? ", React.createElement("a", {onClick: this._register}, "Register"), " Now"
								)
							)
						)
					)
				)
			)
		)
	},
	_register:function(){
		RecruitActions.register();
	}
});
module.exports=Login;