var React=require('react');

var Myget=React.createClass({
	
	render:function(){
		var img1="img/Myget-1.png";
		var img2="img/Myget-2.png";
		var img3="img/Myget-3.png";
		var _css=this.CSS;
		return(
			<div style={_css.divs}>
				<div style={_css.div1}>
					<img src={img1} style={_css.img1}/>
					<img src={img2} style={_css.img2}/>
				</div>
				<div style={_css.div2}>
					<span style={_css.span}>2314元</span>
					<img src={img3} style={_css.img3}/>
				</div>
			</div>
		)
	}
});
Myget.prototype.CSS={
	divs:{
		width:"100%",
		height:"2rem",
		backgroundColor:"rgb(255,218,68)",
	},
	div1:{
		width:"100%",
		height:"0.84rem",
		display:"flex",
		alignItems:"center",
		justifyContent:"space-between"		
	},
	div2:{
		width:"100%",
		height:"1.18rem",
		display:"flex",
		justifyContent:"space-between",	
		fontSize:"0.5rem",
		alignItems:"center"
	},
	img1:{		
		width:"1.8rem",
		height:"0.5rem",
		marginLeft:"0.35rem"
	},
	img2:{	
		width:"2.5rem",
		height:"0.5rem",
		marginRight:"0.25rem"
	},
	img3:{
		
		width:"1.4rem",
		height:"0.55rem",
		marginRight:"0.25rem"
	},
	span:{
		display:"block",
		marginLeft:"0.35rem"
	}
	
}
module.exports=Myget;
