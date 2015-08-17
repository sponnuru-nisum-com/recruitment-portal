var CreateForm=React.createClass({
	mixins: [React.addons.LinkedStateMixin],
	getInitialState:function(){
		return { 
			fname:'',
			lname:'',
			address1:'',
			address2:'',
			city:'',
			state:'',
			zipcode:'',
			Mno:'',
			email:'',
			verifyemail:'',
			pwd:'',
			verifypwd:'',
			DOB:null
		}
	},
	render:function(){
		return(
			<div id="Form" className="row"> 
				<h1 id="Register" className="col-xs-12 col-sm-12 col-md-12 col-lg-12">Registration Form</h1>
				<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
					<form action="submit" method="post">
						<Input label="First Name" valueLink={this.linkState('fname')}/>
						<Input label="Last Name" valueLink={this.linkState('lname')}/>
						<Input label="Address Line1" valueLink={this.linkState('address1')}/>
						<Input label="Address Line2" valueLink={this.linkState('address2')}/>
						<Input label="City" valueLink={this.linkState('city')}/>
						<Input label="State" valueLink={this.linkState('state')}/>
						<Input label="Zip Code" valueLink={this.linkState('zipcode')}/>
						<Dob label="Date of Birth"/>
						<Input label="Mobile Number" type="email" valueLink={this.linkState('Mno')}/>
						<Input label="Email" valueLink={this.linkState('email')}/>
						<Input label="verify Email" type="email" valueLink={this.linkState('verifyemail')}/>
						<Input label="Password" type="password" valueLink={this.linkState('pwd')}/>
						<Input label="verify Password" type="password" valueLink={this.linkState('verifypwd')}/>
						<button className="col-xs-2 col-sm-2 col-md-2 col-lg-2 col-lg-offset-2 btn btn-primary">submit</button>
					</form>
				</div>
			</div>
		)
	}
});
