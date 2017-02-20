var React=require('react');
var ReactDOM=require('react-dom');
var common=require('./component.js')
var ComponentRegister=require('./ComponentRegister.js');
var ComponentHeader=require('./ComponentHeader.js');
var ComponentBanner=require('./ComponentBanner.js');
var ComponentList=require('./ComponentList.js');
var ComponentMyget=require('./ComponentMyget.js');
var ComponentRegisterItem=React.createClass({
	back:function(){	
		var Tel=window.localStorage.getItem("Tel");
		if(Tel!=""){
			common.unmountComponentByNode(['banner','list','header']);
		 common.mountComponentByNode({'header':ComponentMyget,'banner':ComponentBanner,'list':ComponentList});
		}else{
			common.unmountComponentByNode(['banner','list','header']);
		 	common.mountComponentByNode({'header':ComponentRegister});	
		}
		 
	},
	handTouch:function(){
		var yanzheng=window.localStorage.getItem("Yanzheng");
		var Inputvalue=document.getElementById('input').value;
		if(yanzheng==Inputvalue){
			 common.unmountComponentByNode(['banner','list','header']);
		 	common.mountComponentByNode({'header':ComponentMyget,'banner':ComponentBanner,'list':ComponentList});			
		}else{
			alert('验证码不对')
		}
	},
	render:function(){
		var img1="img/Register-1.png";
		var img2="img/radio.png";
		var Tel=window.localStorage.getItem("Tel");
			tel1=Tel.substring(0,3);
			tel2=Tel.substring(7,11);
		var _css=this.CSS;
		return(
			<div>
				<div style={_css.divs}>
					<img src={img1} style={_css.img} onTouchStart={this.back}/>
					  <span style={_css.span}>注册</span> 
				</div>	
				<div style={_css.div1}>
				请输入手机号码<span style={_css.div1span}>{tel1+"####"+tel2}</span>验证
				</div>
				<div style={_css.div2}>
					<input style={_css.div2input} placeholder="验证码" id="input"/>
				</div>				
				<div style={_css.div3}>
					<div style={_css.next} onTouchStart={this.handTouch}>完成</div>
				</div>
				<div style={_css.div4}>
					<span style={_css.div4span1}>注册及视为同意</span>
					<span style={_css.div4span2}>平台服务协议</span>
				</div>
			</div>	
		)	
	}	
})
ComponentRegisterItem.prototype.CSS={
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
	div1:{
		width:"100%",
		height:"1rem",
		display:"flex",
		justifyContent:"center",
		alignItems:"center",
		fontSize:"0.3rem"
	},
	div1span:{
		color:"#acacac"
	},
	span:{
		color:"rgb(51,51,51)"
	},
	div2:{
		width:"100%",
		height:"0.7rem",
		display:"flex",
		justifyContent:"center",
		backgroundColor:"rgb(238,238,238)"
	},
	div2input:{
		width:"80%",
		height:"100%",
		backgrounColor:"#fff",
		fontSize:"0.3rem",
		color:"#acacac",
		outline:"none",
		border:"none",
	},
	div3:{
		width:"100%",
		height:"1.7rem",
		backgroundColor:"rgb(238,238,238)",
		display:"flex",
		justifyContent:"center",
		alignItems:"center"
	},
	next:{
		width:"90%",
		height:"0.8rem",
		lineHeight:"0.8rem",
		fontSize:"0.35rem",
		textAlign:"center",
		backgroundColor:"rgb(255,218,68)",
	},
	div4:{
		width:"100%",
		height:"1rem",
		display:"flex"
	},
	div4span1:{
		color:"#acacac",
		fontSize:"0.3rem",
		display:"block",
		marginLeft:"0.5rem"
	},
	div4span2:{
		color:"black",
		fontSize:"0.3rem",
		display:"block",
	}
}	
module.exports=ComponentRegisterItem
