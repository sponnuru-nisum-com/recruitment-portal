var React=require('react');
var Login=require('./login');
var Registration=require('./Registration');
var RecruitStore=require('../Stores/recruitStores');
var MainSection=React.createClass({
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
			return <Login/>
		}
		else{
			return <Registration/>
		}
	},
	_onIsLoginChange:function(){
		this.setState({isLogin:RecruitStore.getIsLogin()});
	}
});
module.exports=MainSection;