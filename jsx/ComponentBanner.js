var React=require('react');

var ComponentBanner=React.createClass({
	render:function(){		
		var img1="img/img1.jpg";
		var img2="img/img2.jpg";
		var img3="img/img3.jpg";
		var img4="img/img4.jpg";
		var _css=this.CSS;
		return(
			<div style={_css.divs}>
				<div className="swiper-container" style={_css.div}>
					<div className="swiper-wrapper">
						<div className="swiper-slide">
							<img src={img1} style={_css.img}/>
						</div>
						<div className="swiper-slide">
							<img src={img2} style={_css.img}/>
						</div>
						<div className="swiper-slide">
							<img src={img3} style={_css.img}/>
						</div>
						<div className="swiper-slide">
							<img src={img4} style={_css.img}/>
						</div>
					</div>
					<div className="swiper-pagination"></div>
				</div>
			</div>
		)
	},
	componentDidMount:function(){
		var mySwiper = new Swiper('.swiper-container', {
					autoplay: 2000,
					loop: true,
					autoplayDisableOnInteraction : false,
					pagination : '.swiper-pagination',
					paginationClickable :true,
				});
		
	}
})
ComponentBanner.prototype.CSS={
	divs:{
		width:"100%",
		height:"3.2rem"
	},
	div:{
		width:"100%",
		height:"100%"
	},
	img:{
		width:"100%",
		height:"100%"
	}
	
}

module.exports=ComponentBanner;
