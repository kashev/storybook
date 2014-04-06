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

;(function($){
  var cache = []; var timeout;

  $.fn.remove = function(){
    return this.each(function(){
      if(this.parentNode){
        if(this.tagName === 'IMG'){
          cache.push(this);
          this.src = 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=';
          if (timeout) {
            clearTimeout(timeout);
          }
          timeout = setTimeout(function(){ cache = []; }, 60000);
        }
        this.parentNode.removeChild(this);
      }
    });
  };
})(jQuery);

  /* START PROGRESS BAR */
  NProgress.configure({ ease: 'ease', speed: 25 });
  NProgress.start();

  /* PXLOADER */
  var loader = new PxLoader();
  var img_texture             = loader.addImage("img/texture.jpg");
  var img_joes                = loader.addImage("img/joes.jpg");
  var img_green_room          = loader.addImage("img/green-room.jpg");
  var img_phone               = loader.addImage("img/phone.jpg");
  var img_bears_chairs        = loader.addImage("img/bears-chairs.jpg");
  var img_kittens             = loader.addImage("img/kittens.jpg");
  var img_mittens             = loader.addImage("img/mittens.jpg");
  var img_house               = loader.addImage("img/house.jpg");
  var img_young_mouse         = loader.addImage("img/young-mouse.jpg");
  var img_mush                = loader.addImage("img/mush.jpg");
  var img_old_lady            = loader.addImage("img/old-lady.jpg");
  var img_gn_room             = loader.addImage("img/gn-room.jpg");
  var img_gn_moon             = loader.addImage("img/gn-moon.jpg");
  var img_gn_cow              = loader.addImage("img/gn-cow.JPG");
  var img_gn_light_redballoon = loader.addImage("img/gn-light-redballoon.jpg");
  var img_gn_bears            = loader.addImage("img/gn-bears.jpg");
  var img_gn_kittens          = loader.addImage("img/gn-kittens.jpg");
  var img_gn_clocks           = loader.addImage("img/gn-clocks.jpg");
  var img_gn_house            = loader.addImage("img/gn-house.jpg");
  var img_gn_mouse            = loader.addImage("img/gn-mouse.jpg");
  var img_gn_brush            = loader.addImage("img/gn-brush.jpg");
  var img_gn_nobody           = loader.addImage("img/gn-nobody.jpg");
  var img_gn_mush             = loader.addImage("img/gn-mush.jpg");
  var img_gn_oldlady          = loader.addImage("img/gn-oldlady.jpg");
  var img_gn_starsair         = loader.addImage("img/gn-starsair.jpg");
  var img_gn_noise            = loader.addImage("img/gn-noises.jpg");

  loader.addProgressListener(function(e){
    NProgress.set(e.completedCount / e.totalCount);
  });

  loader.addCompletionListener(function() {
    var ipad_width  = 1024;
    var ipad_height = 748;
    document.getElementById("page-0" ).getContext("2d").drawImage(img_bears_chairs, 0, 0, ipad_width, ipad_height);
    document.getElementById("page-1" ).getContext("2d").drawImage(img_bears_chairs, 0, 0, ipad_width, ipad_height);
    document.getElementById("page-2" ).getContext("2d").drawImage(img_bears_chairs, 0, 0, ipad_width, ipad_height);
    document.getElementById("page-3" ).getContext("2d").drawImage(img_bears_chairs, 0, 0, ipad_width, ipad_height);
    document.getElementById("page-4" ).getContext("2d").drawImage(img_bears_chairs, 0, 0, ipad_width, ipad_height);
    document.getElementById("page-5" ).getContext("2d").drawImage(img_bears_chairs, 0, 0, ipad_width, ipad_height);
    document.getElementById("page-6" ).getContext("2d").drawImage(img_bears_chairs, 0, 0, ipad_width, ipad_height);
    document.getElementById("page-7" ).getContext("2d").drawImage(img_bears_chairs, 0, 0, ipad_width, ipad_height);
    document.getElementById("page-8" ).getContext("2d").drawImage(img_bears_chairs, 0, 0, ipad_width, ipad_height);
    document.getElementById("page-9" ).getContext("2d").drawImage(img_bears_chairs, 0, 0, ipad_width, ipad_height);
    document.getElementById("page-10").getContext("2d").drawImage(img_bears_chairs, 0, 0, ipad_width, ipad_height);
    document.getElementById("page-11").getContext("2d").drawImage(img_bears_chairs, 0, 0, ipad_width, ipad_height);
    document.getElementById("page-12").getContext("2d").drawImage(img_bears_chairs, 0, 0, ipad_width, ipad_height);
    document.getElementById("page-13").getContext("2d").drawImage(img_bears_chairs, 0, 0, ipad_width, ipad_height);
    document.getElementById("page-14").getContext("2d").drawImage(img_bears_chairs, 0, 0, ipad_width, ipad_height);
    document.getElementById("page-15").getContext("2d").drawImage(img_bears_chairs, 0, 0, ipad_width, ipad_height);
    document.getElementById("page-16").getContext("2d").drawImage(img_bears_chairs, 0, 0, ipad_width, ipad_height);
    document.getElementById("page-17").getContext("2d").drawImage(img_bears_chairs, 0, 0, ipad_width, ipad_height);
    document.getElementById("page-18").getContext("2d").drawImage(img_bears_chairs, 0, 0, ipad_width, ipad_height);
    document.getElementById("page-19").getContext("2d").drawImage(img_bears_chairs, 0, 0, ipad_width, ipad_height);
    document.getElementById("page-20").getContext("2d").drawImage(img_bears_chairs, 0, 0, ipad_width, ipad_height);
    document.getElementById("page-21").getContext("2d").drawImage(img_bears_chairs, 0, 0, ipad_width, ipad_height);
    document.getElementById("page-22").getContext("2d").drawImage(img_bears_chairs, 0, 0, ipad_width, ipad_height);
    document.getElementById("page-23").getContext("2d").drawImage(img_bears_chairs, 0, 0, ipad_width, ipad_height);
    document.getElementById("page-24").getContext("2d").drawImage(img_bears_chairs, 0, 0, ipad_width, ipad_height);
    document.getElementById("page-25").getContext("2d").drawImage(img_bears_chairs, 0, 0, ipad_width, ipad_height);
    document.getElementById("page-26").getContext("2d").drawImage(img_bears_chairs, 0, 0, ipad_width, ipad_height);
    document.getElementById("page-27").getContext("2d").drawImage(img_bears_chairs, 0, 0, ipad_width, ipad_height);


    /* Done */
    NProgress.done();
    $('#loading').toggle();
  });

  loader.start();

});
