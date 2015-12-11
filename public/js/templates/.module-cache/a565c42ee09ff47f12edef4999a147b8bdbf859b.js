var React=require('react');
var Login=require('./login');
var MainSection=React.createClass({displayName: "MainSection",
	getInitialState:function() {
		return{
			isLogin:true
		}
	},
	render:function(){
		if(isLogin){
			return React.createElement(Login, null)
		}
		else{
			return React.createElement(Register, null)
		}
	}
});
module.exports=MainSection;