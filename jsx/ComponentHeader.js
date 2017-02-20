var React=require('react');
var ReactDOM=require('react-dom');
var common=require('./component.js')


var ComponentHeader=React.createClass({
	register:function(){	
		var ComponentRegister=require('./ComponentRegister.js');
		var ComponentHeader=require('./ComponentHeader.js');
		var ComponentBanner=require('./ComponentBanner.js');
		var ComponentList=require('./ComponentList.js');

		 common.unmountComponentByNode(['banner','list','header']);
		 common.mountComponentByNode({'header':ComponentRegister});	
	},	
	login:function(){	
		var ComponentRegister=require('./ComponentRegister.js');
		var ComponentLogin=require('./ComponentLogin.js');
		var ComponentHeader=require('./ComponentHeader.js');
		var ComponentBanner=require('./ComponentBanner.js');
		var ComponentList=require('./ComponentList.js');
		var Tel=window.localStorage.getItem("Tel");
		if(Tel!=null){
			common.unmountComponentByNode(['banner','list','header']);
			common.mountComponentByNode({'header':ComponentLogin});	
		}else{
			alert('请先注册')
		}
		console.log(Tel)
	},
	render:function(){			
		var img1="img/logo.png"
		var img2="img/header-register.png";
		var img3="img/header-login.png";
		var _css=this.CSS;
		return(
			<div style={_css.divs}>
					<img src={img1} style={_css.img1}/>
					<img src={img2} style={_css.img2} onTouchStart={this.register} />
					<img src={img3} style={_css.img3} onTouchStart={this.login}/>
			</div>
		)
	}
	
})
ComponentHeader.prototype.CSS={
	divs:{
		width:"100%",
		height:"2rem",
		backgroundColor:"rgb(255,218,68)",
		display:"flex",
		Content:"space-between",
		alignItems:"center"
	},
	img1:{
		width:"3rem",
		height:"1.3rem",
		marginLeft:"0.4rem"
	},
	img2:{
		width:"1.33rem",
		height:"0.5rem",
		marginLeft:"1.2rem"
	},
	img3:{
		width:"1.33rem",
		height:"0.5rem",
		marginLeft:"0.15rem"
	}
}


module.exports=ComponentHeader