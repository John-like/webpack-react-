var React=require('react');
var ReactDOM=require('react-dom');

var common={
	/**路由api 控制组件的卸载和装入
	 * **/
	router:function(event){
		var ComponentMyget=require('./ComponentMyget.js');
		var ComponentFamous=require('./ComponentFamous.js');
		var ComponentRegister=require('./ComponentRegister.js');
		var ComponentHeader=require('./ComponentHeader.js');
		var ComponentBanner=require('./ComponentBanner.js');
		var ComponentList=require('./ComponentList.js');
		var ComponentSearch=require('./ComponentSearch.js');
		var ComponentMy=require('./ComponentMy.js');
		var ComponentDidtask=require('./ComponentDidtask.js');
		var ComponentMygetMoney=require('./ComponentMygetMoney.js');
		var SameHeader=require('./SameHeader.js');
		//获取页面上点击tab标记 data-href属性
		var _tag=event.target.getAttribute("data-href");
		
		//判断 并卸载哪些组件,装入新的组件
		switch(_tag){
			case "index":
			  //卸载
			 this.unmountComponentByNode(['header','banner','list']);
			  //装入
			this.mountComponentByNode({'header':ComponentHeader, 'banner':ComponentBanner,
			'list':ComponentList});
			
			break;
			case "myget":
			 //卸载banner ,卸载list
			 	
				 SameHeader.prototype.CSS.title="分享赚钱"
				 this.unmountComponentByNode(['header','banner','list']);
				 steps=steps+10;
			  //装入新的组件
				this.mountComponentByNode({'header':SameHeader,'banner':ComponentMygetMoney});
			break;
			case "famous":
			 this.unmountComponentByNode(['banner','list','header']);
			 this.mountComponentByNode({'header':ComponentFamous});
			break;
			case "my":
			 this.unmountComponentByNode(['banner','list','header']);
			 this.mountComponentByNode({'banner':ComponentMy});
			break;
			case "register":
			 this.unmountComponentByNode(['banner','list','header']);
			 this.mountComponentByNode({'header':ComponentRegister});
			alert(1)
			break;
			
		}
	}
    , 
    unmountComponentByNode:function(nodes){
    	for(var i=0;i<nodes.length;i++){
    	    //根据用户传入需要被卸载组件位置,找到对应dom节点
    	   var _nodes=document.getElementById(nodes[i]);
    	   ReactDOM.unmountComponentAtNode(_nodes);
    	}
    },
    mountComponentByNode:function(jsons){
    	 for(var key in jsons){
    	 	//1通过传入的json的key找到 要渲染组件位置
    	 	var _dom=document.getElementById(key);
    	 	ReactDOM.render(React.createElement(jsons[key]),_dom);
    	 	//ReactDOM.render(<div></div>,document.body)
    	 	
    	 }
    }
}
module.exports=common;








