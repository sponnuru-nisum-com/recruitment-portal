var React=require('react');
var RecruitActions=require('../Actions/recruitActions');
var Input=require('Input');
var Registration=React.createClass({displayName: "Registration",
	render:function(){
		return(
			React.createElement("section", {id: "content-sections container"}, 
				React.createElement("div", {id: "Form", className: "row"}, 
				React.createElement("h1", {id: "Register", className: "col-xs-12 col-sm-12 col-md-12 col-lg-12"}, "Registration Form"), 
				React.createElement("div", {className: "col-xs-12 col-sm-12 col-md-12 col-lg-12"}, 
					React.createElement("form", {id: "registrationForm"}, 
						React.createElement(Input, {name: "fname", label: "First Name"}), 
						React.createElement(Input, {name: "lname", label: "Last Name"}), 
						React.createElement(Input, {name: "address1", label: "Address Line1"}), 
						React.createElement(Input, {name: "address2", label: "Address Line2"}), 
						React.createElement(Input, {name: "city", label: "City"}), 
						React.createElement(Input, {name: "state", label: "State"}), 
						React.createElement(Input, {name: "zipcode", label: "Zip Code"}), 
						React.createElement(Dob, {name: "", label: "Date of Birth", updateDOB: this.updateDOB}), 
						React.createElement(Input, {name: "mno", label: "Mobile Number", type: "email"}), 
						React.createElement(Input, {name: "email", label: "Email"}), 
						React.createElement(Input, {name: "verifyemail", label: "verify Email"}), 
						React.createElement(Input, {name: "pwd", label: "Password", type: "password"}), 
						React.createElement(Input, {name: "verifypwd", label: "verify Password", type: "password"}), 
						React.createElement("button", {type: "button", className: "col-xs-2 col-sm-2 col-md-2 col-lg-2 col-lg-offset-2 btn btn-primary", onClick: this.formSubmitted}, "click")
					)
				)
			)
			)
		)
	}
});
module.exports=Registration;