var gulp = require('gulp');
var minifyCSS = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');
var notify = require('gulp-notify');
var gutil = require('gulp-util');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var cssshrink = require('gulp-cssshrink');
var browserify = require('gulp-browserify');

// var exec = require('child_process').exec;
// var sys = require('sys');


var targetCSSDir = './public/min/';
var targetJSDir =  './public/js/';

gulp.task('css', function(){
    return gulp.src('./public/css/base.css')
    .pipe(autoprefixer('last 20 versions'))
    .pipe(minifyCSS({keepBreaks:true,keepSpecialComments: '1',processImport:true}))
    .pipe(concat('all.css'))
    .pipe(cssshrink())
    .pipe(gulp.dest(targetCSSDir))
    .pipe(notify({message: 'CSS prefixed and minified to all.css'}))
    });

gulp.task('js', function(){
   return gulp.src(['public/html5-video-analytics/va.js'])
   .pipe(gulp.dest('./dist/'))
   .pipe(notify({message: 'Js browserified and Renamed to bundle.js'}))
   });

gulp.task('watch', function(){
    gulp.watch('public/css/**/*.css', ['css']);
    gulp.watch('public/html5-video-analytics/**/*.js', ['js']);
    });

gulp.task('default', ['watch']);
