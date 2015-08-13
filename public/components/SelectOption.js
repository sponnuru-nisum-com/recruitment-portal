var SelectOption=React.createClass({
	render:function(){
	var createOptions=function(value,index){
		return(
			<option key={index}>{value}</option>
		)
	};
	return <select id={this.props.id}>{this.props.date.map(createOptions)}</select>;
	}	
});
	