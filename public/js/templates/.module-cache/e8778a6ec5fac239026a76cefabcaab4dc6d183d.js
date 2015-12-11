var React=require('react');
var Header=require('./common/header');
var MainSection=require('./section/mainContainer');
var Recruitment=React.createClass({displayName: "Recruitment",
	render:function(){
		return(
			React.createElement("div", null, 
				React.createElement(Header, null), 
				React.createElement(MainSection, null)
			)
		)
	}
});
module.exports=Recruitment;