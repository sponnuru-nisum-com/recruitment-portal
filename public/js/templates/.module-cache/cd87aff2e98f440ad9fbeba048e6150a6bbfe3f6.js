var React=require('react');
var Input=React.createClass({displayName: "Input",
	render:function(){
		return(
			React.createElement("div", {className: "form-group row"}, 
				React.createElement("div", {className: "col-lg-2"}, 
					React.createElement("label", {htmlFor: "email"}, this.props.label)
				), 
				React.createElement("div", {className: "col-lg-5"}, 								
					React.createElement("input", {type: "email", className: "form-control"})
				)
			)
		)
	}
});
