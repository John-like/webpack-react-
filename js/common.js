var _common={
	 //get  {type:'get',url:'',async:'',callback:}
	 //post {type:'post',url:'',async:'',data:'',callback}
	 http:function(obj){
	 	var TYPE=obj.type;
	 	var xhr=new XMLHttpRequest();
	 	switch(TYPE){
	 		case "get":
	 		xhr.open(obj.type, obj.url,obj.async);
	    	xhr.send("");
	    	xhr.onreadystatechange=function(){
	    	if(xhr.readyState==4&&xhr.status==200){
	    	obj.success(xhr.responseText);}}
	 		break;
	 		case "post":
	 		var _data=obj.data;
	 		if(_data!=null||_data!=""||typeof(_data)=="object"){
	 			var str='';
	 			for(var key in _data){
	 				str+=key+'='+_data[key]+'&';
	 			}str=str.substring(0,str.length-1);
	 		}else{}
	 		xhr.open(obj.type, obj.url,obj.async);
		xhr.setRequestHeader('Content-Type',
		'application/x-www-form-urlencoded');//设置请求头部
	    	xhr.send(str);
	    	xhr.onreadystatechange=function(){
	    	if(xhr.readyState==4&&xhr.status==200){
	    	obj.success(xhr.responseText);}}
	 		break
	 	}
    	
    },
    transjson:function(_string){
    	var point=_string.indexOf("(");
    	var _newstr=_string.substring(point+1,
    		_string.length-1);
    	return JSON.parse(_newstr);
    },
    
//  1.封装post ajax
//  调用同一个方法,传入的参数不一致,最后得到结果也不一致
//1.post方法,相比get方法,传参多了一个data属性 
//2.问题? 传入的type 去判断走那个分支结构
//        get
//  _common.http({
//  	type:'get',
//  	url:'',
//  })
//        post
//  _common.http({
//  	type:'post',
//  	url:''
//  })
//  3.实现post 方法的时候,有什么细节:
//  post方法,传数据的时候 是通过form 
//   表单的方式进行传递数据的
//  form传递数据的时候, 
//  在xhr里面设置 属性 Content-Type:'application/x-www-form-unicoded'设置你要传递数据的格式
//   地址归地址,
//    得到的数据变成字符串传递过去
//    var s={"username":"12345","password":"123456"}
//    var _s="username=12345&password=123456";
    
    
    
    
    
//  2.添加到购物车
//  3.显示购物车的内容---->总价,和数量,
//  4.实现修改购物车数量,整个购物车内容页刷新
//  5.REACT---- MVC----VIEW 高效能view
//  
//  MVC的实现:
//  
//  MVVM:
    
//  angular js原理
    
}
