var React=require('react');
var ComponentLayout=React.createClass({
	render:function(){
		return(
			<div>
			   <div id="header"></div>
			   <div id="search"></div>
			   <div id="banner"></div>
			   <div id="list"></div>
			   <div id="footer"></div>
			</div>
		);
	}
});
module.exports=ComponentLayout;