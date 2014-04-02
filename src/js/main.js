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


/* global  PxLoader:false */
/* global NProgress:false */
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

  /* START PROGRESS BAR */
  NProgress.start();

  /* PXLOADER */
  var loader = new PxLoader();
  var imgs = [
    loader.addImage("img/joes.jpg"),
    loader.addImage("img/green-room.png"),
    loader.addImage("img/phone.png"),
    loader.addImage("img/bears-chairs.png"),
    loader.addImage("img/kittens.png"),
    loader.addImage("img/mittens.jpg"),
    loader.addImage("img/house.jpg"),
    loader.addImage("img/young-mouse.jpg"),
    loader.addImage("img/mush.jpg"),
    loader.addImage("img/old-lady.jpg"),
    loader.addImage("img/gn-room.png"),
    loader.addImage("img/gn-moon.jpg"),
    loader.addImage("img/gn-cow.JPG"),
    loader.addImage("img/gn-light-redballoon.jpg"),
    loader.addImage("img/gn-bears.png"),
    loader.addImage("img/gn-kittens.jpg"),
    loader.addImage("img/gn-clocks.jpg"),
    loader.addImage("img/gn-house.jpg"),
    loader.addImage("img/gn-mouse.jpg"),
    loader.addImage("img/gn-brush.jpg"),
    loader.addImage("img/gn-nobody.jpg"),
    loader.addImage("img/gn-mush.jpg"),
    loader.addImage("img/gn-oldlady.jpg"),
    loader.addImage("img/gn-starsair.jpg"),
    loader.addImage("img/gn-noises.jpg")
  ];

  loader.addProgressListener(function(e){
    // console.log(e.completedCount / e.totalCount);
    NProgress.set(e.completedCount / e.totalCount);
  });

  loader.addCompletionListener(function() {
    NProgress.done();
  });

  loader.start();

});
