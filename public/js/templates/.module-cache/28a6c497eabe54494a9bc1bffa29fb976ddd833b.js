var React=require('react');
var Header=React.createClass({displayName: "Header",
	render:function(){
		return(
			React.createElement("header", {id: "header"}, 
				React.createElement("div", {class: "row"}, 
					React.createElement("div", {class: "col-lg-1"}, 
						React.createElement("div", {id: "logo"})
					), 
					React.createElement("div", {class: "col-lg-6 recruit"}, "Recruitment Portal")
				), 
				React.createElement("div", {class: "welcome-text container-fluid"}, 
					React.createElement("div", {class: "container"}, "Welcome To OSI Technologies")
				)
			)
		)
	}
});
module.exports=Header;