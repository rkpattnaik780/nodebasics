/* eslint-disable */

var gulp = require("gulp"),
    uglify = require("gulp-uglify"),
    rename = require("gulp-rename");

var sass = require('gulp-sass');
var minifyCSS = require('gulp-minify-css');
var concat = require('gulp-concat');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require("browser-sync");
var reload = browserSync.reload ;

/////////////////////////////////////////
//// SCRIPTS
/////////////////////////////////////////


gulp.task("scripts" , function(){
    gulp.src(["app/js/**/*.js" , "!app/js/**/*.min.js"])  // Sorce files with .min.js excluded
       .pipe(rename({ suffix : ".min"}))                  // prefix .min.js to the source files
        .pipe(uglify())                                   // minify the code
          .pipe(gulp.dest("app/js"))                      // destination of minified files
            .pipe(reload({ stream : true}));
});

/////////////////////////////////////////
///////////// SASS COMPILER
/////////////////////////////////////////

gulp.task("sass" , function(){
    return gulp.src('app/scss/**/*.scss')  // location of scss file
        .pipe(sass())                 // transpile the scss file
        .pipe(gulp.dest('app/css'));  // destination folder
});

/////////////////////////////////////////
/////////////////// MINIFY CSS
/////////////////////////////////////////

gulp.task('minify-css', function(){
     gulp.src('app/css/**/*.css')
    .pipe(minifyCSS())
    .pipe(autoprefixer('last 1 version', 'safari 5', 'ie 8', 'ie 9'))
    .pipe(concat('style.min.css'))
    .pipe(gulp.dest('app/css'))
    .pipe(reload({ stream : true}));
});

/////////////////////////////////////////
///////////// RELOAD HTML
/////////////////////////////////////////

gulp.task("html" , function() {
    gulp.src("app/**/*.html");
});

/////////////////////////////////////////
////////////// BROWSER SYNC
///////////////////////////////////////

gulp.task("browser-sync" , function(){
    browserSync({
        server : {
            baseDir : "./app"
        }
    });
});

/////////////////////////////////////////
///////////// WATCH TASKS
/////////////////////////////////////////

gulp.task("watch" , function(){
    gulp.watch("app/js/**/*.js" , ["scripts"]);
    gulp.watch("app/scss/**/*.scss", ["sass"]);
    gulp.watch("app/css/**/*.css" , ["minify-css"]);
    gulp.watch("app/**/*.html" , ["html"]);
});

/////////////////////////////////////////
////////// DEFAULT TASK
/////////////////////////////////////////

gulp.task("default" , [ "scripts" , "minify-css" , "browser-sync" , "watch" ]);