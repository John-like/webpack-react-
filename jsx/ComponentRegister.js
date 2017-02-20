var React=require('react');
var common=require('./component.js')
var ReactDOM=require('react-dom');
var ComponentRegister=require('./ComponentRegister.js');
var ComponentHeader=require('./ComponentHeader.js');
var ComponentBanner=require('./ComponentBanner.js');
var ComponentList=require('./ComponentList.js');
var ComponentMyget=require('./ComponentMyget.js');
var ComponentRegister=React.createClass({
	getDefaultProps:function(){
		return{source:"111"}
	},
	getInitialState:function(){
		return{result:''}
	},
	handChange:function(event){
		var _text=event.target.value;
		this.setState({result:_text});	
	},
	back:function(){			
		var Tel=window.localStorage.getItem("Tel");
		if(Tel!=null){
			console.log(Tel)
			common.unmountComponentByNode(['banner','list','header']);
			common.mountComponentByNode({'header':ComponentMyget,'banner':ComponentBanner,'list':ComponentList});
		}else{
			common.unmountComponentByNode(['banner','list','header']);
		 	common.mountComponentByNode({'header':ComponentHeader,'banner':ComponentBanner,'list':ComponentList});	
		 	console.log(2)
		}
	},	
	next:function(){
		var ComponentRegisterItem=require('./ComponentRegisterItem.js');
		var loc=window.localStorage;
		var str="";
		/*var yanzheng1=parseInt(Math.random()*10)toString();
		var yanzheng2=parseInt(Math.random()*10)toString();
		var yanzheng3=parseInt(Math.random()*10)toString();
		var yanzheng4=parseInt(Math.random()*10)toString();*/
		
		for(var i=0;i<4;i++){
			str+=parseInt(Math.random()*10).toString();
		}
		if(!(/^1[3|4|5|7|8]\d{9}$/.test(this.state.result))){
			alert('请输入正确的手机号码')
		}else{
			
			loc.setItem('Yanzheng',str)
			loc.setItem("Tel",this.state.result);
			 common.unmountComponentByNode(['banner','list','header']);
			 common.mountComponentByNode({'header':ComponentRegisterItem});	
		}
	},
	render:function(){
		var img1="img/Register-1.png";
		var img2="img/radio.png";
		
		var _css=this.CSS;
		return(
			<div>
				<div style={_css.divs}>
					<img src={img1} style={_css.img} onTouchStart={this.back}/>
					  <span style={_css.span}>注册</span> 
				</div>
				<div style={_css.div1}>
					<div style={_css.inputactive}>
						<img src={img2} style={_css.img2}/>
					</div>
					<span style={_css.span1}>我要赚钱</span>
					<div style={_css.input}></div>
					<span style={_css.span1}>我要流量</span>
				</div>
				<div style={_css.div2}>
					<input style={_css.div2input} placeholder="请输入手机号码" onChange={this.handChange}/>
				</div>				
				<div style={_css.div3}>
					<div style={_css.next} onTouchStart={this.next}>下一步</div>
				</div>
				<div style={_css.div4}>
					<span style={_css.div4span1}>注册及视为同意</span>
					<span style={_css.div4span2}>平台服务协议</span>
				</div>
			</div>	
		)	
	}	
})
ComponentRegister.prototype.CSS={
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
	div1:{
		width:"100%",
		height:"1.55rem",
		backgroundColor:"rgb(238,238,238)",
		display:"flex",
		justifyContent:"space-around",
		alignItems:"center"
	},
	inputactive:{
		width:"0.4rem",
		height:"0.4rem",
		borderRadius:"100%",
		display:"block",
		
	},
	img2:{
		width:"0.5rem",
		height:"0.5rem",
		borderRadius:"100%",
		display:"block",
		
	},
	input:{
		width:"0.4rem",
		height:"0.4rem",
		borderRadius:"100%",
		border:"1px solid black",
			display:"block",
	},
	span1:{
		fontSize:"0.35rem",
		display:"block",
		display:"block",
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
module.exports=ComponentRegister