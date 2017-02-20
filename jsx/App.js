var React=require('react');
var ReactDOM=require('react-dom');
window.steps=0;
var ComponentLayout=require('./ComponentLayout.js');
var ComponentHeader=require('./ComponentHeader.js');
var ComponentList=require('./ComponentList.js');
var ComponentSearch=require('./ComponentSearch.js');
var ComponentBanner=require('./ComponentBanner.js');
var ComponentFooter=require('./ComponentFooter.js');
var ComponentMyget=require('./ComponentMyGet.js');
var ComponentRegister=require('./ComponentRegister.js');
var common=require('./Component.js')

ReactDOM.render(<ComponentLayout/>,document.getElementById("myapp"));
ReactDOM.render(<ComponentHeader/>,document.getElementById("header"));
ReactDOM.render(<ComponentSearch/>,document.getElementById("search"));
ReactDOM.render(<ComponentList/>,document.getElementById("list"));
ReactDOM.render(<ComponentBanner/>,document.getElementById("banner"));
ReactDOM.render(<ComponentFooter/>,document.getElementById("footer"));
	var Tel=window.localStorage.getItem("Tel");
	console.log(Tel)
		if(Tel!=null){
			console.log(1)
			common.unmountComponentByNode(['banner','list','header']);
			common.mountComponentByNode({'header':ComponentMyget,'banner':ComponentBanner,'list':ComponentList});
		}else{
			common.unmountComponentByNode(['banner','list','header']);
		 	common.mountComponentByNode({'header':ComponentHeader,'banner':ComponentBanner,'list':ComponentList});	
		 	console.log(2)
		}
