var React=require('react');
var Input=React.createClass({displayName: "Input",
	render:function(){
		var elmnthasType;
		if(this.props.type){
			elmnthasType=true;
		}
		return(
				React.createElement("div", {className: "row form-group"}, 
					React.createElement("label", {className: "col-xs-2 col-sm-2 col-md-2 col-lg-2"}, this.props.label+":"), 
					React.createElement("div", {className: "col-xs-4 col-sm-4 col-md-4 col-lg-4"}, 
						React.createElement("input", {className: "form-control", name: this.props.name, ref: this.props.name, type: elmnthasType?this.props.type:"text"})
					), 
					React.createElement("div", {className: "col-xs-6 col-sm-6 col-md-4 col-lg-4"}, "swathi")
				)
			)
	}
	});
