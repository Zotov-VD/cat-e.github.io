var isTouchDevice = 'ontouchstart' in document.documentElement;
console.log(isTouchDevice);
console.log(window);
// console.log(window.google.map);
// window.statusbar= {visible: false};
console.log(window.statusbar.visible);
// howMuchToch = window.clientInformation.maxTouchPoints;
// alert(whileToch);
$(function() {
	//slide menu 
	$('.byrger').click(function() {
		$('.menu').slideToggle(400);
	});


	//scale click
	var width = $('html').width();
	console.log(width);
	if ( width < 768 ){
		var sd 		= 1;			

	function slide1() {
		$('.span').css( {width: '40px', float: 'right'})
	};
	function slide2() {
		$('.span').css( {width: '40px', float: 'left'})
	};

	$('.result__scale').click(function() {

		if ( sd === 1 ) {
		$('.slide .span').css({width: '77px'});
		setTimeout(slide1, 400);
		$('.before').css({
			width: '0',
			property2: 'value2'
		});
			sd++ ;
		}else{
		$('.slide .span').css({width: '77px'});
		setTimeout(slide2, 400);
		$('.before').css({
			width: '280px',
		});
		 	sd-- ;
		};
	});
	
}
	if( width > 768 ){
	//scale slice
	var slider = $('.slider'),
			span	 = $('.span'),
			bef 	 = $('.before'),
			stop 	 = true,
			w 		 = 430/100,
			pos,
			proc,x,result, result2;

 if (isTouchDevice) {

 	span.css({zIndex: '2'});
	
	slider.on('touchstart', function (e) {
		
	
		slider.on('touchmove', function(e){		
			pos = Math.floor(e.changedTouches[0].pageX - e.changedTouches[0].target.offsetLeft - 60 - e.changedTouches[0].target.parentElement.parentElement.parentElement.offsetLeft)
			if ( pos < 430 && pos > 0 ) {
			x = pos;
			proc = Math.floor(x/w);
			result = ( proc+'%' );
				span.css( 'left', result);
				bef.css('width', result );
			}
				});
		})
}else{
	span.on('mousedown touchstart', function(mc1) {
		stop = true;
		mc1.preventDefault();  
		span.css({zIndex: '2'});
		if(!stop) return false;
			slider.on('mousemove', function (e) {
				e.preventDefault(); 
				if(!stop) return false;
				x = e.offsetX;
				proc = Math.floor(x/w);
				result = ( proc+'%' );
				result2 = (proc-3) + '%';
				span.css({
					left: result
				});
				bef.css('width', result2 );
				});
			$('html').on('mouseup touchend', function(mc2) {
				mc2.preventDefault(); 
				span.css({zIndex: '4'});
				stop = false;
			});
	});
};
}
			

});
// span.mousedown(function(mc1) {
// 			span.css({zIndex: '2'});
// 			if(!stop) return false;
// 			slider.mousemove(function(e) {
// 			if(!stop) return false;
// 			x = e.offsetX; 
// 			proc = Math.floor(x/w);
// 			result = ( proc+'%' );
// 			result2 = (proc-3) + '%'
// 			console.log(result, ' '+ x);
// 			span.css({
// 				left: result
// 			});
// 			bef.css('width', result2 );
// 			});
// 		});
// 		$('html').mouseup(function(mc2) {
// 			span.css({zIndex: '4'});
// 			stop = false;
// 			span.mousedown(function(mc0) {
// 				stop = true;
// 			});
// 		});


	// span.on('mousedown', function(mc1) {
	// 			span.css({zIndex: '2'});
	// 			if(!stop) return false;
	// 			slider.on('mousemove', function(e) {
	// 			if(!stop) return false;
	// 			x = e.offsetX; 
	// 			proc = Math.floor(x/w);
	// 			result = ( proc+'%' );
	// 			result2 = (proc-3) + '%'
	// 			console.log(result, ' '+ x);
	// 			span.css({
	// 				left: result
	// 			});
	// 			bef.css('width', result2 );
	// 			});
	// 		});
	// 		$('html').on('mouseup', function(mc2) {
	// 			span.css({zIndex: '4'});
	// 			stop = false;
	// 			span.on('mousedown', function(mc0) {
	// 				stop = true;
	// 			});
	// 		});