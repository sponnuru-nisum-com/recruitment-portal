var React=require('react');
var ReactDom=require("react-dom");
var ErrorMsg=require('./ErrorMsg');
var Input=React.createClass({
	render:function(){
		var elementHasType;
		if(this.props.type){
			elementHasType=true;
		}
		return(
			<div className="form-group row">
				<div className="col-lg-3">
					<label htmlFor={this.props.name}>{this.props.label}</label>
				</div>
				<div className="col-lg-6">								
					<input className="form-control" name={this.props.name} valueLink={this.props.valueLink} type={elementHasType?this.props.type:"text"}/>
					<ErrorMsg ref={this.props.name}/>
				</div>
			</div>
		)
	},
	componentDidUpdate:function(){
		if(this.props.valueLink.value){
			ReactDom.findDOMNode(this.refs[this.props.name]).innerHTML="you have entered some value";
		}/*
		else{
			ReactDom.findDOMNode(this.refs[this.props.name]).innerHTML="";
		}*/
	}
});
module.exports=Input;
