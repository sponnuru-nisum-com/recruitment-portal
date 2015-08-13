var Dob=React.createClass({displayName: "Dob",
  	getInitialState:function(){
	   return{
	    dates:["dd"],
	    months:["mm"],
	    years:["yyyy"]
	   }
  	},
	 componentWillMount:function(){
	   for(i=1;i<=31;i++){
	    this.state.dates.push(i);
	   }
	   for(i=1;i<=12;i++){
	    this.state.months.push(i);
	   }
	   for(i=1960;i<=new Date().getFullYear();i++){
	    this.state.years.push(i);
	   }
	 },
	render:function(){
		console.log("swathi");
		return(
			React.createElement("div", {className: "row form-group"}, 
				React.createElement("label", {className: "col-xs-2 col-sm-2 col-md-2 col-lg-2"}, this.props.label+":"), 
				React.createElement("div", {className: "col-xs-4 col-sm-4 col-md-4 col-lg-4"}, 
					React.createElement(SelectOption, {id: "date", date: this.state.dates}), 
					React.createElement(SelectOption, {id: "month", date: this.state.months}), 
					React.createElement(SelectOption, {id: "year", date: this.state.years})
				)
			)
		)
	}
});