storybook
=========

    storybook
    'A Storybook Webapp, Optimized for iPad'

    Kashev Dalmia
    kashev.dalmia@gmail.com

    Yet Another Project for ARTD 313 @ UIUC, Sp 2014
    proj1a3b - dalmia3

# README.md

## About
This project was designed and built for the Spring 2014 semester of Art & Design 313 - Digital Interaction Design @ The University of Illinois at Urbana-Champaign.

The resultant application is currently live at:

- http://kashevdalmia.com/moon

## The Book
The book is an interpretation of the children's story ['Goodnight Moon'](http://en.wikipedia.org/wiki/Goodnight_Moon) by Margaret Wise Brown. 

## Instructions
Building this code from source requires `node`, `npm`, and `ruby`.

In the project root, run `npm install` to install all Javascript dependencies. Run `gem install sass` to be able to compile Sass files. Install `bourbon` & `neat` by running `gem install bourbon neat`, then install to the project by running `bourbon install` & `neat install` inside of `src/css/`. Build by typing `grunt` for the development, unminified version or `grunt dist` for a minified version. This will compile `sass` files, `jshint` lint all Javascript files, and move deployable code to `dist/`. Run `grunt server` for live updating dev server at `http://localhost:8000`. Serving is set to be on `0.0.0.0` so that testing can be done on other devices (an iPad 2) by connecting to the LAN IP of the host computer on port `8000`.

## Thanks
This project is possible thanks to the work on the following projects:

- [Node](http://nodejs.org/)
- [Grunt](http://gruntjs.com/)
- [jQuery](http://jquery.com/)
- [Sass](http://sass-lang.com/)
- [Bourbon](http://bourbon.io/)
- [Neat](http://neat.bourbon.io/)
- [Slider](http://cferdinandi.github.io/slider/)
- [Font Awesome](http://fortawesome.github.io/Font-Awesome/)

Thanks to Professor Brad Tober for help & guidance. Special thanks to Amy Budzicz for helping me approach strangers.

