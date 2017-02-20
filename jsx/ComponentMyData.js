var React=require('react');
var ReactDOM=require('react-dom');

var Sameheader=require('./SameHeader.js');

var ComponentMyData=React.createClass({
	address:function(){
		var oDiv4=document.getElementById('div4');
		var oDiv5=document.getElementById('div5');
		if(oDiv4.style.display=="none"||oDiv5.style.display=="none"){
			oDiv4.style.display="block";
			oDiv5.style.display="block";
		}else{
			oDiv4.style.display="none";
			oDiv5.style.display="none";
		}	
	},
	address2:function(){
		var oDiv4=document.getElementById('div4');
		var oDiv5=document.getElementById('div5');
		if(oDiv4.style.display=="none"||oDiv5.style.display=="none"){
			oDiv4.style.display="block";
			oDiv5.style.display="block";
		}else{
			oDiv4.style.display="none";
			oDiv5.style.display="none";
		}
	},
	finish:function(){
		var oDiv4=document.getElementById('div4');
		var oDiv5=document.getElementById('div5');			
		var height=$('#div5').scrollTop();
		var width=document.documentElement.clientWidth
		height=750/width*height;
		var arr=["北京","上海","南京","芜湖","浙江","南昌","武汉","昆明","厦门","宝山","开封","洛阳","阜阳","哈尔冰","吉林","内蒙","青海"];
		var arr2=[];
		var str=''
		for(var i=0;i<arr.length;i++){
			arr2.push(i*height)
		}
		
		console.log(arr2);
		console.log(height)
	},
	sex:function(){
		alert(1)
	},
	render:function(){
		var _css=this.CSS;
		var arr=["北京","上海","南京","芜湖","浙江","南昌","武汉","昆明","厦门","宝山","开封","洛阳","阜阳","哈尔冰","吉林","内蒙","青海"];
		var temp=[];
		for(var i=0;i<arr.length;i++){
			temp.push(
				<div style={_css.div52} key={i}>{arr[i]}</div>
			)
		};
		console.log(temp);
		
		return(
			<div style={_css.divs}>
				<div style={_css.div}>
					<span style={_css.span}>完善个人资料,</span>
					<span style={_css.span1}>+2元现金奖励</span>			
				</div>
				<div style={_css.div1}>
					<span style={_css.span2} onTouchStart={this.address}>选择居住居住地</span>
					<span style={_css.span3}>&gt;</span>
				</div>
				<div style={_css.div1}>
					<span style={_css.span2}>选择居住街道</span>
					<span style={_css.span3}>&gt;</span>
				</div>
				<div style={_css.div1}>
					<span style={_css.span2}>选择工作地</span>
					<span style={_css.span3}>&gt;</span>
				</div>
				<div style={_css.div1}>
					<span style={_css.span2}>选择工作地街道</span>
					<span style={_css.span3}>&gt;</span>
				</div>
				<div style={_css.div1}>
					<span style={_css.span2}>选择生日</span>
					<span style={_css.span3}>&gt;</span>
				</div>
				<div style={_css.div1}>
					<span style={_css.span2}>选择职业</span>
					<span style={_css.span3}>&gt;</span>
				</div>			
				<div style={_css.div2}>
					<b style={_css.b}>性别</b>
					<span style={_css.span4} onTouchStart={this.sex}>男</span>
					<span style={_css.span5} onTouchStart={this.sex}>女</span>
				</div>
				<div style={_css.div2}>
					<b style={_css.b}>婚姻</b>
					<span style={_css.span4}>未婚</span>
					<span style={_css.span5}>已婚</span>
					<span style={_css.span5}>有小孩</span>
				</div>
				<div>
					<div style={_css.div3}>完成</div>
				</div>
				<div style={_css.div4} id="div4"></div>
				<div style={_css.div5} id="div5">
					<div style={_css.div51}>
						<span onTouchStart={this.address2}>取消</span>
						<span onTouchStart={this.finish}>完成</span>
					</div>
					{temp}
				</div>
			</div>
		)
	}
})
ComponentMyData.prototype.CSS={
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
		height:"0.76rem",
		display:"flex",
		justifyContent:"flex-start",
		alignItems:"center",
		fontSize:"0.3rem",
		backgroundColor:"rgb(238,238,238)"
	},
	span:{
		marginLeft:"0.3rem"
	},
	span1:{
		color:"red",
		display:"block",
		marginLeft:"0.1rem"
	},
	div1:{
		width:"100%",
		height:"0.78rem",
		borderBottom:"1px solid rgb(220,220,220)",
		display:"flex",
		justifyContent:"space-between",
		alignItems:"center"
	},
	span2:{
		fontSize:"0.27rem",
		marginLeft:"0.3rem"
	},
	span3:{
		fontSize:"0.4rem",
		display:"block",
		marginRight:"0.3rem"
	},
	div2:{
		width:"100%",
		height:"0.45rem",
		display:"flex",
		justifyContent:"flex-start",
		alignItems:"center",
		fontSize:"0.3rem",
		marginTop:"0.55rem",
	},
	span4:{
		width:"1.15rem",
		height:"100%",
		backgroundColor:"rgb(255,218,68)",
		marginLeft:"0.24rem",
		textAlign:"center",
		lineHeight:"0.45rem",
	},
	span5:{
		width:"1.15rem",
		height:"100%",
		backgroundColor:"rgb(245,245,245)",
		marginLeft:"0.2rem",
		textAlign:"center",
		lineHeight:"0.45rem",
	},
	b:{
		width:"1.15rem",
		height:"100%",
		marginLeft:"0.32rem",
		color:"#aaaaaa"
	},
	div3:{
		width:"6.9rem",
		height:"0.6rem",
		backgroundColor:"rgb(255,218,68)",
		display:"flex",
		justifyContent:"center",
		alignItems:"center",
		fontSize:"0.35rem",
		marginTop:"0.68rem",
		marginLeft:"0.3rem",
	},
	div4:{
		width:"100%",
		position:"absolute",
		border:"1px solid red",
		left:"0",
		bottom:"-0.9rem",
		top:"-0.82rem",
		zIndex:"2",
		backgroundColor:"black",
		opacity:"0.4",
		display:"none",
	},
	div5:{
		width:"100%",
		height:"5rem",
		position:"absolute",
		left:"0",
		bottom:"-0.9rem",
		backgroundColor:"#fff",
		zIndex:"4",
		overflow:"scroll",
		display:"none",
	},
	div51:{
		width:"100%",
		height:"0.8rem",
		backgroundColor:"#fff",
		display:"flex",
		justifyContent:"space-around",
		alignItems:"center",
		backgroundColor:"rgb(238,238,238)",
		fontSize:"0.3rem",
		position:"fixed",
		left:"0",
		bottom:"5rem",
	},
	div52:{
		width:"100%",
		height:"1rem",
		borderBottom:"1px solid rgb(238,238,238)",
		display:"flex",
		justifyContent:"center",
		alignItems:"center",
		fontSize:"0.3rem"
	},
	div511:{
		backgroundColor:"rgb(255,218,68)",
		width:"100%",
		height:"0.8rem",
		display:"flex",
		justifyContent:"center",
		alignItems:"center",
		fontSize:"0.3rem",
		position:"fixed",
		left:"0",
		bottom:"2.4rem",
		opacity:"0.5"
		
	}
	
}
module.exports=ComponentMyData;