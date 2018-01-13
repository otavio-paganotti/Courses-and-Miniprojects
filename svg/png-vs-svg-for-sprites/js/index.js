/*
 The code here was put together very quickly in order to demonstrate the issue that all things being equal, SVG performs worse than PNG when used as background images in sprites. For more on the thought process behind this, read http://adrianosmond.com/using-svg-for-sprites-a-cautionary-tale/ or get in touch on Twitter: @adrianosmond.
 */

    var $radios = $(".filetype");
		var $container = $("#container");
		var changeRadios = function () {
			$container.attr("class", $(this).val());
		};
		$radios.change(changeRadios);
		var scrollTime = 10000;
		var scrollDown = function() {
			$("html, body").animate({ scrollTop: "2000px" }, scrollTime);	
		};

		var scrollUp = function() {
			$("html, body").animate({ scrollTop: "0px" }, scrollTime);	
		};
		
		scrollDown();
		setInterval(scrollDown, 2 * scrollTime);
		setTimeout(function() {
			scrollUp()
			setInterval(scrollUp, 2 * scrollTime);
		}, scrollTime);