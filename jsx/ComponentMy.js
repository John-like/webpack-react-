var React=require('react');
var common=require('./component.js')
var ReactDOM=require('react-dom');

var ComponentList=require('./ComponentList.js');
var ComponentGetMoney=require('./ComponentGetMoney.js');
var ComponentCheckDetail=require('./ComponentCheckDetail.js');
var ComponentDidtask=require('./ComponentDidtask.js');
var ComponentMyData=require('./ComponentMyData.js');
var Sameheader=require('./SameHeader.js');


var ComponentMy=React.createClass({
	handData:function(){
		Sameheader.prototype.CSS.title = "个人资料";
		common.unmountComponentByNode(['banner','list','header']);
		common.mountComponentByNode({'header':Sameheader,'banner':ComponentMyData});
	},
	getmoney:function(){
		Sameheader.prototype.CSS.title = "提现";
		common.unmountComponentByNode(['banner','list','header']);
		common.mountComponentByNode({'header':Sameheader,'banner':ComponentGetMoney});
	},
	checkdetail:function(){
		Sameheader.prototype.CSS.title = "我赚的钱明细";
		common.unmountComponentByNode(['banner','list','header']);
		common.mountComponentByNode({'header':Sameheader,'banner':ComponentCheckDetail});
	},
	Didtask:function(){
		Sameheader.prototype.CSS.title = "做过的任务";
		common.unmountComponentByNode(['banner','list','header']);
		common.mountComponentByNode({'header':Sameheader,'banner':ComponentDidtask});
	},
	render:function(){
		var _css=this.CSS;
		
		return(
			<div>
				<div style={_css.div}>
					<img src="img/img0.png" style={_css.img}/>
					<div style={_css.divword}>
						<p style={_css.p1}>绿野堂</p>
						<p style={_css.p2}><span onTouchStart={this.handData}>完善个人资料</span>,<span style={_css.span2}>+2元现金奖励</span>
						</p>
					</div>
				</div>
				<div style={_css.div1}>
					<div style={_css.div1left}>
						<p style={_css.div1p1}>我转的钱</p>
						<p style={_css.div1p2}>12345</p>
						<p style={_css.div1p3} onTouchStart={this.getmoney}>我要提现 &lt;</p>
					</div>
					<div style={_css.div1left}>
						<p style={_css.div1p1}>今日收益</p>
						<p style={_css.div1p2}>1455</p>
						<p style={_css.div1p3} onTouchStart={this.checkdetail}>查看明细 &lt;</p>
					</div>
				</div>
				<div style={_css.div2}>
					<img src="img/My-1.png" style={_css.div2img}/>
					<span style={_css.div2span} onTouchStart={this.Didtask}>做过的任务</span>
				</div>
				<div style={_css.div2}>
					<img src="img/My-2.png" style={_css.div2img}/>
					<span style={_css.div2span}>客户服务与帮助</span>
				</div>
				<div style={_css.div2}>
					<img src="img/My-3.png" style={_css.div2img}/>
					<span style={_css.div2span}>设置</span>
				</div>
			</div>
			
		)
	}
	
});

ComponentMy.prototype.CSS={
	div:{
		width:"100%",
		height:"1.95rem",
		display:"flex",
		justifyContent:"flex-start",
		alignItems:"center",
		backgroundColor:"#fff",
	},
	img:{
		width:"1.07rem",
		height:"1.05rem",
		marginLeft:"0.35rem"
	},
	divword:{
		width:"5rem",
		height:"1.05rem",
		fontSize:"0.35rem",
		marginLeft:"0.2rem"
	},
	p1:{
		fontSize:"0.4rem"
	},
	p2:{
		marginTop:"0.1rem",
		fontSize:"0.3rem",
		color:"rgb(51,51,51)",
		
	},
	span2:{
		textDecoration:"underline"
	},
	div1:{
		width:"100%",
		height:"2rem",
		backgroundColor:"rgb(255,218,68)",
		display:"flex",
		
	},
	div1left:{
		width:"50%",
		height:"100%",
		display:"felx",
		justifyContent:"center",
		alignItems:"center"
	},
	div1p1:{
		fontSize:"0.3rem",
		width:"100%",
		height:"0.5rem",
		textAlign:"center",
		lineHeight:"0.5rem"
	},
	div1p2:{
		fontSize:"0.6rem",
		width:"100%",
		height:"1rem",
		textAlign:"center",
		lineHeight:"1rem"
	},
	div1p3:{
		fontSize:"0.3rem",
		width:"100%",
		height:"0.5rem",
		textAlign:"center",
		lineHeight:"0.5rem"
	},
	div2:{
		width:"100%",
		height:"1.12rem",
		borderBottom:"1px solid #acacac",
		display:"flex",
		justifyContent:"flex-start",
		alignItems:"center",
		backgroundColor:"#fff"
	},
	div2img:{
		width:"0.35rem",
		height:"0.38rem",
		marginLeft:"0.56rem"
	},
	div2span:{
		fontSize:"0.35rem",
		display:"block",
		marginLeft:"0.2rem"
	}
	
	
};

module.exports=ComponentMy
