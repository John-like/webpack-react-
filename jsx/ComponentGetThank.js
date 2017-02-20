var React=require('react');
var ReactDOM=require('react-dom');
	var common=require('./component.js');
var ComponentGetThank=React.createClass({
	back:function(){	
	var ComponentHeader=require('./ComponentHeader.js');
	var ComponentBanner=require('./ComponentBanner.js');
	var ComponentList=require('./ComponentList.js');
	var ComponentFooter=require('./ComponentFooter.js');
	var ComponentHitEgg=require('./ComponentHitEgg.js')
		 common.unmountComponentByNode(['banner','list','header']);
		common.mountComponentByNode({'header':ComponentHitEgg});
	},
	render:function(){
		var img1="img/Register-1.png";
		var img2="img/radio.png";
		var _css=this.CSS;
		return(
			<div>
				<div style={_css.divs}>
					<img src={img1} style={_css.img} onTouchStart={this.back}/>
					  <span style={_css.span}>每日砸金蛋</span> 
				</div>
				<div style={_css.div}>
					<div style={_css.div1}>谢谢参与</div>
					<div style={_css.div2}>来日再战</div>
					<div style={_css.egg}>
						<img src="img/Hitegg-2.png" style={_css.jindan}/>
						
					</div>
				</div>
				
			</div>
			
		)
	}
})
ComponentGetThank.prototype.CSS={
	divs:{
		width:"100%",
		height:"0.82rem",
		backgroundColor:"rgb(255,218,68)",
		display:"flex",
		justifyContent:"center",
		alignItems:"center",
		fontSize:"0.5rem"
	},
	img:{
		position:"absolute",
		left:"0.3rem",
		top:"0.2rem",
		width:"0.4rem",
		height:"0.4rem"
	},
	span:{
		color:"rgb(51,51,51)"
	},
	div:{
		width:"100%",
		position:"absolute",
		top:"0.82rem",
		bottom:"0",
		backgroundColor:"rgb(233,71,56)"
	},
	div1:{
		width:"100%",
		height:"0.92rem",
		textAlign:"center",
		lineHeight:"0.92rem",
		fontSize:"0.7rem",
		color:"rgb(255,204,0)",
		marginTop:"0.65rem"
	},
	div2:{
		width:"100%",
		height:"0.92rem",
		textAlign:"center",
		lineHeight:"0.92rem",
		fontSize:"0.5rem",
		color:"rgb(255,204,0)",
	
	},
	egg:{
		width:"100%",
		height:"3rem",
		display:"flex",
		justifyContent:"center",
		alignItems:"center",
		marginTop:"0.5rem",
	},
	jindan:{
		width:"4.4rem",
		height:"100%"
	},

	
}
module.exports=ComponentGetThank