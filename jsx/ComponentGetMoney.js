var React=require('react');
var ReactDOM=require('react-dom');
var common=require('./component.js')
var Sameheader=require('./SameHeader.js');
var ComponentGetMoneyItem=require('./ComponentGetMoneyItem.js');

var ComponentGetMoney=React.createClass({
	GetMoneyItem:function(){
		Sameheader.prototype.CSS.title = "提现";
		common.unmountComponentByNode(['banner','list','header']);
		common.mountComponentByNode({'header':Sameheader,'banner':ComponentGetMoneyItem});
		steps++;
	},
	render:function(){
		var _css=this.CSS;
		var img="img/Getmoney-1.png"
		return(
			<div style={_css.divs}>
				<div style={_css.div}>
					<img src={img} style={_css.img}/>
				</div>
				<div style={_css.div1}>
					<span>$12353</span>
				</div>
				<div style={_css.div2}>
					<span>最低可以提现金100</span>
				</div>
				<div style={_css.div3} onTouchStart={this.GetMoneyItem}>
					提取现金
				</div>
				
			</div>
		)
	}
})
ComponentGetMoney.prototype.CSS={
	divs:{
		width:"100%",
		position:"absolute",
		left:"0",
		top:"0.82rem",
		bottom:"0.9rem",
		backgroundColor:"#fff"
	},
	div:{
		width:"100%",
		height:"1.9rem",
		display:"flex",
		justifyContent:"center",
		alignItems:"center",
		marginTop:"0.7rem"
	},
	img:{
		width:"1.83rem",
		height:"100%"
	},
	div1:{
		width:"100%",
		height:"0.65rem",
		display:"flex",
		justifyContent:"center",
		alignItems:"center",
		fontSize:"0.35rem",
		color:"black",
		fontWeight:"bold"
	},
	div2:{
		width:"100%",
		height:"0.65rem",
		display:"flex",
		justifyContent:"center",
		alignItems:"center",
		fontSize:"0.3rem",
		color:"rgb(103,103,103)"
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
module.exports=ComponentGetMoney;