var React=require('react');
var RecruitActions=require('../Actions/recruitActions');
var Input=require('./Input');
var RecruitActions=require('../Actions/recruitActions');
var Registration=React.createClass({
	render:function(){
		return(
			<section className="content-section container">
				<div className="row">
					<div className="form-group col-lg-12">
						<h1>Registration</h1>
					</div>
				</div>
				<form role="form">
					<div className="row">
						<div className="col-lg-6">
							<Input name="fname" label="First Name" />
							<Input name="lname" label="Last Name" />
							<Input name="address1" label="Address Line1" />
							<Input name="address2" label="Address Line2" />
							<Input name="city" label="City" />
							<Input name="state" label="State" />
							<Input name="zipCode" label="Zip Code" />
							<Input name="dob" label="DOB" />							
						</div>
						<div className="col-lg-6">
							<Input name="email" label="Email" />
							<Input name="vemail" label="Verify Email" />
							<Input name="pwd" label="Password" />
							<Input name="vpwd" label="Verify Password" />
							<Input name="phNo" label="Phone Number" />
							<Input name="sque" label="Security Question" />
							<Input name="ans" label="Answer" />
							<div className="form-group row">
								<div className="col-lg-offset-4 col-lg-2">
									<button className="btn btn-danger">CANCEL</button>
								</div>
								<div className="col-lg-2">								
									<button className="btn btn-success">CONTINUE</button>
								</div>
							</div>
							<div className="form-group row">
								<div className="col-lg-offset-2">
									Want To <a onClick={this._login}>Login</a>
								</div>
							</div>
						</div>	
					</div>					
				</form>	
			</section>
		)
	},
	_login:function(){
		RecruitActions.register(true);
	}
});
module.exports=Registration;