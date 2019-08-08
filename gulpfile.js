var gulp = require('gulp');
var sass = require('gulp-sass');
var minify = require('gulp-clean-css');

var svgSprite = require('gulp-svg-sprite');

var input = './stylesheets/**/*.scss';
var output = './';

var config = {
  mode: {
    symbol: {
      dest: "svg", // Mode specific output directory
      prefix: "svg-%s", // Prefix for CSS selectors
      sprite: "svg/sprite.svg", // Sprite path and name
      inline: true,
      example: true // Create an HTML example document
    }
  }
}

gulp.task('styles', function() {
  gulp.src(input)
    // Error reporting
    .pipe(sass().on('error', sass.logError))
    // Minify
    .pipe(minify())
    // Save
    .pipe(gulp.dest(output))
});

//Watch task
gulp.task('watch',function() {
    gulp.watch(input,['styles']);
});