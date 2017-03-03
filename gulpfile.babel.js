'use strict';

const gulp              = require('gulp');
const browserSync       = require('browser-sync').create();
const browserReload     = browserSync.reload;

gulp.task('serve', () => {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });

    gulp.watch('*.html').on('change', browserReload);
});

gulp.task('default', ['serve']);
