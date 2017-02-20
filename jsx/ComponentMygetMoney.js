var React=require('react');
var ReactDOM=require('react-dom');

var Sameheader=require('./SameHeader.js');

var ComponentMygetMoney=React.createClass({
	getDefaultProps:function(){
		return{source:"http://127.0.0.1:8020/extrack/js/ComponentDidtask.json",}
	},
	getInitialState:function(){	
		return{
			result:""
		}
	},
	componentWillMount:function(){
		var _this=this;
		_common.http({
			type:"get",
			url:this.props.source,
			async:true,
			success:function(data){
				var _result=JSON.parse(data);
				_this.setState({result:_result})
			}
		})
	},
	render:function(){	
		var _css={
			divs:{
				width:"100%",
				position:"absolute",
				left:"0",
				top:"0.82rem",
				bottom:"0.9rem",
				backgroundColor:"rgb(238,238,238)"
			},
			div:{
				width:"100%",
				height:"0.8rem",
				borderBottom:"1px solid red",
				
				display:"flex",
				justifyContent:"center",
				alignItems:"center",
				backgroundColor:"#fff"
			},
			div1:{
				width:"33%",
				height:"100%",
				borderBottom:"1px solid rgb(215,77,77)",
				display:"flex",
				justifyContent:"center",
				alignItems:"center",
				fontSize:"0.3rem",
				color:"gray",
			},
			div2:{
				width:"33%",
				height:"100%",
				borderBottom:"1px solid rgb(215,215,215)",
				display:"flex",
				justifyContent:"center",
				alignItems:"center",
				fontSize:"0.3rem",
				
			},
			div3:{
				width:"34%",
				height:"100%",
				borderBottom:"1px solid rgb(215,215,215)",
				display:"flex",
				justifyContent:"center",
				alignItems:"center",
				fontSize:"0.3rem",
				
			}
		}
		var temp=[];
		for(var i=0;i<this.state.result.length;i++){
			temp.push(
				<ComponentDidtaskchild name={this.state.result[i]} key={i}/>
			)
		}
		return(
			<div style={_css.divs}>
			<div style={_css.div}>
				<div style={_css.div1}>最新有限</div>
				<div style={_css.div2}>高效益有限</div>
				<div style={_css.div3}>行业分类</div>
			</div>
				{temp}
			</div>
		)
	}
});

var ComponentDidtaskchild=React.createClass({
	share:function(event){
	var ComponentShareFriend=require('./ComponentShareFriend.js')
	var common=require('./component.js');
	
	var ComponentList=require('./ComponentList.js');
	var SameHeader=require('./SameHeader.js')
	common.unmountComponentByNode(['banner','list','header']);
	common.mountComponentByNode({'banner':ComponentShareFriend});
	},
	render:function(){
		var _rst=this.props.name;
		var _css=this.CSS;
		var div1221={
			"width":_rst.percentage,
			"height":"0.1rem",
			"backgroundColor":"rgb(255,218,68)",
		};
		return(
			<div style={_css.div}>
				<div style={_css.div1}>
					<div style={_css.div11}>
						<img src={_rst.src} style={_css.img}/>
					</div>
					<div style={_css.div12}>
						<div style={_css.div121}>
							{_rst.name}
						</div>
						<div style={_css.div122}>
							<div style={div1221}></div>
						</div>
						<div style={_css.div123}>
							<div style={_css.div1231}>
								<span style={_css.div123span1}>{_rst.percentage}</span>
								<span style={_css.div123span2}>已达</span>
							</div>
							<div style={_css.div1231}>
								<span style={_css.div123span1}>{_rst.click}次</span>
								<span style={_css.div123span2}>我的贡献</span>
							</div>
							<div style={_css.div1231}>
								<span style={_css.div123span11}>{_rst.price}</span>
								<span style={_css.div123span2}>流量佣金</span>
							</div>
							<div style={_css.div1231}>
								<span style={_css.div123span11}>{_rst.getprice}</span>
								<span style={_css.div123span2}>赚取拥挤</span>
							</div>
						</div>
					</div>
				</div>
				<div style={_css.div2} onTouchStart={this.share}>
					分享获得奖金
				</div>
				<div style={_css.pan} id="pan"></div>
			</div>
		)
		
	}
})

ComponentDidtaskchild.prototype.CSS={
	pan:{
		width:"100%",
		position:"fixed",
		left:"0",
		top:"-0.9rem",
		bottom:"-0.9rem",
		backgroundColor:"black",
		opacity:"0.5",
		zIndex:"3",
		display:"none"
		
	},
	div:{
		width:"100%",
		height:"2.5rem",	
		backgroundColor:"#fff"
	},
	div1:{
		width:"6.9rem",
		height:"1.7rem",
		marginLeft:"0.3rem",
		display:"flex"
	},
	div11:{
		width:"2.22rem",
		height:"100%",
		display:"flex",
		justifyContent:"center",
		alignItems:"center",
	},
		div12:{
		width:"4.6rem",
		height:"100%",
		marginLeft:"0.2rem",
	},
	div121:{
		width:"100%",
		height:"0.62rem",
		fontSize:"0.32rem",
		lineHeight:"0.62rem",
		fontWeight:"bold",
	},
	div122:{
		width:"100%",
		height:"0.1rem",
		display:"flex",
		justifyContent:"flex-start",
		alignItems:"center",
		backgroundColor:"rgb(215,215,215)",
		marginTop:"0.07rem",
	},
	
	div123:{
		width:"100%",
		height:"0.6rem",
		display:"flex",
		fontSize:"0.25rem",
		marginTop:"0.1rem",
		
	},
	div1231:{
		width:"25%",
		height:"100%",
		borderRight:"1px solid rgb(239,239,239)",
		flexDirection:"column",
		display:"flex",
		textAlign:"center"
	},
	div123span1:{
		fontWeight:"bold",
		fontSize:"0.25rem"
	},
	div123span11:{
		fontWeight:"bold",
		fontSize:"0.25rem",
		color:"rgb(255,68,66)",
	},
	div123span2:{
		color:"#acacac",
		fontSize:"0.2rem"
	},
	img:{
		width:"2.2rem",
		height:"1.4rem"
	},
	div2:{
		width:"6.9rem",
		height:"0.6rem",
		backgroundColor:"rgb(255,218,68)",
		marginLeft:"0.3rem",
		fontSize:"0.3rem",
		display:"flex",
		justifyContent:"center",
		alignItems:"center",
	},
	
	
}
module.exports=ComponentMygetMoney;