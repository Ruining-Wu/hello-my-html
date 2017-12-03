$(document).ready(function(){
	var slideShow = $(".slideShow");    //获取class=slideShow的元素
	var ul = slideShow.find("ul");    //获取ul
	var nav = slideShow.find(".nav span");    //获取1,2,3,4的按钮
	var oneWidth = ul.find("li").eq(0).width();    //获取ul第一项的宽度
	var timer = null;
	var iNow = 0;

	slideShow.hover(function(){      //鼠标移入和鼠标移出时分别执行的两个函数
		clearInterval(timer);    //移入清楚自动点击事件

	},function(){
		autoPlay();     //鼠标移出时自动执行

	});

	//给1/2/3/4按钮添加点击事件
	nav.on("click",function(){
		var me = $(this);   //当前点击对象
		var index = me.index();    //当前点击对象的索引值
		iNow = index;   //点击时候动态更新inow
		ul.animate({
			"left":-oneWidth*iNow     //使ul动起来
		});
		nav.removeClass("active");   //重置其他的样式   
		me.addClass("active");   //给当前点击对象添加active高亮的样式
	});

	autoPlay();

	//自动切换效果，每隔2s钟自动点击相应的索引按钮
	function autoPlay(){
		timer = setInterval(function(){
			iNow++;
			if (iNow>nav.length) {   //自动点击到最后一项时，从头开始
				iNow=0;
			};
			nav.eq(iNow).trigger("click");   //trigger自动触发事件，触发click自动点击
		},2000);

	}

	
});