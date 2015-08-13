var CreateForm=React.createClass({
	getInitialState:function(){
		return { 
			name:'',
			label:'',
			type:''
		}
	},
	render:function(){
			return(
					<div id="Form" className="row"> 
						<h1 id="Register" className="col-xs-12 col-sm-12 col-md-12 col-lg-12">Registration Form</h1>
						<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
							<form action="submit" method="post">
								<Input name="fname" label="First Name"/>
								<Input name="lname" label="Last Name"/>
								<Input name="address1" label="Address Line1"/>
								<Input name="address2" label="Address Line2"/>
								<Input name="city" label="City"/>
								<Input name="state" label="State"/>
								<Input name="zipcode" label="Zip Code"/>
								<Dob name="DOB" label="Date of Birth"/>
								<Input name="Mno" label="Mobile Number" type="email"/>
								<Input name="email" label="Email"/>
								<Input name="verifyemail" label="verify Email" type="email"/>
								<Input name="pwd" label="Password" type="password"/>
								<Input name="verifypwd" label="verify Password" type="password"/>
								<button className="col-xs-2 col-sm-2 col-md-2 col-lg-2 col-lg-offset-2 btn btn-primary">submit</button>
							</form>
						</div>
					</div>
				)
		}

});
