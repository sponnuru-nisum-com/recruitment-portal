var React=require('react');
var ReactDom=require("react-dom");
var LinkedStateMixin=require('react-addons-linked-state-mixin');
var RecruitActions=require('../Actions/recruitActions');
var jquery=require('jquery');
var Input=require('./Input');
var Login=React.createClass({
	mixins:[LinkedStateMixin],
	getInitialState:function(){
		return{
			email:"",
			pwd:"",
			errorMsg:{test:"test"},
			self:Input
		}
	},
	render:function(){
		return(
			<section className="content-section container">
				<div className="row">
					<div className="col-lg-offset-6 col-lg-6">
						<form role="form" id="login" onSubmit={this._loginSubmit}>
							<div className="form-group row">
								<h1 className="col-lg-offset-2 col-lg-2">Login</h1>
							</div>
							<Input ref="email" name="email" label="Email:" type="text" valueLink={this.linkState('email')} />
							<Input ref="password" name="password" label="Password:" type="password" valueLink={this.linkState('pwd')}/>
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
	},
	_loginSubmit:function(event){
		event.preventDefault();
		var emailErrMsg=ReactDom.findDOMNode(this.refs.email.refs[this.refs.email.props.name]);
		var pwdErrMsg=ReactDom.findDOMNode(this.refs.password.refs[this.refs.password.props.name]); 

		if(!this.state.email){
			emailErrMsg.innerHTML='Please enter email address';
		}
		if(!this.state.pwd){
			pwdErrMsg.innerHTML='Please enter password';
		}
		if(this.state.email && this.state.pwd){
			emailErrMsg.innerHTML="";
			pwdErrMsg.innerHTML="";
		}
		if(emailErrMsg.innerHTML===""&&pwdErrMsg.innerHTML===""){
			var data={};
			data.email=this.state.email;
			data.password=this.state.pwd;
			jquery.post('/loginSubmit',data,function(){})
		}
	}
});
module.exports=Login;