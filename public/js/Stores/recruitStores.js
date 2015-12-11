var AppDispatcher=require("./../dispatcher/AppDispatcher");
var EventEmitter=require("events").EventEmitter;
EventEmitter=new EventEmitter();
var isLogin=true;
var RecruitStore={
	getIsLogin:function(){
	    return isLogin;
	},
	setIsLogin:function(value){
	    isLogin=value;
	},
	addChangeListener:function(callback){
		EventEmitter.on('isLoginChange',callback);
	},
	emitIsLoginChange:function(){
		EventEmitter.emit('isLoginChange');
	}
}
AppDispatcher.register(function(payload){
	switch(payload.actionType){
		case "REGISTER":
			RecruitStore.setIsLogin(payload.value);
			RecruitStore.emitIsLoginChange();
			break;		
		default:
	}
})
module.exports=RecruitStore;