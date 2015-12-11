var React=require('react');
var Header=require('./common/header');
var MainSection=require('./mainContainer');
var Recruitment=React.createClass({
	render:function(){
		return(
			<div>
				<Header/>
				<MainSection/>
			</div>
		)
	}
});
module.exports=Recruitment;