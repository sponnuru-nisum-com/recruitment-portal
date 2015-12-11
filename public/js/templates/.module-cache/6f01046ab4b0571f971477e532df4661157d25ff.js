var React=require('react');
var RecruitActions=require('../Actions/recruitActions');
var Login=React.createClass({displayName: "Login",
	render:function(){
		return(
			React.createElement("section", {id: "content-section container"}, 
				React.createElement("div", {className: "row"}, 
					React.createElement("div", {className: "col-lg-offset-6 col-lg-6"}, 
						React.createElement("form", {role: "form"}, 
							React.createElement("div", {className: "form-group row"}, 
								React.createElement("h1", {className: "col-lg-offset-2 col-lg-2"}, "Login")
							), 
							React.createElement("div", {className: "form-group row"}, 
								React.createElement("div", {className: "col-lg-2"}, 
									React.createElement("label", {for: "email"}, "Email:")
								), 
								React.createElement("div", {className: "col-lg-5"}, 								
								React.createElement("input", {type: "email", className: "form-control"})
								)
							), 
							React.createElement("div", {className: "form-group row"}, 
								React.createElement("div", {className: "col-lg-2"}, 
									React.createElement("label", {for: "pwd"}, "Password:")
								), 
								React.createElement("div", {className: "col-lg-5"}, 
									React.createElement("input", {type: "pwd", className: "form-control"})
								)
							), 
							React.createElement("div", {className: "form-group  row"}, 
								React.createElement("div", {className: "col-lg-12"}, 
									React.createElement("button", {className: "btn btn-primary"}, "Login")
								)
							), 
							React.createElement("div", {className: "form-group row"}, 
								React.createElement("div", {className: "col-lg-12"}, 
									"Not Registered yet??? ", React.createElement("a", {href: "#", onClick: this._register}, "Register"), " Now"
								)
							)
						)
					)
				)
			)
		)
	},
	_register:function(){

	}
});
module.exports=Login;