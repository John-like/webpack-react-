var React=require('react');
var ReactDOM=require('react-dom');

var Sameheader=require('./SameHeader.js');

var ComponentCheckDetail=React.createClass({
	getDefaultProps:function(){
		return{source:"http://127.0.0.1:8020/extrack/js/ComponentCheckDetail.json"}
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
				var data = JSON.parse(data);
				_this.setState({result:data});
			}			
		})
	},
	render:function(){
		var _css=this.CSS;
		var _jsx=[];
		for(var i=0;i<this.state.result.length;i++){
			_jsx.push(
				<ComponentCheckDetailchild name={this.state.result[i]} key={i} />
			)
		}
		return(
			<div style={_css.divs}>
				{_jsx}
			</div>
		)
	}
})
var ComponentCheckDetailchild=React.createClass({
	render:function(){
		var _result=this.props.name;
		var _css={
				div:{
			width:"6.9rem",
			height:"1.47rem",
			borderBottom:"1px solid rgb(215,215,215)",
			display:"flex",
			justifyContent:"center",
			marginLeft:"0.3rem",
			},
			divleft:{
				width:"70%",
				height:"100%",
				fontSize:"0.3rem",
				display:"flex",
				flexDirection:"column",
				justifyContent:"flex-start",
				alignItems:"center",
			},
			spanleft1:{
				display:"block",
				width:"100%",
				height:"50%",
				display:"flex",
				justifyContent:"flex-start",
				alignItems:"cneter",
				lineHeight:"0.735rem",
			},
			spanleft2:{
				display:"block",
				width:"100%",
				height:"50%",
				display:"flex",
				justifyContent:"flex-start",
				alignItems:"cneter",
			
			},
				divright:{
					width:"30%",
					height:"100%",
					display:"flex",
					fontSize:"0.3rem",
					justifyContent:"flex-end",
					alignItems:"center",
					lineHeight:"1.47rem",	
			}
		}
		return(
				<div style={_css.div}>
					<div style={_css.divleft}>
						<span style={_css.spanleft1}>{_result.name}</span>
						<span style={_css.spanleft2}>{_result.time}</span>
					</div>
					<div style={_css.divright}>
						<span style={_css.spanright}>+{_result.money}</span>			
					</div>
				</div>
		)
	}
});
ComponentCheckDetail.prototype.CSS={
	divs:{
		width:"100%",
		position:"absolute",
		left:"0",
		top:"0.82rem",
		bottom:"0.9rem",
		backgroundColor:"#fff"
	},
	
}
module.exports=ComponentCheckDetail;