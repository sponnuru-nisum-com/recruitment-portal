var React=require('react');
var Header=React.createClass({
	render:function(){
		return(
			<header id="header">
				<div className="row header">
					<div className="col-lg-1">
						<div id="logo"></div>
					</div>
					<div className="col-lg-6 recruit">Recruitment Portal</div>
				</div>
				<div className="welcome-text container-fluid">
					<div className="container">Welcome To OSI Technologies</div>
				</div>
			</header>
		)
	}
});
module.exports=Header;