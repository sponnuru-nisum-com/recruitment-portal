var React=require('react');
var Login=require('./login');
var RecruitStore=require('../Stores/recruitStores');
var MainSection=React.createClass({displayName: "MainSection",
	getInitialState:function() {
		return{
			isLoginContent:RecruitStore.isLoginContent()
		}
	},
	render:function(){
		if(this.state.isLoginContent){
			return React.createElement(Login, null)
		}
		else{
			return React.createElement(Register, null)
		}
	}
});
module.exports=MainSection;