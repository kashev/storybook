$(document).ready(function(){

	// don't change the following code unless you really know what you are doing!
	
	(function(a,b,c){if(c in b&&b[c]){var d,e=a.location,f=/^(a|html)$/i;a.addEventListener("click",function(a){d=a.target;while(!f.test(d.nodeName))d=d.parentNode;"href"in d&&(d.href.indexOf("http")||~d.href.indexOf(e.host))&&(a.preventDefault(),e.href=d.href)},!1)}})(document,window.navigator,"standalone")
	
	if (navigator.userAgent.match(/iPad/i) != null) {
		$(window).bind('orientationchange', function(e, onready){
			if (Math.abs(window.orientation) != 90){
				$('body').addClass('portrait').append('<img id="orientNotice" src="images/orient_notice.png" alt="" width="768" height="1004" />');
			} 
			else {
				$('body').removeClass('portrait');
				$('#orientNotice').remove();
			}
		});
		$(window).trigger('orientationchange', true);
	};
	
	// end code change warning
	
	// your jQuery code here

});