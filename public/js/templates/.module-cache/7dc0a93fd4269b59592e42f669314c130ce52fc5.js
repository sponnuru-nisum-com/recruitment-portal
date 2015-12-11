var React=require('react');
var Header=require('./common/header');
var MainSection=require('./mainContainer');
var Recruitment=React.createClass({displayName: "Recruitment",
	render:function(){
		return(
			React.createElement("div", {className: "row"}, 
				React.createElement(Header, null), 
				React.createElement(MainSection, null)
			)
		)
	}
});
module.exports=Recruitment;