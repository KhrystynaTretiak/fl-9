const gulp = require('gulp');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');
const cleanCss = require('gulp-clean-css');
const connect = require('gulp-connect');
const del = require('del');
const jshint = require('gulp-jshint');

sass.compiler = require('node-sass');


gulp.task('build', () => {
    del(['bin/*'])
    gulp.src('src/sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('style.min.css'))
        .pipe(cleanCss())
        .pipe(gulp.dest('bin/css'))
    gulp.src(['src/js/clock.js', 'src/js/canvasState.js', 'src/js/app.js'])
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(concat('app.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('bin/js'))
    gulp.src('src/app.html')
        .pipe(concat('index.html'))
        .pipe(gulp.dest('bin'))
});

gulp.task('default', () => {
    connect.server({
        port: 8080,
        livereload: true
    });
});

gulp.task('build-prod', () =>{
    del(['dist/*'])
    gulp.src('bin/js/*.js')
        .pipe(concat('app.min.js'))
        .pipe(gulp.dest('dist/js'))
    gulp.src('bin/css/*.css')
        .pipe(concat('style.min.css'))
        .pipe(gulp.dest('dist/css'))
    gulp.src('bin/index.html')
        .pipe(gulp.dest('dist'))
});

gulp.task('lint', () =>{
    gulp.src('src/js/*.js')
    .pipe(jshint())
});
