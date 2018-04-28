const gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    cleanCss = require('gulp-clean-css'),
    clean = require('gulp-clean'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass'),
    watch = require('gulp-watch'),
    del = require('del'),
    inject = require('gulp-inject')
    htmlreplace = require('gulp-html-replace');

var tasks = [
    'clean',
    'html',    
    'favicon',
    'fonts',
    'styles',
    'libs',
    'images',
];

gulp.task('clean', () => {    
    del.sync(['./dist/**']);
});

gulp.task('styles', () => {
    return gulp.src('./src/css/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(cleanCss())
        .pipe(concat('main.css'))
        .pipe(gulp.dest('./dist'));
});

gulp.task('libs', () => {
    gulp.src([
            './src/js/jquery-3.3.1.js',
            './src/js/bootstrap.min.js',
            './src/js/owl.carousel.js',
            './src/js/script.js',            
        ])
        .pipe(concat('libs.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist'));
});

gulp.task('images', () => {
    gulp.src('./src/images/*')
        .pipe(gulp.dest('./dist/images'));
});

gulp.task('favicon', () => {
    gulp.src('./src/favicon.ico')
        .pipe(gulp.dest('./dist'));
});

gulp.task('fonts', () => {
    gulp.src('./src/fonts/*')
        .pipe(gulp.dest('./dist/fonts'))
});

gulp.task('html', () => {
    gulp.src('./src/*.html')
        .pipe(gulp.dest('./dist'));
});

gulp.task('default', tasks, () => {
    gulp.src('./src/index.html')
        .pipe(
            htmlreplace({
                'css' : 'main.css',
                'js'  : ['libs.js']
            })
        )
        .pipe(gulp.dest('./dist'));
});