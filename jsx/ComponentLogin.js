var React=require('react');
var ReactDOM=require('react-dom');
var common=require('./component.js')
var ComponentRegister=require('./ComponentRegister.js');
var ComponentHeader=require('./ComponentHeader.js');
var ComponentBanner=require('./ComponentBanner.js');
var ComponentList=require('./ComponentList.js');
var ComponentMyget=require('./ComponentMyget.js');
var ComponentLogin=React.createClass({
	getDefaultProps:function(){
		return{source:"11"}
	},
	getInitialState:function(){
		return{type:"text",src:"img/yanjing.png"}
	},
	setType:function(event){
		var _type=event.target.getAttribute('title');
		if(_type=="open"){
			event.target.setAttribute('title','close');
			this.setState({type:"password",src:"img/yanjing2.png"});
		}else{
			event.target.setAttribute('title','open');
			this.setState({type:"text"});
			this.setState({type:"text",src:"img/yanjing.png"})
		}
	},
	back:function(){	
		 common.unmountComponentByNode(['banner','list','header']);
		 common.mountComponentByNode({'header':ComponentRegister});	
	},
	handTouch:function(){
		var yanzheng=window.localStorage.getItem("Yanzheng");
		var Tel=window.localStorage.getItem("Tel");
		var Inputvalue=document.getElementById('input').value;
		var Psw=document.getElementById('psw').value;
		console.log(yanzheng)
		console.log(Tel)
		console.log(Inputvalue)
		console.log(Psw)
		if(yanzheng==Psw&&Tel==Inputvalue){
			 common.unmountComponentByNode(['banner','list','header']);
		 	common.mountComponentByNode({'header':ComponentMyget,'banner':ComponentBanner,'list':ComponentList});			
		}else{
			alert('密码或者账号不正确')
		}
	},
	render:function(){
		var img1="img/Register-1.png";
		var img2="img/radio.png";
		var img3="img/yanjing2.png";
		var img4=this.state.src;
		var _text=this.state.type
		console.log(_text)
		var Tel=window.localStorage.getItem("Tel");
			tel1=Tel.substring(0,3);
			tel2=Tel.substring(7,11);
		var _css=this.CSS;
		return(
			<div>
				<div style={_css.divs}>
					<img src={img1} style={_css.img} onTouchStart={this.back}/>
					  <span style={_css.span}>登入</span> 
				</div>	
				<div style={_css.div2}>
					<input type="text" style={_css.div2input} placeholder="手机/邮箱/用户名" id="input"/>
				</div>
				<div style={_css.div1}>
					<input type={_text} style={_css.div1input} placeholder="登入密码" id="psw"/>
					<div style={_css.div1div}>
					
						<img src={img4} style={_css.img4} onTouchStart={this.setType} title="open"/>
					</div>
				</div>		
				<div style={_css.div3}>
					<div style={_css.next} onTouchStart={this.handTouch}>登入</div>
				</div>
				<div style={_css.div4}>
					<span style={_css.div4span1}>注册及视为同意</span>
					<span style={_css.div4span2}>平台服务协议</span>
				</div>
			</div>	
		)	
	}	
})
ComponentLogin.prototype.CSS={
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
	div2:{
		width:"100%",
		height:"0.7rem",
		display:"flex",
		justifyContent:"center",
		backgroundColor:"rgb(238,238,238)",
		marginTop:"0.4rem"
	},
	div2input:{
		width:"6.9rem",
		height:"100%",
		backgrounColor:"#fff",
		fontSize:"0.3rem",
		color:"#acacac",
		outline:"none",
		border:"none",
	},
	div1:{
		width:"100%",
		height:"0.7rem",
		display:"flex",
		justifyContent:"center",
		backgroundColor:"rgb(238,238,238)",
		marginTop:"0.4rem"
	},
	div1input:{
		width:"5.5rem",
		height:"100%",
		backgrounColor:"#fff",
		fontSize:"0.3rem",
		color:"#acacac",
		outline:"none",
		border:"none",
	},
	div1div:{
		width:"1.4rem",
		height:"100%",
		backgroundColor:"#fff",
		display:"flex",
		jsutifyContern:"center",
		alignItems:"center"
	},
	img3:{
		width:"0.5rem",
		height:"0.3rem"
	},
	img4:{
		width:"0.5rem",
		height:"0.3rem",
		display:"block",
		marginLeft:"0.2rem",
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
module.exports=ComponentLogin
