const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

// Compile scss into css
function style() {
    // where is my scss file
    return gulp.src('./sass/**/*.sass')
    // pass that file through sass compiler
    .pipe(sass())
    //  where do I save the compiled CSS
    .pipe(gulp.dest('./css'))
    // stream changes to all browsers
    .pipe(browserSync.stream());
}

exports.style = style;