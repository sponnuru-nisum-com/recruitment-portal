var SelectOption=React.createClass({displayName: "SelectOption",
	render:function(){
	var createOptions=function(value,index){
		return(
			React.createElement("option", {key: index}, value)
		)
	};
	return React.createElement("select", {id: this.props.id}, this.props.date.map(createOptions));
	}	
});
	