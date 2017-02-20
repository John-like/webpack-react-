var React=require('react');
var ReactDOM=require('react-dom');
var common=require('./component.js')
var Sameheader=require('./SameHeader.js');
var ComponentGetMoneyItemTwo=require('./ComponentGetMoneyItemTwo.js');

var ComponentGetMoneyItem=React.createClass({
	GetMoneyItem2:function(){
		Sameheader.prototype.CSS.title = "提现";
		common.unmountComponentByNode(['banner','list','header']);
		common.mountComponentByNode({'header':Sameheader,'banner':ComponentGetMoneyItemTwo});
		steps++;
	},
	render:function(){
		var img1="img/Getmoney-2.png";
		var img2="img/Getmoney-3.png";
		var img3="img/Getmoney-4.png";
		var _css=this.CSS;
		return(
			<div style={_css.divs}>
				<div style={_css.div}>
					<span style={_css.span1}>金额(元)</span>
					<span style={_css.span2}>请输入金额</span>
				</div>
				<div style={_css.div1}>
					<img src={img1} style={_css.img}/>
					<img src={img2} style={_css.img}/>
				</div>
				<div style={_css.div2}>
					<span>微信支付</span>
					<span>支付宝支付</span>
				</div>
				<div style={_css.div4}>
					<div style={_css.div41}>
						<img src={img3} style={_css.img41}/>
					</div>
					<div style={_css.div42}></div>
				</div>
				<div style={_css.div3} onTouchStart={this.GetMoneyItem2}>
					下一步
				</div>
			</div>
		)
	}
})
ComponentGetMoneyItem.prototype.CSS={
	divs:{
		width:"100%",
		position:"absolute",
		left:"0",
		top:"0.82rem",
		bottom:"0.9rem",
		backgroundColor:"#fff"
	},
	div:{
		width:"6.9rem",
		height:"0.97rem",
		borderBottom:"1px solid rgb(215,215,215)",
		display:"flex",
		justifyContent:"flex-start",
		alignItems:"center",
		marginLeft:"0.3rem",
		fontSize:"0.35rem",
	},
	span1:{
		color:"black",
		fontWeight:"bold",
		marginLeft:"0.2rem",
	},
	span2:{
		color:"rgb(153,153,153)",
		marginLeft:"0.4rem",
	},
	div1:{
		width:"6.9rem",
		height:"0.94rem",
		display:"flex",
		justifyContent:"space-around",
		alignItems:"center",
		marginTop:"0.65rem",
		marginLeft:"0.3rem",
		fontSize:"0.35rem"
		
	},
	div2:{
		width:"6.9rem",
		height:"0.94rem",
		display:"flex",
		justifyContent:"space-around",
		alignItems:"center",
		marginLeft:"0.3rem",
		fontSize:"0.35rem"
		
	},
	img:{
		width:"0.94rem",
		height:"0.94rem"
	},
	div4:{
		width:"6.9rem",
		height:"0.94rem",
		display:"flex",
		justifyContent:"space-around",
		alignItems:"center",
		marginLeft:"0.3rem",
		fontSize:"0.35rem"
	},
	div41:{
		width:"0.46rem",
		height:"0.46rem",
		
	},
	img41:{
		width:"0.53rem",
		height:"0.53rem",
	},
	div42:{
		width:"0.46rem",
		height:"0.46rem",
		borderRadius:"100%",
		border:"1px solid #acacac"
	},
	div3:{
		width:"6.9rem",
		height:"0.6rem",
		marginTop:"0.6rem",
		display:"flex",
		justifyContent:"center",
		alignItems:"center",
		fontSize:"0.3rem",
		marginLeft:"0.3rem",
		backgroundColor:"rgb(255,218,68)"
	}
	
	
}
module.exports=ComponentGetMoneyItem;