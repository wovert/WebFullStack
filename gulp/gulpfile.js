const gulp = require('gulp');
const babel=require('gulp-babel');
const rename=require('gulp-rename');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const cssmin=require('gulp-cssmin');
const less=require('gulp-less');
const imagemin=require('gulp-imagemin');
const connect = require('gulp-connect')
const sourcemaps = require('gulp-sourcemaps');

// src/js 目录下所有js文件及及其子目录下的js文件
const js_path = ['./src/js/**/*.js'];

var jsSrc = './src/js/**/*.js';
var jsDist = './build/js';

var lessSrc = './src/less/**/*.less';
var lessDist = './build/css';

var htmlSrc = './src/*.html';
var htmlDist = '.';

gulp.task('js', ()=>{
  return gulp
    .src(jsSrc)
    .pipe(sourcemaps.init())
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(concat('bundle.js')) // 打包成一个文件
    .pipe(uglify()) // 压缩文件
    .pipe(rename({suffix: '.min'}))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(jsDist)) // 打包输出目录
    .pipe(connect.reload())
});

gulp.task('less', ()=>{
  return gulp
    .src(lessSrc)
    .pipe(sourcemaps.init())
    .pipe(concat('main.min.css'))
    .pipe(less())
    .pipe(cssmin())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(lessDist))
    .pipe(connect.reload())
});

gulp.task('image', ()=>{
  return gulp
    .src(['./src/img/**/*.jpg','./src/img/**/*.gif','./src/img/**/*.png'])
    .pipe(imagemin([
      imagemin.gifsicle({interlaced: true}),
      imagemin.jpegtran({progressive: true}),
      imagemin.optipng({optimizationLevel: 5})
    ]))
    .pipe(gulp.dest('./build/img/'));
});

// 定义看守任务
gulp.task('watch', ()=>{
  return new Promise(function (resolve, reject) {
    gulp.watch(htmlSrc, gulp.series('html'));
    gulp.watch(jsSrc, gulp.series('js'));
    gulp.watch(lessSrc, gulp.series('less'));
    resolve();
  })
});


// 定义html任务
gulp.task('html', () => {
  return gulp
    .src(htmlSrc)
    .pipe(gulp.dest(htmlDist))
    .pipe(connect.reload())
});
  
// 定义livereload任务
gulp.task('connect', () => {
  connect.server({
    livereload: true
  });
});


gulp.task('default', gulp.series('js', 'html', 'less', 'watch', 'connect', 'image', (done) => done()));



