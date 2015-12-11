var React=require('react');
var Input=React.createClass({
	render:function(){
		return(
			<div className="form-group row">
				<div className="col-lg-3">
					<label htmlFor={this.props.name}>{this.props.label}</label>
				</div>
				<div className="col-lg-6">								
					<input className="form-control" name={this.props.name}/>
				</div>
			</div>
		)
	}
});
module.exports=Input;
