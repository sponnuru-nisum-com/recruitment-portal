var React=require("React");
var ReactDom=require("react-dom");
var Recruitment=require("./templates/welcome");
ReactDom.render(
	React.createElement(Recruitment),document.getElementById("main")
);