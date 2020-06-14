# *SOFIT-19*

<img src="images/screenshot_one.png" width=1000>

SOFIT-19 is the best site to keep your body in shape with the best exercises and nutrition plans. Private trainings with professional trainers, nutrition plans from the best dietologists customised for your fitness goals and stretching routines will turn your body in the best shape possible.

## How to use the project?
<img src="images/phone_land_page.png">
Just visit [the live demo](https://nikitaprodanov.github.io/WEBDesignFinalProjecct/).


## Used technologies

![GitHub](https://img.shields.io/github/languages/count/nikitaprodanov/WEBDesignFinalProjecct?style=for-the-badge)

![GitHub](https://img.shields.io/github/languages/top/nikitaprodanov/WEBDesignFinalProjecct?label=Most%20used%20language&logo=c%2B%2B&style=for-the-badge)

All used technologies:
* [Gulp](https://gulpjs.com/)

        const gulp = require('gulp');
        const sass = require('gulp-sass');
        const browserSync = require('browser-sync').create();

        // Compile scss into css
        function style() {
            // where is my scss file
            return gulp.src('./scss/**/*.scss')
            // pass that file through sass compiler
            .pipe(sass())
            //  where do I save the compiled CSS
            .pipe(gulp.dest('./css'))
            // stream changes to all browsers
            .pipe(browserSync.stream());
        }

        function watch() {
            browserSync.init({
                server: {
                    baseDir: './'
                }
            });

            gulp.watch('./scss/**/*.scss', style);
            gulp.watch('./*html').on('change', browserSync.reload);
            gulp.watch('./*.js').on('change', browserSync.reload);
        }

        exports.style = style;
        exports.watch = watch;

* [Sass](https://sass-lang.com/)
* [Regular html, css and js](https://www.w3schools.com/whatis/default.asp)

<img src="images/memberships.png">


## Dev stats:
![GitHub](https://img.shields.io/github/issues-pr/nikitaprodanov/WEBDesignFinalProjecct?color=green&style=for-the-badge)

![GitHub](https://img.shields.io/github/issues-pr-closed/nikitaprodanov/WEBDesignFinalProjecct?color=green&style=for-the-badge)

![GitHub](https://img.shields.io/github/last-commit/nikitaprodanov/WEBDesignFinalProjecct/Nikita?style=for-the-badge)

![GitHub](https://img.shields.io/github/v/tag/nikitaprodanov/WEBDesignFinalProjecct?logo=github&style=for-the-badge)
![GitHub](https://img.shields.io/github/release-date/nikitaprodanov/WEBDesignFinalProjecct?logo=github&style=for-the-badge)

## Repo stats:
![GitHub](https://img.shields.io/github/forks/nikitaprodanov/WEBDesignFinalProjecct?style=social)

![GitHub](https://img.shields.io/github/stars/nikitaprodanov/WEBDesignFinalProjecct?style=social)

![GitHub](https://img.shields.io/github/watchers/nikitaprodanov/WEBDesignFinalProjecct?style=social)
