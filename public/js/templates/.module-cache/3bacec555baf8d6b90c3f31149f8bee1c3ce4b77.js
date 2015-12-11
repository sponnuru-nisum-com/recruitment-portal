var React=require('react');
var MainSection=React.createClass({displayName: "MainSection",
	render:function(){
		return(
			React.createElement("section", {id: "content-section container"}, 
				React.createElement("div", {class: "row"}, 
					React.createElement("div", {class: "col-lg-offset-6 col-lg-6"}, 
						React.createElement("form", {role: "form"}, 
							React.createElement("div", {class: "form-group row"}, 
								React.createElement("h1", {class: "col-lg-offset-2 col-lg-2"}, "Login")
							), 
							React.createElement("div", {class: "form-group row"}, 
								React.createElement("div", {class: "col-lg-2"}, 
									React.createElement("label", {for: "email"}, "Email:")
								), 
								React.createElement("div", {class: "col-lg-5"}, 								
								React.createElement("input", {type: "email", class: "form-control"})
								)
							), 
							React.createElement("div", {class: "form-group row"}, 
								React.createElement("div", {class: "col-lg-2"}, 
									React.createElement("label", {for: "pwd"}, "Password:")
								), 
								React.createElement("div", {class: "col-lg-5"}, 
									React.createElement("input", {type: "pwd", class: "form-control"})
								)
							), 
							React.createElement("div", {class: "form-group  row"}, 
								React.createElement("div", {class: "col-lg-12"}, 
									React.createElement("button", {class: "btn btn-primary"}, "Login")
								)
							), 
							React.createElement("div", {class: "form-group row"}, 
								React.createElement("div", {class: "col-lg-12"}, 
									"Not Registered yet???", React.createElement("a", {href: "#"}, "Reigister"), " Now"
								)
							)
						)
					)
				)
			)
		)
	}
});
module.exports=MainSection;