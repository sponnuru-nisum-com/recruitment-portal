var Dob=React.createClass({
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
		return(
			<div className="row form-group">
				<label className='col-xs-2 col-sm-2 col-md-2 col-lg-2'>{this.props.label+":"}</label>
				<div className='col-xs-4 col-sm-4 col-md-4 col-lg-4'>
					<SelectOption id="date" date={this.state.dates}/>
					<SelectOption id="month" date={this.state.months}/>
					<SelectOption id="year" date={this.state.years}/>
				</div>
			</div>
		)
	}
});