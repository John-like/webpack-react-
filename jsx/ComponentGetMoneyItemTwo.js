var React=require('react');
var ReactDOM=require('react-dom');


var ComponentGetMoneyItemTwo=React.createClass({
	finish:function(){
		var common=require('./component.js');
		var Sameheader=require('./SameHeader.js');
		var ComponentMy=require('./ComponentMy.js');
		alert('提现成功');
		Sameheader.prototype.CSS.title = "提现";
		common.unmountComponentByNode(['banner','list','header']);
		common.mountComponentByNode({'header':Sameheader,'banner':ComponentMy});
	},
	render:function(){
		var img="img/Getmoney-5.png"
		var _css=this.CSS;
		return(
			<div style={_css.divs}>
				<div style={_css.div}>
					<img src={img} style={_css.img}/>
				</div>
				<div style={_css.div1}>
					<span style={_css.span1}>提现申请已交出</span>
				</div>
				<div style={_css.div2}>
					<span style={_css.span2}>客服通过微信添加你好友,进行人工转账</span>
				</div>
				<div style={_css.div3}>
					<span style={_css.div3span1}>微信号</span>
					<span style={_css.div3span2}>1212312</span>
				</div>
				<div style={_css.div4}>
					<span style={_css.div4span1}>提取金额</span>
					<span style={_css.div4span2}>500</span>
				</div>
				<div style={_css.div5} onTouchStart={this.finish}>
					完成
				</div>
			</div>
		)
	}
})
ComponentGetMoneyItemTwo.prototype.CSS={
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
		height:"1.67rem",
		marginTop:"0.55rem",
		display:"flex",
		justifyContent:"center",
		alignItems:"center"
	},
	img:{
		width:"1.67rem",
		height:"1.67rem"
	},
	div1:{
		width:"100%",
		height:"0.47rem",
		marginTop:"0.1rem",
		display:"flex",
		justifyContent:"center",
		alignItems:"center"
	},
	span1:{
		fontSize:"0.35rem",
		fontWeight:"bold",	
	},
	div2:{
		width:"100%",
		height:"0.4rem",
		marginTop:"0.1rem",
		display:"flex",
		justifyContent:"center",
		alignItems:"center"
	},
	span2:{
		fontSize:"0.25rem",
		fontWeight:"bold",	
		color:"rgb(255,68,67)"
	},
	div3:{
		width:"6.9rem",
		height:"0.6rem",
		marginTop:"0.3rem",
		display:"flex",
		justifyContent:"center",
		alignItems:"center",
		fontSize:"0.3rem",
		borderBottom:"1px solid rgb(220,220,220)",
		marginLeft:"0.3rem"
	},
	div4:{
		width:"6.9rem",
		height:"0.6rem",
		display:"flex",
		justifyContent:"center",
		alignItems:"center",
		fontSize:"0.35rem",	
		marginLeft:"0.3rem"
	},
	div3span1:{
		width:"50%",
		hieght:"100%",
		color:"rgb(102,102,102)"
	},
	div3span2:{
		width:"50%",
		hieght:"100%",
		textAlign:"right",
	},
	div4span1:{
		width:"50%",
		hieght:"100%",
		color:"rgb(102,102,102)"
	},
	div4span2:{
		width:"50%",
		hieght:"100%",
		textAlign:"right",
	},
	div5:{
		width:"6.9rem",
		height:"0.6rem",
		marginTop:"0.6rem",
		display:"flex",
		justifyContent:"center",
		alignItems:"center",
		fontSize:"0.3rem",
		marginLeft:"0.3rem",
		backgroundColor:"rgb(255,218,68)"
	},
}
module.exports=ComponentGetMoneyItemTwo;