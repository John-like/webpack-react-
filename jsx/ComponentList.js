var React=require('react');
var ReactDOM=require('react-dom');
var common=require('./component.js')
var ComponentDidtask=require('./ComponentDidtask.js');
var SameHeader=require('./SameHeader.js');
var ComponentMyData=require('./ComponentMyData.js');
var ComponentHitEgg=require('./ComponentHitEgg.js')
var ComponentMygetMoney=require('./ComponentMygetMoney.js');
var ComponentList=React.createClass({
	Getfriend:function(){
		alert(1)
	},
	Getlottery:function(){
		SameHeader.prototype.CSS.title="赚钱"
		 common.unmountComponentByNode(['header','banner','list','footer']);
		 common.mountComponentByNode({'banner':ComponentHitEgg});
	},
	Getmoney:function(){
		 SameHeader.prototype.CSS.title="赚钱"
		 common.unmountComponentByNode(['header','banner','list']);
			common.mountComponentByNode({'header':SameHeader,'banner':ComponentMygetMoney});
			 steps=steps+10;
	},
	Getdata:function(){
		 SameHeader.prototype.CSS.title="个人资料"
		 common.unmountComponentByNode(['header','banner','list']);
		 common.mountComponentByNode({'header':SameHeader,'banner':ComponentMyData});
		  steps=steps+11;
	},
	render:function(){	
		var img1="img/List-1.png";
		var img2="img/List-2.png";
		var img3="img/List-3.png";
		var img4="img/List-4.png";
		var _css=this.CSS;
		return(
			<div style={_css.div}>
				<div style={_css.div1}>
					<div style={_css.List1}>
						<img src={img1} style={_css.img1} onTouchStart={this.Getfriend}/>
					</div>
					<div style={_css.List2}>
						<img src={img2} style={_css.img2} onTouchStart={this.Getlottery}/>
					</div>
					
				</div>
				<div style={_css.div2}>
					<div style={_css.List3}>
						<img src={img3} style={_css.img3} onTouchStart={this.Getmoney}/>
					</div>
					<div style={_css.List4}>
						<img src={img4} style={_css.img4} onTouchStart={this.Getdata}/>
					</div>
				</div>
			</div>
		)
	}	
})
ComponentList.prototype.CSS={
	div:{
		width:"100%",
		height:"5.9rem",
		backgroundColor:"rgb(238,238,238)",
		display:"flex"
	},
	div1:{
		width:"3.68rem",
		height:"5.9rem"
		
	},
	div2:{
		width:"3.82rem",
		height:"5.9rem"
	},
	List1:{
		marginLeft:"0.28rem",
		marginTop:"0.2rem",
		width:"3.41rem",
		height:"1.77rem",
		backgroundColor:"rgb(255,255,255)",
		display:"flex",
		justifyContent:"center",
		alignItems:"center"
	},
	List2:{
		marginLeft:"0.28rem",
		marginTop:"0.22rem",
		width:"3.41rem",
		height:"3.62rem",
		backgroundColor:"rgb(255,255,255)",
		display:"flex",
		justifyContent:"center",
		alignItems:"center"
	},
	List3:{
		marginTop:"0.2rem",
		marginLeft:"0.15rem",
		width:"3.41rem",
		height:"3.62rem",
		backgroundColor:"rgb(255,255,255)",
		display:"flex",
		justifyContent:"center",
		alignItems:"center"
	},
	List4:{
		width:"3.41rem",
		marginLeft:"0.15rem",
		marginTop:"0.22rem",
		height:"1.77rem",
		backgroundColor:"rgb(255,255,255)",
		display:"flex",
		justifyContent:"center",
		alignItems:"center"
	},
	img1:{
		width:"2.6rem",
		height:"1.08rem"
	},
	img2:{
		width:"1.67rem",
		height:"2.85rem"
	},
	img3:{
		width:"1.94rem",
		height:"2.97rem"
	},
	img4:{
		width:"2.91rem",
		height:"1.08rem"
	}
	
}

module.exports=ComponentList;