var isSplash = -1;
function start(){
	
};
function startF(){	
	setTimeout(function () {
		//$('.car1').css({marginRight:-500}).stop().delay(100).animate({marginRight:0},1200,'easeOutBack');
	}, 200);
};
function showSplash(){
	setTimeout(function () {		
		$('header').stop().animate({'marginTop':'0px'}, 800, "easeOutExpo");		
		$('.logo').stop().animate({'marginTop':'0px'}, 800, "easeOutExpo");
		$('.menu').stop().animate({'marginTop':'0px'}, 800, "easeOutExpo");
		$('.splash').stop().animate({'marginTop':'0px', 'height':'470px'}, 800, "easeOutExpo");
		$('.splash_gallery').stop().animate({'marginTop':'0px'}, 800, "easeOutExpo");
		$('.slogans').stop().animate({'marginTop':'0px'}, 800, "easeOutExpo");				
		$('.floor1').stop().animate({'marginTop':'0px', 'opacity':'1'}, 800, "easeOutExpo");
		$('.icons').stop().animate({'marginTop':'0px'}, 800, "easeOutExpo");	
	}, 400);	
};
function hideSplash(){ 
	$('header').stop().animate({'marginTop':'-50px'}, 800, "easeOutExpo");		
	$('.logo').stop().animate({'marginTop':'25px'}, 800, "easeOutExpo");
	$('.menu').stop().animate({'marginTop':'-50px'}, 800, "easeOutExpo");
	$('.splash').stop().animate({'marginTop':'-50px', 'height':'210px'}, 800, "easeOutExpo");
	$('.splash_gallery').stop().animate({'marginTop':'-130px'}, 800, "easeOutExpo");
	$('.slogans').stop().animate({'marginTop':'-310px'}, 800, "easeOutExpo");				
	$('.floor1').stop().animate({'marginTop':'-310px', 'opacity':'0.4'}, 800, "easeOutExpo");
	$('.icons').stop().animate({'marginTop':'-50px'}, 800, "easeOutExpo");	
};
function hideSplashQ(){
	$('header').css({'marginTop':'-50px'});
	$('.logo').css({'marginTop':'25px'});
	$('.menu').css({'marginTop':'-50px'});
	$('.splash').css({'marginTop':'-50px', 'height':'210px'});
	$('.splash_gallery').css({'marginTop':'-130px'});
	$('.slogans').css({'marginTop':'-310px'});
	$('.floor1').css({'marginTop':'-310px', 'opacity':'0.4'});
	$('.icons').css({'marginTop':'-50px'});
};

/////////////////////// ready
$(document).ready(function() {
	MSIE8 = ($.browser.msie) && ($.browser.version == 8),
	$.fn.ajaxJSSwitch({
		classMenu:"#menu",
		classSubMenu:".submenu",
		topMargin: 482,//mandatory property for decktop
		bottomMargin: 80,//mandatory property for decktop
		topMarginMobileDevices: 482,//mandatory property for mobile devices
		bottomMarginMobileDevices: 80,//mandatory property for mobile devices
		delaySubMenuHide: 300,
		fullHeight: true,
		bodyMinHeight: 900,
		menuInit:function (classMenu, classSubMenu){
			//classMenu.find(">li").each(function(){
			//	$(">a", this).append("<div class='openPart'></div>");
			//})
		},
		buttonOver:function (item){            
            $('>.txt1',item).stop().animate({'marginTop':'60px'},300,'easeOutCubic');
            $('>.txt2',item).stop().animate({'marginTop':'0px'},300,'easeOutCubic');
		},
		buttonOut:function (item){
            $('>.txt1',item).stop().animate({'marginTop':'0px'},300,'easeOutCubic');
            $('>.txt2',item).stop().animate({'marginTop':'-60px'},300,'easeOutCubic');          
		},
		subMenuButtonOver:function (item){
		},
		subMenuButtonOut:function (item){
		},
		subMenuShow:function(subMenu){        	
        	subMenu.stop(true,true).animate({"height":"show"}, 500, "easeOutCubic");
		},
		subMenuHide:function(subMenu){
        	subMenu.stop(true,true).animate({"height":"hide"}, 100, "easeOutCubic");
		},
		pageInit:function (pages){
			//console.log('pageInit');
		},
		currPageAnimate:function (page){
			//console.log('currPageAnimate');
			var Delay=400; // default
			if(isSplash==-1){ // on reload				
				hideSplashQ();
				Delay=0;				
			}
			if(isSplash==0){ // on first time click				
				hideSplash();
				Delay=800;
			}
			isSplash = 2;
			
			// animation of current page
			jQuery('body,html').animate({scrollTop: 0}, 0); 
			
			page.css({"left":$(window).width()}).stop(true).delay(Delay).animate({"left":0}, 1000, "easeOutCubic", function (){
					$(window).trigger('resize');
			});    	
		},
		prevPageAnimate:function (page){
			//console.log('prevPageAnimate');
			page.stop(true).animate({"display":"block", "left":-$(window).width()}, 500, "easeInCubic");
		},
		backToSplash:function (){
			//console.log('backToSplash');
			if(isSplash==-1){
				isSplash = 0;
				startF();				
			}
			else{
				isSplash = 0;				
				showSplash();
			};
			$(window).trigger('resize');			      
		},
		pageLoadComplete:function (){
			//console.log('pageLoadComplete');            
    }
	});  /// ajaxJSSwitch end

	////// sound control	
	$("#jquery_jplayer").jPlayer({
		ready: function () {
			$(this).jPlayer("setMedia", {
				mp3:"music.mp3"
			});
			//$(this).jPlayer("play");
			var click = document.ontouchstart === undefined ? 'click' : 'touchstart';
          	var kickoff = function () {
            $("#jquery_jplayer").jPlayer("play");
            document.documentElement.removeEventListener(click, kickoff, true);
         	};
          	document.documentElement.addEventListener(click, kickoff, true);
		},
		
		repeat: function(event) { // Override the default jPlayer repeat event handler				
				$(this).bind($.jPlayer.event.ended + ".jPlayer.jPlayerRepeat", function() {
					$(this).jPlayer("play");
				});			
		},
		swfPath: "js",
		cssSelectorAncestor: "#jp_container",
		supplied: "mp3",
		wmode: "window"
	});

	////  gallery page 
	  $(".splash_gallery").jCarouselLite({
	      btnNext: ".gnext",
	      btnPrev: ".gprev",
	      mouseWheel: true,
	      visible: 5,
	      auto: 5000,
	      scroll: 1,
	      start: 0,
	      circular: true,
	      vertical: false,
	      speed: 600,
	      easing: 'easeInOutExpo'
	  });
	  $('.desc > li').eq(0).css({'display':'block'});
	


	

	
	
	
	

	
		
});

/////////////////////// load
$(window).load(function() {	
	setTimeout(function () {					
  		$('#spinner').fadeOut();		
  		$(window).trigger('resize');
  		start();
	}, 100);
	setTimeout(function () {$("#jquery_jplayer").jPlayer("play");}, 2000);	
});