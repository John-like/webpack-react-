var React=require('react');

var Famous=React.createClass({
	getDefaultProps:function(){
		return{source:"http://127.0.0.1:8020/extrack/js/json.json"}
	},
	getInitialState:function(){
		return{result:""}
	},
	componentWillMount:function(){
		var _this=this;
		_common.http({
			url:this.props.source,
			type:"get",
			async:true,
			success:function(data){
				
				var data = JSON.parse(data)
				_this.setState({result:data})
			}
			
		})
	},
	render:function(){	
		var _result=this.state.result;
		console.log(_result)
		var _css=this.CSS;
		var img1="img/Famous-1.jpg";
		var temp=[];
		for(var i=0;i<_result.length;i++){
				temp.push(<div style={_css.div3} key={i}>
					<div style={_css.div31} >
						<span style={_css.div31span1}>{_result[i].id}</span>
						<img src={_result[i].src} style={_css.div31img}/>
						<span style={_css.div31span2}>{_result[i].name}</span>
					</div>
					<div style={_css.div32}>{_result[i].click}次点击</div>
				</div>)
		}	
		return(
			<div>
				<div style={_css.divs}>
					今日榜单
				</div>
				<div style={_css.div1}>
					<div style={_css.div1left}>
						<img src={img1} style={_css.img}/>
						<div style={_css.divspan}>
							<span style={_css.span1}>异市孤行</span>
							<span style={_css.span2}>第32名</span>
						</div>
					</div>
					<div style={_css.div1right}>123214次点击</div>
				</div>
				<div style={_css.div2}>
					<span style={_css.span3}>每日前五名增获</span>
					<span style={_css.span4}>"砸金蛋一次"</span>
				</div>
				{temp}
				
			</div>
		)
	}
});
Famous.prototype.CSS={
	divs:{
		width:"100%",
		height:"0.8rem",
		backgroundColor:"rgb(255,218,68)",
		fontSize:"0.35rem",
		textAlign:"center",
		lineHeight:"0.8rem"
	},
	div1:{
		width:"100%",
		height:"1.6rem",
		backgroundColor:"rgb(245,244,240)",
		display:"flex",
		justifyContent:"space-between",
		alignItems:"center",
	},
	div1left:{
		marginLeft:"0.8rem",
		width:"3.5rem",
		height:"1.25rem",
		display:"flex",
		fontSize:"0.25rem"
	},
	divspan:{
		width:"1.85rem",
		height:"100%",
		display:"flex",
		flexDirection:"column",
		marginLeft:"0.13rem"
	},
	span1:{
		width:"1.85rem",
		height:"0.7rem",
		fontSize:"0.4rem",
		color:"#acacac",
		display:"block",
		textAlain:"center",
		lineHeight:"0.7rem"
	},
	span2:{
		width:"1.85rem",
		height:"0.5rem",
		fontSize:"0.25rem",
		display:"block",
		textAlain:"center",
		lineHeight:"0.5rem",
		
	},
	img:{
		width:"1rem",
		height:"1rem",
		borderRadius:"100%"
	},
	div1right:{
		width:"1.9rem",
		height:"0.6rem",
		fontSize:"0.3rem",
		lineHeight:"0.6rem",
		marginRight:"0.3rem",
	},
	div2:{
		width:"100%",
		height:"0.9rem",
		display:"flex",
		justifyContent:"center",
		alignItems:"center"
	},
	span3:{
		color:"rgb(102,102,102)",
		fontSize:"0.3rem"
	},
	span4:{
		color:"rgb(253,73,66)",
		fontSize:"0.3rem"
	},
	div3:{
		width:"100%",
		height:"1.5rem",
		borderTop:"1px solid rgb(220,220,220)",
		borderBottom:"1px solid rgb(220,220,220)",
		display:"flex",
		justifyContent:"center",
		alignItems:"center"
	},
	div31:{
		width:"65%",
		height:"100%",
		display:"flex",
		alignItems:"center",
		fontSize:"0.3rem",
	},
	div31span1:{
		color:"rgb(102,102,102)",
		display:"block",
		width:"0.4rem",
		height:"0.4rem",
		fontSize:"0.38rem",
		marginLeft:"0.4rem"
	},
	div31span2:{
		color:"black",
		width:"1.6rem",
		height:"0.5rem",
		fontSize:"0.45rem",
		overflow:"hidden",
		marginLeft:"0.3rem",
		display:"block"
		
	},
	div31img:{
		width:"1rem",
		height:"1rem",
		borderRadius:"100%",
		marginLeft:"0.1rem",
	},
	div32:{
		width:"35%",
		height:"100%",
		display:"flex",
		alignItems:"center",
		fontSize:"0.35rem"
	}
}
module.exports=Famous;
