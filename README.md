# St Pauls

To setup locally. Clone `St Pauls` into an appropriately named folder (e.g. St Pauls). 

## Gulp
Running `npm install` from the root of the repo will install the necessary node modules to compile the CSS. You may also need to install [Gulp](http://gulpjs.com/) globally using `npm install --global gulp-cli`. See the [Gulp](http://gulpjs.com/) website for setup details.

## CSS
All CSS is written in the SCSS syntax, and compiled to one minified CSS file. This site roughly follows a SMACSS / Atomic Design file structure, influenced by Bitters.

* `base` contains settings and standard HTML elements styling.
* `modules` contains modules on the site that can be repeated on multiple pages, such as the header, hero and footer.
* `vendor` contains files required by plugins. These have been edited, so should not be replaced when updating plugins unless absolutely necessary.

All these individual partials are then complied by `application.scss`. This is either as individual imports if the cascade order is important, or using globing for more modular components.

Running `gulp styles` will build the minified version of the file, as will the `gulp watch` command when a partial is saved.

## Third Party
The St Pauls site uses Open Source tools, plugins and libraries to aid setup and development.

### Tools
* [NPM](https://www.npmjs.com/)
* [SASS](http://sass-lang.com/)
* [Node-sass](https://github.com/sass/node-sass)
* [SASS-MQ](https://github.com/sass-mq/sass-mq)
* [Autoprefixer](https://github.com/postcss/autoprefixer)
* [Gulp](http://gulpjs.com/)

### CSS Libraries
* [normalize.css](https://necolas.github.io/normalize.css/)
