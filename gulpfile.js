const gulp = require('gulp'); 
    sass = require('gulp-sass');
    rename = require('gulp-rename');
    cssnano = require('gulp-cssnano');
    imgmin = require('gulp-imagemin');
    uglify = require('gulp-uglify');
    concat = require('gulp-concat');
gulp.task('sass',function(){
    gulp.src('./src/sass/*.scss')
    .pipe(sass())
    .pipe(rename({'suffix':'.min'}))
    .pipe(cssnano())
    .pipe(gulp.dest('./dist/css'))
})
gulp.task('js',function(){
    gulp.src('./src/js/*.js')
    .pipe(uglify())
    .pipe(rename({'suffix':'.min'}))
    .pipe(gulp.dest('./dist/js'))
})
gulp.task('img',function(){
    gulp.src('./src/img/*.*')
    .pipe(imgmin())
    .pipe(gulp.dest('./dist/img'))
})
gulp.task('gimg',function(){
    gulp.src('./src/img/*.*')
    .pipe(imgmin())
    .pipe(gulp.dest('./dist/goodimg'))
})
gulp.task('default',function(){
    gulp.watch('./src/sass/*.scss',['sass']);
    gulp.watch('./src/img/*.*',['img']);
    gulp.watch('./src/js/*.js',['js']);
    gulp.watch('./src/goodimg/*.js',['gimg']);
})