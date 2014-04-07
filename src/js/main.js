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
/* global     Swipe:false */

/*
 * Add actual invisibility to jQuery
 *   http://stackoverflow.com/a/9614662/1473320
 */
jQuery.fn.visible = function() {
    return this.css('visibility', 'visible');
};

jQuery.fn.invisible = function() {
    return this.css('visibility', 'hidden');
};

jQuery.fn.visibilityToggle = function() {
    return this.css('visibility', function(i, visibility) {
        return (visibility === 'visible') ? 'hidden' : 'visible';
    });
};

/*
 * WAIT FOR DOCUMENT LOAD
 */
$(document).ready(function(){

  /*
   * NAVIGATE WITHIN MOBILE WEBAPP
   */
  
  /* jshint ignore:start */
  (function(a,b,c){if(c in b&&b[c]){var d,e=a.location,f=/^(a|html)$/i;a.addEventListener("click",function(a){d=a.target;while(!f.test(d.nodeName))d=d.parentNode;"href"in d&&(d.href.indexOf("http")||~d.href.indexOf(e.host))&&(a.preventDefault(),e.href=d.href)},!1)}})(document,window.navigator,"standalone")
  /* jshint ignore:end   */
  
  /*
   * INSIST ON IPAD ORIENTATION
   */
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
  }
/*
 * STARTED FROM http://cferdinandi.github.io/slider/
 * Modified to include hash navigation, etc.
 */
  /*
   * INITIALIZE SLIDER
   *   STARTED FROM http://cferdinandi.github.io/slider/
   *   Modified to include hash navigation, etc.
   */
  /*
   * SLIDER GLOBALS
   *   Used to clear canvases that are unused; keep iOS memory low.
   */
  var ipad_width  = 1024;
  var ipad_height = 748;
  var image_urls = [];
  image_urls[0]  = "img/joes.jpg";
  image_urls[1]  = "img/green-room.jpg";
  image_urls[2]  = "img/phone.jpg";
  image_urls[3]  = "img/joes.jpg";
  image_urls[4]  = "img/bears-chairs.jpg";
  image_urls[5]  = "img/kittens.jpg";
  image_urls[6]  = "img/mittens.jpg";
  image_urls[7]  = "img/house.jpg";
  image_urls[8]  = "img/young-mouse.jpg";
  image_urls[9]  = "img/mush.jpg";
  image_urls[10] = "img/old-lady.jpg";
  image_urls[11] = "img/gn-room.png";
  image_urls[12] = "img/gn-moon.jpg";
  image_urls[13] = "img/gn-cow.jpg";
  image_urls[14] = "img/gn-light-redballoon.jpg";
  image_urls[15] = "img/gn-bears.png";
  image_urls[16] = "img/gn-kittens.jpg";
  image_urls[17] = "img/gn-clocks.jpg";
  image_urls[18] = "img/gn-house.jpg";
  image_urls[19] = "img/gn-mouse.jpg";
  image_urls[20] = "img/gn-brush.jpg";
  image_urls[21] = "img/gn-nobody.jpg";
  image_urls[22] = "img/gn-mush.jpg";
  image_urls[23] = "img/gn-oldlady.jpg";
  image_urls[24] = "img/gn-starsair.jpg";
  image_urls[25] = "img/gn-noises.jpg";
  image_urls[26] = "img/joes.jpg";
  image_urls[27] = "img/gn-room.jpg";
  image_urls[28] = "img/gn-room.jpg";
  var tiny_image = 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=';
  
  var slider = window.sliderInit = (function (window, document, undefined) {
    'use strict';

    // Feature Test
    if ( 'querySelector' in document && 'addEventListener' in window && Array.prototype.forEach ) {

      // SELECTORS
      var sliders = document.querySelectorAll('[data-slider]');
      var mySwipe = Array;


      // EVENTS, LISTENERS, AND INITS

      // Add class to HTML element to activate conditional CSS
      document.documentElement.className += ' js-slider';

      // Activate all sliders
      Array.prototype.forEach.call(sliders, function (slider, index) {

        // SELECTORS

        var slideCount = slider.querySelector('[data-slider-count]'); // Slider count wrapper
        var slideNav = slider.querySelector('[data-slider-nav]'); // Slider nav wrapper


        // METHODS
        var cleanupCanvases = function() {
          var currentSlide = mySwipe[index].getPos() - 1;
          var slideTotal = mySwipe[index].getNumSlides();
          for (var i = 0; i < slideTotal; i++) {
            /* jshint ignore:start */
            if ( (i === (currentSlide - 1)) || (i === currentSlide) || (i === (currentSlide + 1))) {
              $('#page-'+String(i)).attr('src', image_urls[i]).load(function(){
                this.width;
              });
            } else {
              $('#page-'+String(i)).attr('src', tiny_image).load(function(){
                this.width;
              });
            }
            /* jshint ignore:end   */
          }
        };

        // Display count of slides
        var createSlideCount = function () {
          var slideTotal = mySwipe[index].getNumSlides();
          var slideCurrent = mySwipe[index].getPos();
          if ( slideCount !== null ) {
            slideCount.innerHTML = slideCurrent + ' of ' + slideTotal;
          }
        };

        // Display Slider navigation
        var createNavButtons = function () {
          if ( slideNav !== null ) {
            slideNav.innerHTML = '<a data-slider-nav-prev id="slide-nav-prev" href="#" style="visibility:hidden">'    +
                                    '<i class="fa fa-arrow-left"></i>'  +
                                  '</a>     '                           +
                                  '<a data-slider-nav-hash href="#"'    +
                                    '<i class="fa fa-th nav"></i>'      +
                                  '</a>     '                           +
                                  '<a data-slider-nav-next id="slide-nav-next" href="#">'   +
                                    '<i class="fa fa-arrow-right"></i>' +
                                  '</a>';
          }
        };

        // Stop YouTube, Vimeo, and HTML5 videos from playing when leaving the slide
        var stopVideo = function () {
          var currentSlide = mySwipe[index].getPos() - 1;
          var iframe = slider.querySelector( '[data-index="' + currentSlide + '"] iframe');
          var video = slider.querySelector( '[data-index="' + currentSlide + '"] video' );
          if ( iframe !== null ) {
            var iframeSrc = iframe.src;
            iframe.src = iframeSrc;
          }
          if ( video !== null ) {
            video.pause();
          }
        };

        var toggleToC = function() {
          $('#slides-nav-menu').toggle({
            duration : 400
          });
        };
        // handle show and hide of next/prev
        var handleArrowVisibility = function() {
          var i = mySwipe[index].getPos() - 1;
          if (i === 0)
          {
            $('#slide-nav-next').visible();
            $('#slide-nav-prev').invisible();
          }
          else if (i === 28) // specific to this slideshow
          {
            $('#slide-nav-next').invisible();
            $('#slide-nav-prev').visible();
          }
          else
          {
            $('#slide-nav-next').visible();
            $('#slide-nav-prev').visible();
          }
        };

        // Handle next button
        var handleNextBtn = function (event) {
          event.preventDefault();
          stopVideo();
          mySwipe[index].next();
        };

        // Handle previous button
        var handlePrevBtn = function (event) {
          event.preventDefault();
          stopVideo();
          mySwipe[index].prev();
        };

        // Handle keypress
        var handleKeypress = function (event) {
          if ( event.keyCode === 37 ) {
            mySwipe[index].prev();
          }
          if ( event.keyCode === 39 ) {
            mySwipe[index].next();
          }
        };

        // Handle hash nav
        var handleHashBtn = function (event) {
          event.preventDefault();
          stopVideo();
          toggleToC();
        };


        // EVENTS, LISTENERS, AND INITS

        // Activate Slider
        mySwipe[index] = new Swipe(slider, {
          // speed: 0,
          continuous: false,
          disableScroll: true,
          // stopPropagation: false,
          callback: function(index, elem) {
            createSlideCount(); // Update with new position on slide change
            cleanupCanvases();  // reduce memory on iOS;
            handleArrowVisibility();
          },
          // transitionEnd: function(index, elem) {}
        });

        // Create slide count and nav
        createSlideCount();
        createNavButtons();
        var btnNext = slider.querySelector('[data-slider-nav-next]'); // Next slide button
        var btnPrev = slider.querySelector('[data-slider-nav-prev]'); // Previous slide button
        var btnHash = slider.querySelector('[data-slider-nav-hash]'); // Hash Navigation slide

        // Toggle Previous & Next Buttons
        if ( btnNext ) {
          btnNext.addEventListener('click', handleNextBtn, false);
        }
        if ( btnPrev ) {
          btnPrev.addEventListener('click', handlePrevBtn, false);
        }
        if ( btnHash ) {
          btnHash.addEventListener('click', handleHashBtn, false);
        }

        // Toggle Left & Right Keypress
        window.addEventListener('keydown', handleKeypress, false);


        /* Set ToC Handlers */
        $("#slides-nav-menu div").click(function(){
          var deststr = $(this).text();
          var destnum;
          if (deststr === "thanks")
          {
            destnum = 27;
          }
          else if (deststr === "about")
          {
            destnum = 28;
          }
          else if (deststr === "title")
          {
            destnum = 0;
          }
          else
          {
            destnum = parseInt(deststr);
          }
          mySwipe[index].slide(destnum, 400);
          handleArrowVisibility();
          cleanupCanvases();
          toggleToC(); // hide ToC
        });
      });

    }
  })(window, document);
  /*
   * END SLIDER INIT
   */
  $('#loading').toggle();
});
