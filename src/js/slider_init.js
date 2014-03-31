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
var GLOBAL_SLIDES;

var toggleToC = function() {
  $('#slides-nav-menu').toggle({
    duration : 400
  });
}

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
          slideNav.innerHTML = '<a data-slider-nav-prev href="#">'    +
                                  '<i class="fa fa-arrow-left"></i>'  +
                                '</a>     '                           +
                                '<a data-slider-nav-hash href="#"'    +
                                  '<i class="fa fa-th nav"></i>'      +
                                '</a>     '                           +
                                '<a data-slider-nav-next href="#">'   +
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
        if ( event.keyCode == 37 ) {
          mySwipe[index].prev();
        }
        if ( event.keyCode == 39 ) {
          mySwipe[index].next();
        }
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
      GLOBAL_SLIDES = mySwipe[index]; // only works with 1 set of slides on a page.
    });

  }

})(window, document);

/* Set ToC Handlers */
$(document).ready(function(){
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
    else
    {
      destnum = parseInt(deststr);
    }
    GLOBAL_SLIDES.slide(destnum, 400);
    toggleToC(); // hide ToC
  });
});
