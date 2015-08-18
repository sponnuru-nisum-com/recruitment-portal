var Input=React.createClass({
	render:function(){
		var elmnthasType;
		if(this.props.type){
			elmnthasType=true;
		}
		return(
				<div className="row form-group">
					<label className='col-xs-2 col-sm-2 col-md-2 col-lg-2'>{this.props.label+":"}</label>
					<div className='col-xs-4 col-sm-4 col-md-4 col-lg-4'>
						<input className="form-control" name={this.props.name} ref={this.props.name} type={elmnthasType?this.props.type:"text"}/>
					</div>
					<div className='col-xs-6 col-sm-6 col-md-4 col-lg-4'>swathi</div>
				</div>
			)
	}
	});
