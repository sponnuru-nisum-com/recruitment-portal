var React=require('react');
var Login=require('./login');
var Registration=require('./Registration');
var RecruitStore=require('../Stores/recruitStores');
var MainSection=React.createClass({displayName: "MainSection",
	getInitialState:function() {
		return{
			isLogin:RecruitStore.getIsLogin()
		}
	},
	componentDidMount:function(){
		RecruitStore.addChangeListener(this._onIsLoginChange);
	},
	render:function(){
		if(this.state.isLogin){
			return React.createElement(Login, null)
		}
		else{
			return React.createElement(Registration, null)
		}
	},
	_onIsLoginChange:function(){
		this.setState({isLogin:RecruitStore.getIsLogin()});
	}
});
module.exports=MainSection;