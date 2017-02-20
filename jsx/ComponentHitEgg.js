var React=require('react');
var ReactDOM=require('react-dom');
	var common=require('./component.js');
var ComponentHitEgg=React.createClass({
	back:function(){	
	var ComponentHeader=require('./ComponentHeader.js');
	var ComponentBanner=require('./ComponentBanner.js');
	var ComponentList=require('./ComponentList.js');
	var ComponentFooter=require('./ComponentFooter.js');
		 common.unmountComponentByNode(['banner','list','header']);
		common.mountComponentByNode({'header':ComponentHeader, 'banner':ComponentBanner,
			'list':ComponentList,'footer':ComponentFooter});
	},
	hitegg:function(){
		var move=document.getElementById('move');
		var Num=Math.random();
		console.log(Num);
		move.style.transform="rotate(30deg)";
		move.style.transition="all 0.5s linear";
		setTimeout(function(){
			move.style.transform="rotate(-15deg)";
			move.style.transition="all 0.2s linear";
			
		},500)
		setTimeout(function(){
			if(Num>0&&Num<0.5){
		var ComponentHeader=require('./ComponentHeader.js');
		var ComponentBanner=require('./ComponentBanner.js');
		var ComponentList=require('./ComponentList.js');
		var ComponentFooter=require('./ComponentFooter.js');
		var CompoonentGetEgg=require('./ComponentGetEgg.js')
		 common.unmountComponentByNode(['banner','list','header']);
		common.mountComponentByNode({'header':CompoonentGetEgg});
		}else{
		var ComponentHeader=require('./ComponentHeader.js');
		var ComponentBanner=require('./ComponentBanner.js');
		var ComponentList=require('./ComponentList.js');
		var ComponentFooter=require('./ComponentFooter.js');
		var ComponentGetThank=require('./ComponentGetThank.js')
		 common.unmountComponentByNode(['banner','list','header']);
		common.mountComponentByNode({'header':ComponentGetThank});
		}
			
		},700)
		
		
		
		
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
					<div style={_css.div1}>快来砸金蛋&nbsp;有惊喜</div>
					<div style={_css.div2}>当日赚钱最高可＋10%</div>
					<div style={_css.egg}>
						<img src="img/jindan.png" style={_css.jindan}/>
						<img src="img/chuaizi.png" id="move" style={_css.chuizi} onTouchStart={this.hitegg}/>
					</div>
				</div>
				
			</div>
			
		)
	}
})
ComponentHitEgg.prototype.CSS={
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
		fontSize:"0.5rem",
		color:"rgb(255,204,0)",
		marginTop:"0.65rem"
	},
	div2:{
		width:"100%",
		height:"0.92rem",
		textAlign:"center",
		lineHeight:"0.92rem",
		fontSize:"0.4rem",
		color:"rgb(255,204,0)",
	
	},
	egg:{
		width:"100%",
		height:"4.2rem",
		display:"flex",
		justifyContent:"center",
		alignItems:"center",
		marginTop:"0.5rem",
	},
	jindan:{
		width:"3.75rem",
		height:"100%"
	},
	chuizi:{
		width:"1.65rem",
		height:"1.5rem",
		position:"absolute",
		right:"0.75rem",
		top:"2.6rem",
		transformOrigin:"100% 100%",
	}
	
}
module.exports=ComponentHitEgg