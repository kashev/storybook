/*
 * storybook
 * 'A Storybook Webapp, Optimized for iPad'
 * 
 * Kashev Dalmia
 * kashev.dalmia@gmail.com
 * 
 * Yet Another Project for ARTD 313 @ UIUC, Sp 2014
 * proj1a3b - dalmia3
 * 
 * main.js
 */

$(document).ready(function(){

  /* NAVIGATE WITHIN MOBILE WEBAPP */
  /* jshint ignore:start */
  (function(a,b,c){if(c in b&&b[c]){var d,e=a.location,f=/^(a|html)$/i;a.addEventListener("click",function(a){d=a.target;while(!f.test(d.nodeName))d=d.parentNode;"href"in d&&(d.href.indexOf("http")||~d.href.indexOf(e.host))&&(a.preventDefault(),e.href=d.href)},!1)}})(document,window.navigator,"standalone")
  /* jshint ignore:end   */
  
  /* INSIST ON IPAD ORIENTATION */
  if (navigator.userAgent.match(/iPad/i) !== null) {
    $(window).bind('orientationchange', function(e, onready){
      if (Math.abs(window.orientation) !== 90)
      {
        $('body').addClass('portrait').append('<img id="orientNotice" src="img/orient_notice.png" alt="Orient Notice" width="768" height="1004" />');
      } 
      else
      {
        $('body').removeClass('portrait');
        $('#orientNotice').remove();
      }
    });
    $(window).trigger('orientationchange', true);
  }
  else
  {
    /* NOT AN IPAD */
    // $("body").append("<img id='ipad' src='img/ipad.png'>");
  }

  $('.slides-nav .nav').click(function() {
    console.log('NAV');
  });

});
