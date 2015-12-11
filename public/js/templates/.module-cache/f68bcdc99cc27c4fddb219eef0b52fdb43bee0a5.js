var React=require('react');
var Login=require('./login');
var RecruitStore=require('../Stores/recruitStores');
var MainSection=React.createClass({displayName: "MainSection",
	getInitialState:function() {
		return{
			isLogin:RecruitStore.isLogin()
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
			return React.createElement(Register, null)
		}
	}
});
module.exports=MainSection;