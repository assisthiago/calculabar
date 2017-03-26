'use strict';

const gulp              = require('gulp');
const babel             = require('gulp-babel');
const sass              = require('gulp-sass');
const browserSync       = require('browser-sync').create();

// source vars
const path = {
    src: {
        js: ['app/src/**/*.js'],
        sass: ['app/src/**/*.sass']
    },
    dist: {
        js: 'app/dist/js',
        css: 'app/dist/css'
    }
};

gulp.task('serve', () => {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });

    gulp.watch('**/*.html').on('change', browserSync.reload);
    gulp.watch(path.src.sass, ['css']);
    gulp.watch(path.src.js, ['js']);
});

gulp.task('js', () => {
    return gulp.src(path.src.js)
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest(path.dist.js))
        .pipe(browserSync.stream());
});

gulp.task('css', () => {
    return gulp.src(path.src.sass)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(path.dist.css))
        .pipe(browserSync.stream());
});

gulp.task('default', ['css', 'js', 'serve']);
