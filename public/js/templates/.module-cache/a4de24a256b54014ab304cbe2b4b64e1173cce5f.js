var React=require('react');
var RecruitActions=require('../Actions/recruitActions');
var Input=require('./Input');
var Registration=React.createClass({displayName: "Registration",
	render:function(){
		return(
			React.createElement("section", {className: "content-section container"}, 
				React.createElement("div", {className: "row"}, 
					React.createElement("div", {className: "form-group col-lg-12"}, 
						React.createElement("h1", null, "Registration")
					)
				), 
				React.createElement("form", {role: "form"}, 
					React.createElement("div", {className: "row"}, 
						React.createElement("div", {className: "col-lg-6"}, 
							React.createElement(Input, {name: "fname", label: "First Name"}), 
							React.createElement(Input, {name: "lname", label: "Last Name"}), 
							React.createElement(Input, {name: "address1", label: "Address Line1"}), 
							React.createElement(Input, {name: "address2", label: "Address Line2"}), 
							React.createElement(Input, {name: "city", label: "City"}), 
							React.createElement(Input, {name: "state", label: "State"}), 
							React.createElement(Input, {name: "zipCode", label: "Zip Code"}), 
							React.createElement(Input, {name: "dob", label: "DOB"})							
						), 
						React.createElement("div", {className: "col-lg-6"}, 
							React.createElement(Input, {name: "email", label: "Email"}), 
							React.createElement(Input, {name: "vemail", label: "Verify Email"}), 
							React.createElement(Input, {name: "pwd", label: "Password"}), 
							React.createElement(Input, {name: "vpwd", label: "Verify Password"}), 
							React.createElement(Input, {name: "phNo", label: "Phone Number"}), 
							React.createElement(Input, {name: "sque", label: "Security Question"}), 
							React.createElement(Input, {name: "ans", label: "Answer"}), 
							React.createElement("div", {className: "form-group row"}, 
								React.createElement("div", {className: "col-lg-offset-4 col-lg-2"}, 
									React.createElement("button", {className: "btn btn-danger"}, "CANCEL")
								), 
								React.createElement("div", {className: "col-lg-2"}, 								
									React.createElement("button", {className: "btn btn-success"}, "CONTINUE")
								)
							)
						)	
					)					
				)
							
			)
		)
	}
});
module.exports=Registration;