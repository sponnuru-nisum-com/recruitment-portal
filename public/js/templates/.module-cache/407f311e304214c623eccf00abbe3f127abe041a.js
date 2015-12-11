var React=require('react');
var RecruitActions=require('../Actions/recruitActions');
var Input=require('./Input');
var Registration=React.createClass({displayName: "Registration",
	render:function(){
		return(
			React.createElement("section", {className: "content-section container"}, 
				React.createElement("div", {className: "row"}, 
					React.createElement("form", {role: "form"}, 
						React.createElement("div", {className: "col-lg-6"}, 
							React.createElement("div", {className: "form-group row"}, 
								React.createElement("h1", {className: "col-lg-offset-2 col-lg-2"}, "Registration")
							)
						), 
						React.createElement("div", {className: "form-group row"}, 
							React.createElement("div", {className: "col-lg-2"}, 
								React.createElement("label", {for: "email"}, "Email:")
							), 
							React.createElement("div", {className: "col-lg-5"}, 								
								React.createElement("input", {type: "email", className: "form-control"})
							), 
							React.createElement(Input, {name: "fname", label: "First Name"})
						)
					)
				)						
			)
		)
	}
});
module.exports=Registration;