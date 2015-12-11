var React=require('react');
var RecruitActions=require('../Actions/recruitActions');
var Input=require('./Input');
var Registration=React.createClass({displayName: "Registration",
	render:function(){
		return(
			React.createElement("section", {className: "content-section container"}, 
				React.createElement("form", {role: "form"}, 
					React.createElement("div", {className: "row"}, 
						React.createElement("div", {className: "form-group col-lg-12"}, 
							React.createElement("h1", null, "Registration")
						)
					), 
					React.createElement("div", {className: "row"}, 
						React.createElement("div", {className: "col-lg-6"}, 
							React.createElement(Input, {name: "fname", label: "First Name"}), 
							React.createElement(Input, {name: "lname", label: "Last Name"}), 
							React.createElement(Input, {name: "address1", label: "Address Line1"}), 
							React.createElement(Input, {name: "address2", label: "Address Line2"}), 
							React.createElement(Input, {name: "city", label: "City"}), 
							React.createElement(Input, {name: "state", label: "State"}), 
							React.createElement(Input, {name: "dob", label: "DOB"})
						)	
					)					
				)
							
			)
		)
	}
});
module.exports=Registration;