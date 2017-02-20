var React=require('react');
var ReactDOM=require('react-dom');
var common=require('./component.js');

var ComponentFooter=React.createClass({
	mixins:[common],
	render:function(){	
		var img1="img/Fotter-1.png"
		var img2="img/Fotter-2.png"
		var img3="img/Fotter-3.png"
		var img4="img/Fotter-4.png"
		var _css=this.CSS
		return(
			<div style={_css.divs}>
				<div style={_css.div}>
					<img src={img1} style={_css.img} onTouchStart={this.router} data-href="index"/>
					<span>首页</span>	
				</div>
				<div style={_css.div}>
					<img src={img2} style={_css.img} onTouchStart={this.router} data-href="myget"/>
					<span>赚钱</span>	
				</div>
				<div style={_css.div}>
					<img src={img3} style={_css.img} onTouchStart={this.router} data-href="famous"/>
					<span>榜单</span>	
				</div>
				<div style={_css.div}>
					<img src={img4} style={_css.img} onTouchStart={this.router} data-href="my"/>
					<span>我的</span>	
				</div>
			</div>			
		)
	}
})

ComponentFooter.prototype.CSS={
	divs:{
		width:"100%",
		height:"0.9rem",
		borderTop:"1px double rgb(255,218,68)",
		backgroundColor:"rgb(255,218,68)",
		position:"fixed",
		left:"0",
		bottom:"0",
		display:"flex",
	},
	div:{
		width:"25%",
		height:"100%",
		display:"flex",
		justifyContern:"center",
		alignItems:"center",
		fontSize:"0.3rem",
		flexDirection:"column"
	},
	img:{
		width:"0.6rem",
		height:"0.5rem"
	}
}
module.exports=ComponentFooter