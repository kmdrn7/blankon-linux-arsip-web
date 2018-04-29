const gulp = require('gulp'),
    del = require('del'),
    clean = require('gulp-clean'),
    cleanCss = require('gulp-clean-css'),
    concat = require('gulp-concat'),
    htmlreplace = require('gulp-html-replace'),
    sass = require('gulp-sass'),
    uglify = require('gulp-uglify');

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
            './src/js/jquery.js',
            './src/js/bootstrap.min.js',
            './src/js/owl.carousel.js',
            './src/js/anime.min.js',
            './src/js/prism.js',
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