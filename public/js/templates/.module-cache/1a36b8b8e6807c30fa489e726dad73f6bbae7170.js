var React=require('react');
var Header=React.createClass({displayName: "Header",
	render:function(){
		return(
			React.createElement("header", {id: "header"}, 
				React.createElement("div", {className: "row"}, 
					React.createElement("div", {className: "col-lg-1"}, 
						React.createElement("div", {id: "logo"})
					), 
					React.createElement("div", {className: "col-lg-6 recruit"}, "Recruitment Portal")
				), 
				React.createElement("div", {className: "welcome-text container-fluid"}, 
					React.createElement("div", {className: "container"}, "Welcome To OSI Technologies")
				)
			)
		)
	}
});
module.exports=Header;