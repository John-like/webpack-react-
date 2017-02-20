var React=require('react');
var ReactDOM=require('react-dom');
var ComponentShareFriend=React.createClass({
	back:function(){
		var common=require('./component.js');
		var ComponentMyData=require('./ComponentMyData.js');
		var ComponentList=require('./ComponentList.js');
		var ComponentMygetMoney=require('./ComponentMygetMoney.js');
		var SameHeader=require('./SameHeader.js')
		SameHeader.prototype.CSS.title="分享赚钱"
		common.unmountComponentByNode(['banner','list','header']);
		common.mountComponentByNode({'header':SameHeader,'banner':ComponentMygetMoney});
	},
	pan:function(){
		var common=require('./component.js');	
		var ComponentList=require('./ComponentList.js');
		var ComponentShareFriendItem=require('./ComponentShareFriendItem.js')
		var SameHeader=require('./SameHeader.js')
		common.unmountComponentByNode(['banner','list','header']);
		common.mountComponentByNode({'banner':ComponentShareFriendItem});
	},
	
	render:function(){
		var img1="img/Register-1.png";
		var img2="img/radio.png";	
		var img3="img/Big-pic.png"
		var _css=this.CSS;
		return(
			<div>
				<div style={_css.divs}>
					<img src={img1} style={_css.img} onTouchStart={this.back}/>
					  <span style={_css.span}>{_css.title}</span> 
				</div>
				<div style={_css.div}>
					<img style={_css.img3} src={img3}/>
				</div>
				<div style={_css.div1} onTouchStart={this.pan}>
					分享赚取现金
				</div>
			
				
						
			</div>	
		)	
	}	
})
ComponentShareFriend.prototype.CSS={
	title:"分享赚钱",
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
		height:"9.44rem"
	},
	img3:{
		width:"100%",
		height:"100%",
	},
	div1:{
		width:"6.9rem",
		height:"0.8rem",
		marginLeft:"0.3rem",
		backgroundColor:"rgb(255,218,68)",
		display:"flex",
		justifyContent:"center",
		alignItems:"center",
		fontSize:"0.3rem",
		marginTop:"0.3rem",
	},
	pan:{
		width:"100%",
		position:"absolute",
		top:"0",
		bottom:"0",
		backgroundColor:"black",
		opacity:"0.6",
	},
	pan0:{
		width:"6.4rem",
		height:"1.4rem",
		display:"flex",
		position:"absolute",
		top:"3.1rem",
		bottom:"0",
		justifyContent:"space-around",
		alignItems:"center",
		marginLeft:"0.55rem",
		
	},
	pan00:{
		width:"6.4rem",
		height:"1.4rem",
		display:"flex",
		position:"absolute",
		top:"5.1rem",
		bottom:"0",
		justifyContent:"space-around",
		alignItems:"center",
		marginLeft:"0.55rem",
		
	},
	pan000:{
		width:"6.9rem",
		height:"0.8rem",
		display:"flex",
		position:"absolute",
		top:"7.6rem",
		bottom:"0",
		justifyContent:"center",
		alignItems:"center",
		marginLeft:"0.3rem",
		fontSize:"0.3rem",
		backgroundColor:"rgb(255,198,0)",
		fontWeight:"bold",
	},
	pan1:{
		width:"2rem",
		height:"100%",
		display:"flex",
		justifyContent:"center",
		flexDirection:"column",
		textAlign:"center",
	},
	pan11:{
		width:"0.9rem",
		height:"0.9rem",
	},
	sameimg:{
		width:"100%",
		height:"100%",
		borderRadius:"100%",
		zIndex:"5",
		opacity:"1",
		marginLeft:"0.5rem"
	},
	pan12:{
		width:"2rem",
		height:"0.5rem",
		fontSize:"0.3rem",
		color:"#fff",
		marginTop:"0.1rem",
		lineHeifht:"0.5rem",
		fontWeight:"bold"
	}
}	
module.exports=ComponentShareFriend

