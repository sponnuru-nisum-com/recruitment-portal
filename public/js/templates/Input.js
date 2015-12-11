var React=require('react');
var Input=React.createClass({displayName: "Input",
	render:function(){
		return(
			React.createElement("div", {className: "form-group row"}, 
				React.createElement("div", {className: "col-lg-3"}, 
					React.createElement("label", {htmlFor: this.props.name}, this.props.label)
				), 
				React.createElement("div", {className: "col-lg-6"}, 								
					React.createElement("input", {className: "form-control", name: this.props.name})
				)
			)
		)
	}
});
module.exports=Input;
