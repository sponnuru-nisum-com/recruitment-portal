var CreateForm=React.createClass({
	formSubmitted:function(){
	formData=$('#registrationForm').serializeArray();
		new Input().render();
		/*formData.forEach(function(i){
			console.log(validator.isNull(i.value));
		})*/
		$.ajax({
			type:'POST',
			dataType:'json',
			url:'registration',
			data:$('#registrationForm').serializeArray(),
			success:function(response){
				//alert(response)
			},
			error:function(textStatus){
				alert('error')
			}
		})
	},
	render:function(){
		return(
			<div id="Form" className="row"> 
				<h1 id="Register" className="col-xs-12 col-sm-12 col-md-12 col-lg-12">Registration Form</h1>
				<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
					<form id="registrationForm">
						<Input name="fname" label="First Name" />
						<Input name="lname" label="Last Name"/>
						<Input name="address1" label="Address Line1"/>
						<Input name="address2" label="Address Line2"/>
						<Input name="city" label="City"/>
						<Input name="state" label="State"/>
						<Input name="zipcode" label="Zip Code"/>
						<Dob name="" label="Date of Birth" updateDOB={this.updateDOB}/>
						<Input name="mno" label="Mobile Number" type="email"/>
						<Input name="email" label="Email"/>
						<Input name="verifyemail" label="verify Email"/>
						<Input name="pwd" label="Password" type="password"/>
						<Input name="verifypwd" label="verify Password" type="password" />
						<button type="button" className="col-xs-2 col-sm-2 col-md-2 col-lg-2 col-lg-offset-2 btn btn-primary" onClick={this.formSubmitted}>click</button>
					</form>
				</div>
			</div>
		)
	}
});
