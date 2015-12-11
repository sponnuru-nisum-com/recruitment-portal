var React=require('react');
var RecruitActions=require('../Actions/recruitActions');
var Input=require('./Input');
var Login=React.createClass({
	render:function(){
		return(
			<section className="content-section container">
				<div className="row">
					<div className="col-lg-offset-6 col-lg-6">
						<form role="form">
							<div className="form-group row">
								<h1 className="col-lg-offset-2 col-lg-2">Login</h1>
							</div>
							<Input name="email" label="Email:"/>
							<Input name="Password" label="Password:"/>
							<div className="form-group  row">
								<div className="col-lg-12">
									<button className="btn btn-primary">Login</button>
								</div>
							</div>
							<div className="form-group row">
								<div className="col-lg-12">
									Not Registered yet??? <a onClick={this._register}>Register</a> Now
								</div>
							</div>
						</form>
					</div>
				</div>
			</section>
		)
	},
	_register:function(){
		RecruitActions.register(false);
	}
});
module.exports=Login;