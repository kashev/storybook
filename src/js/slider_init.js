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
 * slider_init.js
 */

/*
 * STARTED FROM http://cferdinandi.github.io/slider/
 * Modified to include hash navigation.
 */
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
        return (visibility == 'visible') ? 'hidden' : 'visible';
    });
};

var GLOBAL_SLIDES;

$(document).ready(function(){

window.sliderInit = (function (window, document, undefined) {

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
      }
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
      }

      // Handle next button
      var handleNextBtn = function (event) {
        event.preventDefault();
        stopVideo();
        mySwipe[index].next();
        handleArrowVisibility();
      };

      // Handle previous button
      var handlePrevBtn = function (event) {
        event.preventDefault();
        stopVideo();
        mySwipe[index].prev();
        handleArrowVisibility();
      };

      // Handle keypress
      var handleKeypress = function (event) {
        if ( event.keyCode == 37 ) {
          mySwipe[index].prev();
        }
        if ( event.keyCode == 39 ) {
          mySwipe[index].next();
        }
        handleArrowVisibility();
      };

      // Handle hash nav
      var handleHashBtn = function (event) {
        event.preventDefault();
        stopVideo();
        toggleToC();
      }


      // EVENTS, LISTENERS, AND INITS

      // Activate Slider
      mySwipe[index] = Swipe(slider, {
        // speed: 400,
        continuous: false,
        disableScroll: true,
        // stopPropagation: false,
        callback: function(index, elem) {
          createSlideCount(); // Update with new position on slide change
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
        toggleToC(); // hide ToC
      });
    });

  }

})(window, document);


}); /* END DOCUMENT READY */
