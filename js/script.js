window.onload = init;

function init() {
	
	$(function() {
    	$('#thumbnails a').lightBox({		    
    		overlayBgColor: '#000',
		    overlayOpacity: 0.6,
		    // imageLoading: 'http://example.com/images/loading.gif',
		    // imageBtnClose: 'http://example.com/images/close.gif',
		    // imageBtnPrev: 'http://example.com/images/prev.gif',
		    // imageBtnNext: 'http://example.com/images/next.gif',
		    containerResizeSpeed: 350,
		    txtImage: 'Afbeelding',
		    txtOf: 'van de'});
	});



	var buttons = document.getElementsByClassName('button');

	var changeClass = function(i) {
		for (var i = 0; i < buttons.length; i++) {
			if (buttons[i].classList.contains('extra')) {
				buttons[i].classList.remove('extra');
			} else {
				buttons[i].classList.add('extra');
			}
		}
	};

	for (var i = 0; i < buttons.length; i++) {
		buttons[i].addEventListener('click', changeClass, false)
		
	}
};


