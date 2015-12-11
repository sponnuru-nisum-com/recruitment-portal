var AppDispatcher=require("./../dispatcher/AppDispatcher");
var RecruitActions={
	register:function(value){
		AppDispatcher.dispatch({
			actionType:"REGISTER",
			value:value
		});
	}
}
module.exports=RecruitActions;