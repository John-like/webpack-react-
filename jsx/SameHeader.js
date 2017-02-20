var React=require('react');
var ReactDOM=require('react-dom');


var SameHeader=React.createClass({
	back:function(){
		console.log(steps)
		var common=require('./component.js');
		var ComponentMyData=require('./ComponentMyData.js');
		var ComponentHeader=require('./ComponentHeader.js');
		var ComponentBanner=require('./ComponentBanner.js');
		var ComponentList=require('./ComponentList.js');
		var ComponentMy=require('./ComponentMy.js');
		var ComponentGetMoney=require('./ComponentGetMoney.js');
		var ComponentGetMoneyItem=require('./ComponentGetMoneyItem.js');
		
		var Sameheader=require('./SameHeader.js');
		if(steps==0){
				common.unmountComponentByNode(['banner','list','header']);
				common.mountComponentByNode({'banner':ComponentMy});
		}else if(steps==1){
			Sameheader.prototype.CSS.title = "提现";
			common.unmountComponentByNode(['banner','list','header']);
			common.mountComponentByNode({'header':Sameheader,'banner':ComponentGetMoney});
			steps--;
		}else if(steps==2){
			Sameheader.prototype.CSS.title = "提现";
			common.unmountComponentByNode(['banner','list','header']);
			common.mountComponentByNode({'header':Sameheader,'banner':ComponentGetMoneyItem});
			steps--;
		}else if(steps==10){
			common.unmountComponentByNode(['banner','list','header']);
			common.mountComponentByNode({'header':ComponentHeader,'banner':ComponentBanner,'list':ComponentList});
			steps=steps-10;
		}else if(steps==11){
			common.unmountComponentByNode(['banner','list','header']);
			common.mountComponentByNode({'header':ComponentHeader,'banner':ComponentBanner,'list':ComponentList});
			steps=steps-11;
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
					  <span style={_css.span}>{_css.title}</span> 
				</div>
			</div>	
		)	
	}	
})
SameHeader.prototype.CSS={
	title:"注册",
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
	
}	
module.exports=SameHeader

